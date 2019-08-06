import React, {Component} from 'react';
import './Menu.scss';
import logo from '../../assets/images/logo.svg';
import { goToTop, goToAnchor } from 'react-scrollable-anchor'
import Desktop from "./Desktop";
import Mobile from "./Mobile";

class Menu extends Component {

    goToTop = () => {
        this.props.hideMenu();
        goToTop();
        goToAnchor("", true);
    };


    render() {
        const {page, scrollTop, width, height, show} = this.props;
        const scrolled = scrollTop > 0 ? ' --bg' : "";

        return <nav className={`menu${scrolled}${show ? ' -m-show' : ''}`} >
            <div className="menu-content">
                <div className="--m m-left">
                    <div className="home-button" onClick={this.goToTop}>
                        <img src={logo} className='logo' alt={'Logo'}/>
                        <div className="text">СТРОЙ УСЛУГИ</div>
                    </div>
                </div>
                {
                    width < 1140 ?
                        <Mobile page={page} scrolled={scrollTop > 0} scrollTop={scrollTop} width={width} height={height}
                                show={show} showMenu={this.props.showMenu}/>
                        :
                        <Desktop page={page} scrolled={scrollTop > 0} scrollTop={scrollTop} width={width}/>
                }
            </div>
        </nav>
    }
}

export default Menu;
