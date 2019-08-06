import React, {Component} from 'react';
import './ButtonCallMe.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

class ButtonCallMe extends Component {
    render() {
        return <a className="button-call-me" href={"#call-me"}>
            <FontAwesomeIcon icon={faPhoneAlt}/>
            <div className="b-text">Заказать обратный звонок</div>
        </a>
    }
}

export default ButtonCallMe;