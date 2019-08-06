import React, {Component} from 'react';
import './Menu.scss';
import logoPrimary from '../../assets/images/logo-primary.svg';
import logoWhite from '../../assets/images/logo-white.svg';
import { Link } from "react-router-dom";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

class Menu extends Component {

    render() {
        const {page, scrollTop, width, height, show} = this.props;
        const scrolled = page !== 'home' ? ' --bg' : "";

        return <nav className={`menu${scrolled}${show ? ' -m-show' : ''}`} >
            <div className="menu-content">
                <div className="--m m-left">
                        <Link to="/">
                            <div className="home-button">
                                <img src={page === "home" ? logoWhite : logoPrimary} className='logo' alt={'Logo'}/>
                                <div className="text">Компания</div>
                            </div>
                        </Link>
                </div>
                {
                    width < 1140 ?
                        <Mobile page={page} scrolled={page !== 'home'} scrollTop={scrollTop} width={width} height={height}
                                show={show} showMenu={this.props.showMenu}/>
                        :
                        <Desktop page={page} scrolled={page !== 'home'} scrollTop={scrollTop} width={width}/>
                }
            </div>
        </nav>
    }
}

export default Menu;
