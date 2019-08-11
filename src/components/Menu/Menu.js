import React, {Component} from 'react';
import './Menu.scss';
import logoPrimary from '../../assets/images/logo-primary.svg';
import logoWhite from '../../assets/images/logo-white.svg';
import { Link } from "react-router-dom";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const MIN_WIDTH = 700;

class Menu extends Component {

    render() {
        const {page, scrollTop, width, height, show, service} = this.props;
        // const scrolled = page !== 'home' ? ' --bg' : "";
        const scrolled = ' --bg';
        // const logo = page === "home" ? logoWhite : logoPrimary;
        const logo = logoPrimary;

        return <nav className={`menu${scrolled}${show ? ' -m-show' : ''}`} >
            <div className="menu-content">
                <div className="--m m-left">
                        <Link to="/">
                            <div className="home-button">
                                <img src={logo} className='logo' alt={'Logo'}/>
                                <div className="text">Компания</div>
                            </div>
                        </Link>
                </div>
                {
                    width < MIN_WIDTH ?
                        <Mobile page={page} scrolled={page !== 'home'} scrollTop={scrollTop} width={width} height={height}
                                show={show} showMenu={this.props.showMenu} service={service}/>
                        :
                        <Desktop page={page} scrolled={page !== 'home'} scrollTop={scrollTop} width={width} service={service}/>
                }
            </div>
        </nav>
    }
}

export default Menu;
