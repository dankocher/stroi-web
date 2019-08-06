import React, {Component} from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import './styles.scss';
import sections from '../../constants/sections';
import Services from "./Sections/Services/Services";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import CallMe from "./Sections/CallMe";
configureAnchors({offset: -60, scrollDuration: 400});

class Content extends Component {

    getSection = (section) => {
        switch (section.alias) {
            case 'services': return <Services/>;
            case 'about': return <About/>;
            case 'contacts': return <Contacts/>;
            case 'call-me': return <CallMe/>;
            default: return section.name;
        }
    };

    render() {
        const minHeight = this.props.height - 60;

        return <div>
            {
                sections.map((section, index) => (
                    <ScrollableAnchor key={`section-${index}`} id={section.alias}>
                        <div className={'section'} style={{minHeight}}>
                            {
                                this.getSection(section)
                            }
                        </div>
                    </ScrollableAnchor>
                ))
            }
        </div>
    }
}

export default Content;