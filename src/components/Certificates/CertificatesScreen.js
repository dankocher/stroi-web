import React from 'react';
import Certificates from "./Certificates";
import Contacts from "../Content/Sections/Contacts";

class CertificatesScreen extends React.Component {

    render() {

        return <div className="certificates-screen">
            {
                !this.props.showDescription ? null :
                    <p className="cert-description">
                        Краткое описание сертификатов. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta laoreet libero, sed posuere nunc laoreet quis. Sed eleifend vitae neque vitae gravida. Sed enim nibh, volutpat sit amet ligula id, commodo tempus urna. Pellentesque eget velit in tortor egestas fringilla nec ac ante. Curabitur convallis porta nibh, id accumsan urna cursus at. Curabitur id ipsum odio.
                    </p>
            }
            <Certificates {...this.props}/>
            <Contacts/>
        </div>
    }
}

export default CertificatesScreen;
