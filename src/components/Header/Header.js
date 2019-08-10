import React from 'react';
import banner from "./images/banner.jpg";
import './styles.scss';

const IMG_WIDTH = 6500;
const IMG_HEIGHT = 4200;
const IMG_ASPECT_RATIO = IMG_WIDTH / IMG_HEIGHT;

class Header extends React.Component {

    state = {
        pictureWidth: 'auto',
        pictureHeight: 'auto'
    };

    componentWillMount() {
        this.updateDimensions(this.props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.updateDimensions(nextProps)
    }

    updateDimensions = async props => {
        const {width, height} = props;
        const aspectRatio = width / height;
        let pictureWidth = 'auto';
        let pictureHeight = 'auto';
        if (aspectRatio < IMG_ASPECT_RATIO) {
            pictureWidth = 'auto';
            pictureHeight = '100%';
        } else {
            pictureWidth = '100%';
            pictureHeight = 'auto';
        }
        await this.setState({ pictureWidth, pictureHeight });
    };

    render() {
        const {width, height, showMenu} = this.props;
        const {pictureWidth, pictureHeight} = this.state;

        console.log(width, height);

        return <div className="header" style={{height: height}}>
            <header className="App-header">
                <img src={banner}
                     style={{
                         width: pictureWidth,
                         height: pictureHeight
                     }}
                     className="app-banner" alt="Компания" />
                <div ref={content => this.content = content} className={`h-content${width < 1000 && showMenu ? ' -show-menu' : ''}`}>
                    <h1 className="-text">Lorem ipsum</h1>
                    <h5 className="-text -sub">In dolor sit amet</h5>
                    {/*<ButtonCallMe/>*/}
                </div>
            </header>
        </div>
    }
}

export default Header;