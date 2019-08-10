import React, {Component} from 'react';
import './Service.scss';

class Service extends Component {


    render() {
        const {service} = this.props;

        return <div className="service">{service}</div>
    }
}

export default Service;