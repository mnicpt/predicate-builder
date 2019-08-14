import React, { useState } from 'react';
import conditions from './conditions';
import names from '../NameSelect/names';

const ConditionSelect = ({ name, condition }) => {
  const [selectedCondition, setSelectedCondition] = useState(condition);

  const conditionOptions = conditions[names[name]].map(condition => <option key={condition} value={condition}>{condition}</option>);
  const conditionChanged = (e) => {
    setSelectedCondition(e.target.value);
  };
  return (
    <select value={selectedCondition} onChange={conditionChanged}>
      {conditionOptions}
    </select>
  );
};

export default ConditionSelect;