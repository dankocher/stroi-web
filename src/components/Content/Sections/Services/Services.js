import React, {Component} from 'react';
import './Services.scss';

import image001 from './images/001.jpg';
import image002 from './images/002.jpg';
import image003 from './images/003.jpg';
import image004 from './images/004.jpg';
import image005 from './images/005.jpg';
import BgDots from "../../../BgDots/BgDots";

class Services extends Component {

    render() {
        return (
                <div className="services">
                    {
                        services.map((service, index) => (
                            <Service key={`service-${index}`} service={service} index={index}/>
                        ))
                    }
                </div>
        );
    }
}

export default Services;

const Service = props => {

    const {service, index} = props;

    return <div className="service" style={{flexDirection: index%2 === 0 ? 'row' : 'row-reverse'}}>
        <img src={service.image} className={'s-image'} alt=''/>
        <BgDots position={index%2 === 0 ? 'right' : 'left'}/>
        <div className="s-content">
            <div className="-name">{service.name}</div>
            <ul className="-ps">{
                service.description.map((description, index) => (
                    <li key={`desc-${index}`} className="-de">
                        <div>{description}</div>
                    </li>
                ))
            }</ul>
        </div>
    </div>
};


const services = [
    {
        image: image001,
        name: "Название услиги",
        description: [
            'какие материялы были использованы',
            'что было сделано',
            'сроки работы',
            'строимость работы',
            'другие описание услуги',
        ]
    },
    {
        image: image002,
        name: "Название услиги",
        description: [
            'какие материялы были использованы',
            'что было сделано',
            'сроки работы',
            'строимость работы',
            'другие описание услуги',
        ]
    },
    {
        image: image003,
        name: "Название услиги",
        description: [
            'какие материялы были использованы',
            'что было сделано',
            'сроки работы',
            'строимость работы',
            'другие описание услуги',
        ]
    },
    {
        image: image004,
        name: "Название услиги",
        description: [
            'какие материялы были использованы',
            'что было сделано',
            'сроки работы',
            'строимость работы',
            'другие описание услуги',
        ]
    },
    {
        image: image005,
        name: "Название услиги",
        description: [
            'какие материялы были использованы',
            'что было сделано',
            'сроки работы',
            'строимость работы',
            'другие описание услуги',
        ]
    },
];