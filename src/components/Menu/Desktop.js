import React, {Component} from 'react';
import sections from "../../constants/sections";
import './Desktop.scss';
import { Link } from "react-router-dom";
import services from '../../constants/services';

class Desktop extends Component {

    render() {
        const {page, service} = this.props;
        return (
        <div className="--m --desk m-right">

            <div className="m-buttons">
                {
                    sections.map((section, index) => (
                        <div key={`m-section-${index}`} className="m-section" >
                            <Link to={`/${section.alias}`}>
                                <div className={`menu-button ${page === section.alias ? ' -selected' : ""}`} >{section.name}</div>
                            </Link>
                            {
                                section.alias !== "services" ? null :
                                <div className={`m-services-list`}>
                                    <div className="list-container">
                                        <div className="before-sep"/>
                                        {
                                            services.map((s, i) => (
                                                <Link key={`service-${i}`} to={`/service/${s.alias}`}>
                                                    <div className={`s-item${service === s.alias ? " -selected": ""}`}>{s.name}</div>
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
        </div>
        );
    }
}

export default Desktop;
