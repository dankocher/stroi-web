import React, {Component} from 'react';
import logo from '../../../assets/images/logo-primary.svg';
import './Contacts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faVk, faInstagram, faViber, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ButtonCallMe from "../../ButtonCallMe";
import CallMe from "./CallMe";

class Contacts extends Component {


    render() {
        return (
            <div className="contacts">
                <div className="s-contacts">
                    <Title text={'Контакты'}/>
                    <Contact type={faMapMarkerAlt} text={'г. Минск. ул. Сурганова, д. 123'}/>
                    <Contact type={faPhone} text={'8 (029) 123 45-67'}/>
                    <Contact type={faPhone} text={'8 (033) 789 65-21'}/>
                    <Contact type={faEnvelope} text={'stroiuslugiminsk@gmail.com'}/>

                    <Title text={'Мы в социальных сетях'}/>
                    <div className="c-socials">
                        <SocialIcon type={faVk}/>
                        <SocialIcon type={faInstagram}/>
                        <SocialIcon type={faFacebookSquare}/>
                    </div>

                    <Title text={'Свяжитесь с нами'}/>
                    <div className="c-socials">
                        <SocialIcon type={faViber}/>
                        <SocialIcon type={faTelegram}/>
                        <SocialIcon type={faWhatsapp}/>
                    </div>
                </div>

                <CallMe/>

            </div>
        );
    }
}

export default Contacts;

const iconColor = '#0288d1';
const Title = props => {
    return <div className="c-title">{props.text}</div>;
};

const Contact = props => {
    return <div className="c-contact">
        <FontAwesomeIcon icon={props.type} style={{color: iconColor, fontSize: 18, marginRight: 15, width: 15}}/>
        {props.text}
    </div>;
};

const SocialIcon = props => {
    return <div className={'c-social'}>
        <FontAwesomeIcon icon={props.type} style={{color: iconColor, fontSize: 24, height: 24, width: 24}}/>
    </div>
};