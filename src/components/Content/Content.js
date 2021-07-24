import React, {Component} from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import './styles.scss';
import Services from "./Sections/Services/Services";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Service from "./Sections/Service";
import CertificatesScreen from "../Certificates/CertificatesScreen";
configureAnchors({offset: -60, scrollDuration: 400});

class Content extends Component {

    getSection = (page, service) => {
        window.scrollTo(0, 0);
        switch (page) {
            case 'services': return <Services {...this.props}/>;
            case 'service': return <Service service={service} {...this.props}/>;
            case 'about': return <About {...this.props}/>;
            case 'contacts': return <Contacts {...this.props}/>;
            case 'certificates': return <CertificatesScreen {...this.props} showDescription={true}/>;
            default: return page;
        }
    };

    render() {
        const {page, service} = this.props;
        const minHeight = this.props.height - 260;

        return <div className={'section'} style={{minHeight}}>
            {
                this.getSection(page, service)
            }
        </div>
    }
}

export default Content;
