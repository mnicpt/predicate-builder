import React from 'react';
import './DeleteButton.scss';

const DeleteButton = ({ id, className, disabled, onClick }) => {
  return (
    <button id={id} className={'deleteBtn ' + className} disabled={disabled} onClick={onClick}>-</button>
  );
};

export default DeleteButton;