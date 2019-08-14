import React from 'react';
import './AddButton.scss';

const AddButton = ({ onClick }) => {
  return (
    <button className='addBtn' onClick={onClick}>AND</button>
  );
};

export default AddButton;