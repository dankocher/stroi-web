import React from 'react';

const Paragraph = props => {
    return (
        <p {...props} dangerouslySetInnerHTML={{__html: props.text}}/>
    );
};

export default Paragraph;