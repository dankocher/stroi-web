import React, {Component} from 'react';
import { Slider } from 'react-burgers'
import './Mobile.scss';

class Mobile extends Component {


    render() {
        const {scrolled, show} = this.props;
        return (
            <div className="--m --mob m-right">
                <div className="menu-button">
                    <Slider
                        active={show}
                        onClick={() => {this.props.showMenu()}}
                        width={32}
                        lineSpacing={7}
                        color={'#4c4c4c'}
                    />
                </div>

            </div>
        );
    }

}

export default Mobile;
