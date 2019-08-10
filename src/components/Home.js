import React from 'react';

class Home extends React.Component {

    render() {
        const {height} = this.props;

        return <div className="home" style={{minHeight: height}}>
            Home
        </div>
    }
}

export default Home;