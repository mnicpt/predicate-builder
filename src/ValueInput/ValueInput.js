import React from 'react';
import './ValueInput.scss';

const ValueInput = ({ condition, value, onChange }) => {

  return (
    <>
      <input className='query-value' value={value} onChange={onChange} placeholder={condition === 'in_list' ? '1, 2, 3' : ''} />
      {condition === 'between' &&
        <>
          <div className='and'>and</div>
          <input className='query-value' onChange={onChange} />
        </>
      }
    </>
  );
};

export default ValueInput;