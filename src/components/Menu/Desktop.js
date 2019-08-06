import React, {Component} from 'react';
import sections from "../../constants/sections";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import './Desktop.scss';

class Desktop extends Component {

    render() {
        const {page, scrolled} = this.props;
        return (
        <div className="--m --desk m-right">

            <div className="m-buttons">
                {
                    sections.map((section, index) => (
                        <div key={`m-section-${index}`} className={'m-b-dot'}>
                            <a className={`menu-button ${page === section.alias ? ' -selected' : ""}`} href={`#${section.alias}`}>{section.name}</a>
                            {index < sections.length-1 ? <Separator/> : null}
                        </div>
                    ))
                }
            </div>

            <Phone scrolled={scrolled}/>
        </div>
        );
    }
}

export default Desktop;


const Separator = () => {
    return <div className={'separator'}>•</div>
};

const Phone = (props) => {
    return <div className="phone">
        <div className="text">8 (029) 123 45 67</div>
        <FontAwesomeIcon icon={faPhoneAlt} size={'10x'}
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