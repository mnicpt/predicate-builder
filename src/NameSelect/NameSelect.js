import React from 'react';
import names from './names';
import './NameSelect.scss';

const NameSelect = ({ name, onChange }) => {
  const nameOptions = Object.keys(names).map(name => <option key={name} value={name}>{name}</option>);

  return (
    <>
      <select value={name} onChange={onChange}>
        {nameOptions}
      </select>
      {names[name] === 'number' && <div className='is'>is</div>}
    </>
  );
};

export default NameSelect;