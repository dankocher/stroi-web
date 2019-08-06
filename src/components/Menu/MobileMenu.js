import React, {Component} from 'react';
import sections from "../../constants/sections";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class MobileMenu extends Component {

    render() {
        const {page, scrollTop, show, height, width} = this.props;
        const scrolled = page !== 'home' ? ' -s' : "";
        return (
            <div className={`m-menu${scrolled}${show ? ' -show' : ''}`}
                 style={{height: width < 500 ? '100%' : 'auto'}}
            >
                {
                    sections.map((section, index) => (
                        <Link key={`m-section-${index}`} className={'m-b-dot'} to={`/${section.alias}`}>
                            <div className={`menu-button ${page === section.alias ? ' -selected' : ""}`}
                               onClick={this.props.showMenu}>{
                                section.name
                            }</div>
                        </Link>
                    ))
                }
            </div>
        );
    }
}

export default MobileMenu;
