import React from 'react';

export const mapOption = (props) => {
  props.chars.map((char) => (
    <>
      <h1 key={char.name}>{`Name: ${char.name}`}</h1>
      <h3 key={char.nickname}>{`Nickname: ${char.nickname}`}</h3>
      <h3 key={char.id}>{`Character ID: ${char.char_id}`}</h3>
      <h3 key={char.actor}>{`Portrayed by: ${char.portrayed}`}</h3>
      <img
        width='200px'
        key={char.id}
        src={char.img}
        alt='character snapshot'
      />
      <br></br>
    </>
  ));
};
