import React, {Component} from 'react';
import sections from "../../constants/sections";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

class MobileMenu extends Component {

    render() {
        const {page, scrollTop, show, height, width} = this.props;
        const scrolled = scrollTop > 0 ? ' -s' : "";
        return (
            <div className={`m-menu${scrolled}${show ? ' -show' : ''}`}
                 style={{height: width < 500 ? '100%' : 'auto'}}
            >
                {
                    sections.map((section, index) => (
                        <div key={`m-section-${index}`} className={'m-b-dot'}>
                            <a className={`menu-button ${page === section.alias ? ' -selected' : ""}`}
                               href={`#${section.alias}`} onClick={this.props.showMenu}>{
                                section.name
                            }</a>
                        </div>
                    ))
                }
                <Phone scrolled={scrollTop > 0}/>
            </div>
        );
    }
}

export default MobileMenu;

const Phone = (props) => {
    return <div className="phone">
        <div className="text">8 (029) 123 45 67</div>
        <FontAwesomeIcon icon={faPhoneAlt} size={'10x'}
                         color={props.scrolled ? '#4c4c4c' : 'white'}
                         style={{
                             display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             border: '2px solid ' + (props.scrolled ? '#4c4c4c' : 'white'),
                             padding: 8,
                             width: 24,
                             height: 24,
                             verticalAlign: 'middle',
                             borderRadius: '50%'
                         }}/>
    </div>
}