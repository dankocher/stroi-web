import React from 'react';
import './Certificates.scss';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ViewPager, Frame, Track, View } from 'react-view-pager'

import certificate from './certificate';
import ModalCertificate from "./ModalCertificate";

const MIN_WIDTH = 220;

class Certificates extends React.Component {

    width = 0;
    carousel = null;
    drag = false;

    state = {
        itemWidth: 0,
        total: 0,
        showItems: 0,
        currentItem: 0,
        marginLeft: 0,
        modalItem: null,
        modalX: 0,
        modalY: 0,
    };

    componentDidMount() {
        this.startWidth(this.props.width);
        this.setState({total: certificate.length});
        this.drag = false;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.startWidth(nextProps);
    }

    startWidth = (props) => {
        if (this.width !== props.width) {
            this.width = props.width;

            const carouselWidth = this.carousel.offsetWidth - 100;

            let itemWidth = 0;
            let showItems = 0;
            if (carouselWidth < MIN_WIDTH * 2) {
                itemWidth = carouselWidth;
                showItems = 1;
            } else if (carouselWidth < MIN_WIDTH * 3) {
                itemWidth = carouselWidth / 2;
                showItems = 2;
            } else if (carouselWidth < MIN_WIDTH * 4) {
                itemWidth = carouselWidth / 3;
                showItems = 3;
            } else if (carouselWidth < MIN_WIDTH * 5) {
                itemWidth = carouselWidth / 4;
                showItems = 4;
            } else {
                itemWidth = carouselWidth / 5;
                showItems = 5;
            }
            this.setState({itemWidth, showItems});
        }

    };

    next = () => {
        this.setState({currentItem: this.state.currentItem += 1});
    };

    prev = () => {
        this.setState({currentItem: this.state.currentItem -= 1});
    };

    onViewChange = view => {
        if (view.length > 1 && view[view.length - 1] === view[view.length - 2]) {
            this.track.prev();
        } else {
            this.setState({currentItem: view[0]});
        }
    };

    showItem = (i, event) => {
        if(this.drag) return;

        this.setState({
            modalItem: certificate[i],
            modalX: this.carousel.offsetLeft + event.target.offsetLeft + 50,
            modalY: this.carousel.offsetTop
        });
        // console.log(event.target.offsetLeft, this.carousel.offsetTop);
    };
    startDrag = () => {
        this.drag = true;
    };
    endDrag = () => {
        if (!this.drag) return;
        setTimeout(() => {
            this.drag = false;
        }, 250);
    };

    render() {
        const {itemWidth, total, showItems, currentItem, modalItem, modalX, modalY} = this.state;
        const {width, height} = this.props;
        return (
            <div className="certificates" ref={carousel => this.carousel = carousel}>
                <div className="title">Сертификаты</div>

                <div className="cert-content">
                    <div className={`--button prev${currentItem === 0 ? ' disabled' : ''}`} onClick={this.prev}>
                        <FontAwesomeIcon icon={faChevronLeft}
                                         style={{color: '#0288d1', fontSize: 24, marginLeft: -5}}/>
                    </div>
                    <ViewPager className={'cert-carousel'}>
                        <Frame className="frame">
                            <Track
                                ref={c => this.track = c}
                                viewsToShow={showItems}
                                // infinite
                                currentView={currentItem}
                                className="carousel"
                                onViewChange={this.onViewChange}
                                onSwipeMove={this.startDrag}
                                onSwipeEnd={this.endDrag}
                            >
                                {
                                    certificate.map((d, i) => (
                                        <View className="item" key={`item-${i}`} style={{width: itemWidth}}>
                                            <img src={d.image} alt={d.name}
                                                 onClick={event => this.showItem(i, event)}
                                            />
                                        </View>
                                    ))
                                }
                            </Track>
                        </Frame>
                    </ViewPager>
                    <div className={`--button next${currentItem >= total - showItems ? ' disabled' : ''}`}
                         onClick={this.next}>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: '#0288d1', fontSize: 24}}/>
                    </div>
                </div>

                <ModalCertificate item={modalItem}
                                  onCancel={() => this.setState({modalItem: null})}
                                  x={modalX}
                                  y={modalY}
                                  width={width}
                                  height={height}
                />

            </div>
        );
    }
}

export default Certificates;
