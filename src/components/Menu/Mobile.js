import React, {Component} from 'react';
import sections from "../../constants/sections";
import { Slider } from 'react-burgers'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import './Mobile.scss';

class Mobile extends Component {


    render() {
        const {scrolled, show} = this.props;
        return (
            <div className="--m --mob m-right">
                <div className="menu-button">
                    <Slider
                        active={show}
                        onClick={() => {this.props.showMenu()}}
                        width={32}
                        lineSpacing={7}
                        color={scrolled ? '#4c4c4c' : 'white'}
                    />
                </div>

            </div>
        );
    }

}

export default Mobile;


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