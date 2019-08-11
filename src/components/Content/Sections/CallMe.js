import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import BgDots from "../../BgDots/BgDots";
import './CallMe.scss';
import { TelegramClient } from 'messaging-api-telegram';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const phonePattern = new RegExp(/^\+375 \((17|33|29|44|25)\) \d{3} \d{2} \d{2}$/);
const chatID = 284855803;
const TOKEN = '852242550:AAEnWAISUaTRfFtGBxsbkorNlE9Ew8vCgGg';

class CallMe extends Component {

    state = {
        name: '',
        phone: '',
        message: '',
        sent: false
    };

    sendMessage = async () => {
        const {name, phone, message} = this.state;
        if (phone.match(phonePattern) && name.length > 0) {
            const __message = `Новая заявка!\nИмя: ${name}\nНомер: ${phone}\nСообщение: ${message}`;
            const client = TelegramClient.connect(TOKEN);
            client.sendMessage(chatID, __message, {
                disable_web_page_preview: true,
                // disable_notification: true,
            }).then(e => {
                // console.log(e);
                this.setState({sent: true});
            });
        }
    };

    render() {
        const {name, phone, message, sent} = this.state;

        return (
            <div className="call-me">
                <BgDots/>
                {
                    sent ?
                        <div className="cm-content">
                            <br/>
                            <FontAwesomeIcon icon={faCheckCircle} size={'10x'} color={'green'}/>
                            <br/>
                            <br/>
                            <br/>
                            <div className="--text">{`Спасибо ${name}!`}</div>
                            <div className="--text">Ваше сообщение было успешно отправлено</div>
                            <div className="--text">Mы свяжемся с Вами в ближайшее время</div>
                        </div>
                        :
                        <div className="cm-content">
                            <div className="-title">Заказать обратный звонок</div>

                            <div className="-label">Имя:</div>
                            <input value={name} placeholder={'Введите ваше имя'} onChange={e => this.setState({name: e.target.value})}/>

                            <div className="-label">Номер телефона:</div>
                            <InputMask placeholder={'Введите ваш номер телефона'}
                                       value={phone}
                                       onChange={e => this.setState({phone: e.target.value})} mask="+375 (99) 999 99 99"
                                       maskChar=" "/>

                            <div className="-label">Текст сообщения:</div>
                            <textarea placeholder={'Введите текст сообщения'}
                                      value={message}
                                      onChange={e => this.setState({message: e.target.value})}/>

                            <div className="send-button" onClick={this.sendMessage}>ОТПРАВИТЬ</div>
                        </div>
                }
            </div>
        );
    }
}

export default CallMe;