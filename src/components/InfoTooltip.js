import React from 'react';
import success from '../images/success.svg';

function InfoTooltip({onClose}) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container popup__container_size-l">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <img className="popup__tooltip-image" src={success} alt="Изображение галочки в круге" />
        <p className="popup__tooltip-text">Вы успешно зарегистрировались!</p>
      </div>
    </div>
  );
}
   
export default InfoTooltip;