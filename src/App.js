import React from 'react';
import './styles/App.scss';
import Menu from './components/Menu';
import Content from "./components/Content";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import MobileMenu from "./components/Menu/MobileMenu";
import { isMobile } from "react-device-detect";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Service from "./components/Content/Sections/Service";

class App extends React.Component {
    lastWidth = 0;
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            width: 0,
            height: 0,
            page: 'home'
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    showMenu = async () => {
        await this.setState({showMenu: !this.state.showMenu});
        if (isMobile) {
            if (this.state.showMenu) {
                document.querySelector('html').style.overflow = 'hidden';
                document.body.style.overflow = 'hidden';
                document.querySelector("#root").overflow = 'hidden';
                document.querySelector(".App").overflow = 'hidden';
            } else {
                document.querySelector('html').style.overflow = 'auto';
                document.body.style.overflow = 'auto';
                document.querySelector("#root").overflow = 'auto';
                document.querySelector(".App").overflow = 'auto';

            }
        }
    };

    hideMenu = () => {
        this.setState({showMenu: false});
        document.querySelector('html').style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        document.querySelector("#root").overflow = 'auto';
        document.querySelector(".App").overflow = 'auto';
    };

    componentDidMount() {
        this.updateWindowDimensions();
        // this.startPage();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        if (this.lastWidth === width) return;
        this.lastWidth = width;
        this.setState({ width, height });
    }

    getScreen = (page, params, service) => {

        if (this.state.page !== page)
            this.setState({page});

        const {width, height, showMenu} = this.state;
        switch (page) {
            case 'home': return <Home {...params} setPage={this.setPage}/>;
            case 'service':
            case 'services':
            case 'certificates':
            case 'about':
            case 'contacts':
                return <Content {...params} width={width} height={height} showMenu={showMenu} setPage={this.setPage} page={page} service={service}/>;
            default: return <div className={'section'} style={{minHeight: height - 260}}> <div>404</div> </div>;
        }
    };

    render() {
        const {page, width, height, showMenu} = this.state;

        return (

            <Router>
                <div className="App" ref={app => this.app = app}>
                        <div className="menu-container">
                            <Menu page={page} width={width} height={height}
                                  show={showMenu} showMenu={this.showMenu} hideMenu={this.hideMenu}/>
                            <MobileMenu page={page} height={height} width={width}
                                        show={showMenu} showMenu={this.showMenu}/>
                        </div>

                        <Switch>
                            <Route path="/" exact component={() => this.getScreen('home', {width, height, showMenu})}/>
                            <Route path="/services" exact component={() => this.getScreen('services')}/>
                            <Redirect from="/service" exact to={'/services'}/>
                            <Route path="/service/:service" component={(__target) => this.getScreen('service', {}, __target.match.params.service)}/>
                            <Redirect from="/services/:service" to={'/service/:service'}/>
                            <Route path="/certificates" component={() => this.getScreen('certificates')}/>
                            <Route path="/about" component={() => this.getScreen('about')}/>
                            <Route path="/contacts" component={() => this.getScreen('contacts')}/>
                            <Route status={404} component={() => this.getScreen('not-found')}/>
                        </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;