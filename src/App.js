import React from 'react';
import './styles/App.scss';
import Menu from './components/Menu';
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/Menu/MobileMenu";
import { isMobile } from "react-device-detect";

class App extends React.Component {
    lastWidth = 0;
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            width: 0,
            height: 0,
            scrollTop: 0,
            page: ''
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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
        this.startPage();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("hashchange", this.startPage);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("hashchange", this.startPage);
    }

    updateWindowDimensions() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        if (this.lastWidth === width) return;
        this.lastWidth = width;
        this.setState({ width, height });
    }

    handleScroll = () => {
        let scrollTop = window.scrollY;
        this.setState({scrollTop});
        if (scrollTop === 0) {
            this.setState({page: ""})
        }
    };

    startPage = () => {
        this.setState({page: window.location.hash.replace("#", "")});
    };

    render() {
        const {page, width, height, scrollTop, showMenu} = this.state;

        return (
            <div className="App" ref={app => this.app = app}>
                <Menu scrollTop={scrollTop} page={page} width={width} height={height}
                      show={showMenu} showMenu={this.showMenu} hideMenu={this.hideMenu}/>
                <MobileMenu scrollTop={scrollTop} height={height} width={width} page={page}
                            show={showMenu} showMenu={this.showMenu}/>
                <Header width={width} height={height} showMenu={showMenu}/>
                <Content height={height}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
