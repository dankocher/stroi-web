import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BgDots.scss';


class BgDots extends Component {

    static propTypes = {
        position: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    render() {
        const position = this.props.position === 'left' ? '-l' : '-r';
        return <div className={`-bg-dots ${position}`}/>
    }
}

export default BgDots;
