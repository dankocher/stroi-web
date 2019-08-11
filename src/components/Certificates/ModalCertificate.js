import React from 'react';

class ModalCertificate extends React.Component {

    state = {
        show: false,
        left: null,
        pictureWidth: 0,
        pictureHeight: 0,
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.item !== null) {
            this.setState({left: nextProps.x});
            setTimeout(() => {
                this.setState({show: true});
            }, 50)
        }
        this.startSize(nextProps);
    }

    componentDidMount() {
        this.startSize(this.props)
    }

    startSize = props => {

        let pictureWidth = 'auto';
        let pictureHeight = 'auto';
        if (props.width > props.height) {
            pictureWidth = 'auto';
            pictureHeight = '95%';
        } else {
            pictureWidth = '95%';
            pictureHeight = 'auto';
        }
        this.setState({pictureWidth, pictureHeight})
    };

    hide = () => {
        this.setState({show: false});
        setTimeout(() => {
            this.props.onCancel();
        }, 400)
    };

    render() {
        const {item, x, y} = this.props;
        const {show, left, pictureWidth, pictureHeight} = this.state;
        if (item === null) return null;

        return <div className={`modal-certificate${show ? ' -show' : ""}`}>
            <div className="overlay" onClick={this.hide}/>
            <div className="--content"
                 style={{width: pictureWidth, height: pictureHeight}}
            >
                <img src={item.image} alt={item.name} style={{width: pictureWidth, height: pictureHeight}}/>
            </div>
        </div>
    }
}

export default ModalCertificate;