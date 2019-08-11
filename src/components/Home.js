import React from 'react';
import Main from "./Main";
import Content from "./Content";

class Home extends React.Component {

    render() {
        const {width, height} = this.props;

        return <div className="home" style={{minHeight: height, paddingTop: 60}}>
            <Main width={width} height={height}/>
        </div>
    }
}

export default Home;