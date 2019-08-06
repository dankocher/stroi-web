import React, {Component} from 'react';
import sections from "../../constants/sections";
import './Desktop.scss';
import { Link } from "react-router-dom";

class Desktop extends Component {

    render() {
        const {page} = this.props;
        return (
        <div className="--m --desk m-right">

            <div className="m-buttons">
                {
                    sections.map((section, index) => (
                        <Link key={`m-section-${index}`} to={`/${section.alias}`}>
                            <div className={`menu-button ${page === section.alias ? ' -selected' : ""}`} >{section.name}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
        );
    }
}

export default Desktop;
