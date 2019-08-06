import React, {Component} from 'react';
import './About.scss';
import BgDots from "../../BgDots/BgDots";

import about01 from '../../../assets/images/about01.jpg';
import about02 from '../../../assets/images/about02.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class About extends Component {

    render() {

        return (<div className="about">
                <BgDots/>
                <div className='-content'>
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
        );
    }
}

export default About;

const LeftSide = props => {
    return <div className="a-s a-left">
        <div className="-title">Почему выбирают нас</div>
        <SectionTitle title="НАШ СЕРВИС"/>
        <SectionDescription text={'Компания предлагает полный комплекс работ по строительству домов и коттеджей, проектированию, изготовлению и монтажу металлоконструкций, отделке помещений, проводит кровельные и фасадные работы, установку коммуникаций.'}/>

        <SectionTitle title="ДОСТУПНЫЕ ЦЕНЫ"/>
        <SectionDescription text={'Умеренная ценовая политика в строительстве, качество выполнения отделочных и строительных работ, а также фирменная гарантия является основным критерием работы предприятия, что позволяет уверенно придерживаться оптимального соотношения в номинации «цена-качество».'}/>

        <SectionTitle title="КВАЛИФИКАЦИЯ"/>
        <SectionDescription text={'Строительные бригады состоят из профессионалов своего дела. Наши специалисты берутся за работу любой сложности и всегда найдут оптимальные решения для самых изысканных Ваших желаний. Компания Компания берет на себя все хлопоты и проблемы, связанные со строительными работами.'}/>

    </div>;
};
const SectionTitle = props => {
    return <h5 className="s-title">
        <FontAwesomeIcon icon={faCheck} style={{color: '#DB9B03', fontSize: 18, marginRight: 10}}/>
        {props.title}
    </h5>
};

const SectionDescription = props => {
    return <div className="s-desc">
        {props.text}
    </div>
};


const RightSide = props => {
    return <div className="a-s a-right">
        <div className="-title">Кто мы такие?</div>
        <div className={'s-about'}>
            <LeftAbout/>
            <RightAbout/>
        </div>
    </div>;
};

const LeftAbout = props => {
    return <div className="s-a l-about">
        <SectionDescription text={'Компания основано в 2019 году. Основным видом деятельности предприятия является ремонтно-строительные работы с применением современных технологий строительства и использованием прогрессивных стройматериалов.'}/>
        <SectionDescription text={'Еще что нибудь о компании деятельность работы и краткое описание о компании'}/>
    </div>
};

const RightAbout = props => {
    return <div className="s-a r-about">
        <img src={about01} className={'-pic'} alt={''}/>
        <img src={about02} className={'-pic'} alt={''}/>
    </div>
};