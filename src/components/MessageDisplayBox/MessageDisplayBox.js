import React from 'react';
import PropTypes from 'prop-types';
import './MessageDisplayBox.css';

function MessageDisplayBox(props) {
    const { message, user } = props;
    const predeterminedMessage = user === "usuario" ? "Un policía ha sido notificado de tu caso y se encuentra en camino" : "Persona en peligro se encuentra cerca de ti";

    const imgSrc = user === "usuario" ? "https://cdn4.iconfinder.com/data/icons/security-safety/128/13-512.png" : "data:image/png;base64,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";
    return (
      <div className='box'>
        <img src={imgSrc} className={user === "usuario" ? 'image' : 'imagePerson'}></img>
        <div className='messages'>
            <div className='message'>
                {message}
            </div>
            <div className='predeterminedMessage'>
                {predeterminedMessage}
            </div>
        </div>
        
      </div>
    );
  }
  MessageDisplayBox.defaultProps = {
    message: null,
    user: null,
  };
  
  const { string } = PropTypes;
  
  MessageDisplayBox.propTypes = {
    message:string,
    user:null,
  };
  
export default MessageDisplayBox;