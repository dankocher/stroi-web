import React, {Component} from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import './styles.scss';
import Services from "./Sections/Services/Services";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Service from "./Sections/Service";
configureAnchors({offset: -60, scrollDuration: 400});

class Content extends Component {

    getSection = (page, service) => {
        switch (page) {
            case 'services': return <Services/>;
            case 'service': return <Service service={service}/>;
            case 'about': return <About/>;
            case 'contacts': return <Contacts/>;
            case 'certificates': return <div>Certificates</div>;
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