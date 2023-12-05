import React, { useState } from 'react';

const ComposantReact = ({couleur}) => {
    const[color,setColor] = useState(couleur);

    const changeColor = () => {
        const newColor = color === 'red' ? 'blue' : 'red';
        setColor(newColor);
    };

    return(
        <div>
            <div style={{color}}>
                <div onMouseOver={changeColor}>Je suis un composant </div>
            </div>
        </div>
    );
};

export default ComposantReact;