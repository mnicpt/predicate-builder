import React from 'react';
import './ValueInput.scss';

const ValueInput = ({ condition, value, firstValOnChange, secondValOnChange }) => {
  return (
    <>
      <input className='query-value' value={value[0]} onChange={firstValOnChange} placeholder={condition === 'in_list' ? '1, 2, 3' : ''} />
      {condition === 'between' &&
        <>
          <div className='and'>and</div>
          <input className='query-value' value={value[1]} onChange={secondValOnChange} />
        </>
      }
    </>
  );
};

export default ValueInput;