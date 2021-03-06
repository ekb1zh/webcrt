import React, { useState } from 'react';
import * as T from '../../../middle/types';
import './Card.css';

const Card: React.FC<{ entity: T.Entity }> = (props) => {

  const [isLike, setIsLike] = useState(false);

  const {
    attributes: {
      photo,
      title,
      rooms,
      address: {
        city,
        street,
        house,
        room,
      },
      area,
      unit,
    },
    relationships: {
      attributes: {
        first_name,
        last_name,
      }
    }
  } = props.entity;

  function handleClickLike() {
    setIsLike(prev => !prev);
  }

  return (
    <article className="card">
      <div className="images">
        <img className="photo" src={photo} alt="photo" />
        <button className="like" onClick={handleClickLike}>
          {isLike
            ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/></svg>
          }
        </button>
      </div>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="rooms">Кол-во комнат: {rooms}</p>
        <p className="address">Адрес: {city}, {street}, {house}, кв. {room}</p>
        <p className="area">Площадь: {area} {unit}</p>
        <hr className="separator" />
        <h4 className="contacts-header">Контактная информация:</h4>
        <p className="contacts-info">{last_name} {first_name}</p>
      </div>
    </article>
  );
}

export default Card;