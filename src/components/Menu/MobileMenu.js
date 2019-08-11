import React, {Component} from 'react';
import sections from "../../constants/sections";
import {Link} from "react-router-dom";
import services from "../../constants/services";

class MobileMenu extends Component {

    render() {
        const {page, scrollTop, show, height, width, service} = this.props;
        // const scrolled = page !== 'home' ? ' -s' : "";
        const scrolled = ' -s';
        return (
            <div className={`m-menu${scrolled}${show ? ' -show' : ''}`}
                 style={{height: width < 500 ? '100%' : 'auto'}}
            >
                {
                    sections.map((section, index) => (
                        <div className="m-list-item">
                            <Link key={`m-section-${index}`} className={'m-b-dot'} to={`/${section.alias}`}>
                                <div className={`menu-button ${page === section.alias ? ' -selected' : ""}`}
                                     onClick={this.props.showMenu}>{
                                    section.name
                                }</div>
                            </Link>
                            {
                                section.alias !== "services" ? null :
                                    <div className={`m-services-list`}>
                                        <div className="list-container">
                                            <div className="before-sep"/>
                                            {
                                                services.map((s, i) => (
                                                    <Link key={`service-${i}`} to={`/service/${s.alias}`}>
                                                        <div className={`s-item${service === s.alias ? " -selected": ""}`}
                                                             onClick={this.props.showMenu}>{s.name}</div>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default MobileMenu;
