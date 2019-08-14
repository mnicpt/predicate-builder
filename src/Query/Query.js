import React, { useState } from 'react';
import names from './names';
import conditions from './conditions';

const Query = ({ name, type, condition, value }) => {
  const [selectedName, setSelectedName] = useState(name || Object.keys(names)[0]);
  const [selectedCondition, setSelectedCondition] = useState(condition || conditions[Object.keys(names)[0]]);

  const nameOptions = Object.keys(names).map(name => <option key={name} value={name}>{name}</option>);
  const conditionOptions = conditions[names[selectedName]].map(condition => <option key={condition} value={condition}>{condition}</option>);

  const nameChanged = (e) => {
    setSelectedName(e.target.value);
  };

  const conditionChanged = (e) => {
    setSelectedCondition(e.target.value);
  };

  return (
    <div className='query'>
      <select value={selectedName} onChange={nameChanged}>
        {nameOptions}
      </select>
      {names[selectedName] === 'number' && <div className='is'></div>}
      <select value={selectedCondition} onChange={conditionChanged}>
        {conditionOptions}
      </select>

    </div>
  );
};

export default Query;