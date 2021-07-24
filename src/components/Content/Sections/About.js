import React, {Component} from 'react';
import './About.scss';
// import BgDots from "../../BgDots/BgDots";

// import about01 from '../../../assets/images/about01.jpg';
// import about02 from '../../../assets/images/about02.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import CertificatesScreen from "../../Certificates/CertificatesScreen";
import banner from "../../Main/images/banner.jpg";
import Paragraph from "../../Paragraph";
// import data from "../../Main/main.";

class About extends Component {

    render() {

        return (<div className="about">
                {/*<BgDots/>*/}
                <div className='-content'>
                    <div className="banner">
                        <img src={banner} className={'image'} alt='Компания' />
                    </div>
                    <div className="content">
                        <RightSide/>
                        <LeftSide/>
                    </div>
                </div>
                <CertificatesScreen {...this.props}/>
            </div>
        );
    }
}

export default About;

const LeftSide = props => {
    return <div className="a-s a-left">
        <div className="-title">Почему выбирают нас</div>
        <SectionTitle title="НАШ СЕРВИС"/>
        <Paragraph text={'Компания предлагает полный комплекс работ по строительству домов и коттеджей, проектированию, изготовлению и монтажу металлоконструкций, отделке помещений, проводит кровельные и фасадные работы, установку коммуникаций. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta laoreet libero, sed posuere nunc laoreet quis. Sed eleifend vitae neque vitae gravida. Sed enim nibh, volutpat sit amet ligula id, commodo tempus urna. Pellentesque eget velit in tortor egestas fringilla nec ac ante. Curabitur convallis porta nibh, id accumsan urna cursus at. Curabitur id ipsum odio. Donec ac massa nisi.'}/>

        <SectionTitle title="ДОСТУПНЫЕ ЦЕНЫ"/>
        <Paragraph text={'Умеренная ценовая политика в строительстве, качество выполнения отделочных и строительных работ, а также фирменная гарантия является основным критерием работы предприятия, что позволяет уверенно придерживаться оптимального соотношения в номинации «цена-качество». Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta laoreet libero, sed posuere nunc laoreet quis. Sed eleifend vitae neque vitae gravida. Sed enim nibh, volutpat sit amet ligula id, commodo tempus urna. Pellentesque eget velit in tortor egestas fringilla nec ac ante. Curabitur convallis porta nibh, id accumsan urna cursus at. Curabitur id ipsum odio. Donec ac massa nisi.'}/>

        <SectionTitle title="КВАЛИФИКАЦИЯ"/>
        <Paragraph text={'Строительные бригады состоят из профессионалов своего дела. Наши специалисты берутся за работу любой сложности и всегда найдут оптимальные решения для самых изысканных Ваших желаний. Компания Компания берет на себя все хлопоты и проблемы, связанные со строительными работами. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta laoreet libero, sed posuere nunc laoreet quis. Sed eleifend vitae neque vitae gravida. Sed enim nibh, volutpat sit amet ligula id, commodo tempus urna. Pellentesque eget velit in tortor egestas fringilla nec ac ante. Curabitur convallis porta nibh, id accumsan urna cursus at. Curabitur id ipsum odio. Donec ac massa nisi.'}/>

    </div>;
};
const SectionTitle = props => {
    return <h5 className="s-title">
        <FontAwesomeIcon icon={faCheck} style={{color: '#0288d1', fontSize: 18, marginRight: 10}}/>
        {props.title}
    </h5>
};

const RightSide = props => {
    return <div className="a-s a-right">
        <div className="-title">Кто мы такие?</div>
        <div className={'s-about'}>
            <LeftAbout/>
        </div>
    </div>;
};

const LeftAbout = props => {
    return <div className="s-a l-about">
        <Paragraph text={'Компания основано в 2019 году. Основным видом деятельности предприятия является ремонтно-строительные работы с применением современных технологий строительства и использованием прогрессивных стройматериалов.'}/>
        <Paragraph text={'Еще что нибудь о компании деятельность работы и краткое описание о компании. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta laoreet libero, sed posuere nunc laoreet quis. Sed eleifend vitae neque vitae gravida. Sed enim nibh, volutpat sit amet ligula id, commodo tempus urna. Pellentesque eget velit in tortor egestas fringilla nec ac ante. Curabitur convallis porta nibh, id accumsan urna cursus at. Curabitur id ipsum odio. Donec ac massa nisi.'}/>
    </div>
};

