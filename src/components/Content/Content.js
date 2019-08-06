import React, {Component} from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import './styles.scss';
import Services from "./Sections/Services/Services";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import CallMe from "./Sections/CallMe";
configureAnchors({offset: -60, scrollDuration: 400});

class Content extends Component {

    getSection = page => {
        switch (page) {
            case 'services': return <Services/>;
            case 'about': return <About/>;
            case 'contacts': return <Contacts/>;
            case 'call-me': return <CallMe/>;
            default: return page;
        }
    };

    render() {
        const {page, width, height} = this.props;
        const minHeight = this.props.height - 260;

        return <div className={'section'} style={{minHeight}}>
            {
                this.getSection(page)
            }
        </div>
    }
}

export default Content;