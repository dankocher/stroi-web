import React from 'react';
import './Footer.scss';

class Footer extends React.Component {

    render() {
        const year = new Date().getFullYear();
        return <div className="footer">
            <div className="footer-content">
                {`НАЗВАНИЕ_КОМПАНИИ ${year} © Все права защищены`}
            </div>
        </div>
    }
}

export default Footer;