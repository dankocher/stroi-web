import React from 'react';

const Pharagraph = props => {
    return (
        <p {...props} dangerouslySetInnerHTML={{__html: props.text}}/>
    );
};

export default Pharagraph;