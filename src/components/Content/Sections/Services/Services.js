import React, {Component} from 'react';
import './Services.scss';
import services from '../../../../constants/services';
import CertificatesScreen from "../../../Certificates/CertificatesScreen";
import Paragraph from '../../../Paragraph';
import {Link} from "react-router-dom";
class Services extends Component {

    render() {
        return (
                <div className="services">
                    <div className="services-int">
                        <Paragraph text={'Описание услуг. Один абзац От 420 символов. Исползовать фразы как <b>строительные услуги</b> и т.п. для продвижении сайта. Integer eu lorem sit amet turpis rutrum maximus nec non arcu. Etiam at urna eget felis laoreet sollicitudin. Fusce iaculis nulla et convallis sagittis. Praesent nibh orci, suscipit at efficitur eget, pretium at justo. Suspendisse potenti. Curabitur elit felis, mattis vitae venenatis eget, condimentum eget odio. Cras enim nunc, tincidunt at velit id, pharetra efficitur ipsum. абзац заканчивается в что-то типа перечень услуг:'}/>
                    </div>
                    <div className="-services-min">
                        {
                            services.map((service, index) => (
                                <Service key={`service-${index}`} service={service} index={index}/>
                            ))
                        }
                    </div>
                    <div className="services-int">
                        <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta laoreet libero, sed posuere nunc laoreet quis. Sed eleifend vitae neque vitae gravida. Sed enim nibh, volutpat sit amet ligula id, commodo tempus urna. Pellentesque eget velit in tortor egestas fringilla nec ac ante. Curabitur convallis porta nibh, id accumsan urna cursus at. Curabitur id ipsum odio. Donec ac massa nisi.'}/>
                        <Paragraph text={'Maecenas ante dolor, varius nec odio eu, interdum rhoncus dui. Nulla a augue in neque aliquet euismod vitae in velit. Sed quis consectetur ante, vel laoreet justo. Cras vel ex hendrerit, hendrerit justo ac, iaculis ex. Duis malesuada pulvinar blandit. Aliquam et tortor risus. Nullam pretium ultrices neque in finibus. Morbi nec ipsum eros. Proin suscipit tempor congue. Vivamus eget lorem augue. Aliquam erat volutpat. Etiam ut elit quam. Fusce ut tortor dapibus, mollis urna vitae, semper diam. Proin sollicitudin erat tellus, sed hendrerit neque gravida eget. Etiam sit amet porta risus. Integer tempor lorem vel nunc vulputate tempus.'}/>
                        <Paragraph text={'Integer faucibus diam at dui sollicitudin, quis imperdiet nunc ultrices. Nunc rhoncus venenatis lacus, at semper augue posuere quis. Ut eu nisl risus. Nullam ac purus aliquet mauris commodo dictum a vitae nibh. Duis tempus lorem eu justo tempor ornare. Donec venenatis, turpis nec accumsan fermentum, enim augue interdum quam, eget sagittis lacus tellus eu magna. Pellentesque consectetur eget arcu sed mollis. Proin ut commodo odio, eu ultrices erat. Mauris commodo orci facilisis ex malesuada, vel interdum urna semper. Donec at massa odio. Nullam vel eleifend arcu. Nam mi tortor, interdum id nisl nec, porta molestie mi.'}/>
                    </div>
                    <CertificatesScreen {...this.props}/>
                </div>
        );
    }
}

export default Services;

const Service = props => {

    const {service, index} = props;
    // const flexDirection = index%2 === 0 ? 'row' : 'row-reverse';
    const description = service.description.slice(0, 200).replace(/\s$/, "") + "...";
    const flexDirection = 'row';
    return <Link to={`/service/${service.alias}`}><div className="service" style={{flexDirection}}>
        <img src={service.image} className={'s-image'} alt=''/>
        <div className="s-content">
            <div className="-name">{service.name}</div>
            <Paragraph text={description}/>
        </div>
        <div className="-button">подробнее</div>
    </div></Link>
};
