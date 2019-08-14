import React from 'react';
import conditions from './conditions';
import names from '../NameSelect/names';

const ConditionSelect = ({ name, condition, onChange }) => {
  const conditionOptions = conditions[names[name]].map(condition => <option key={condition} value={condition}>{condition}</option>);

  return (
    <select value={condition} onChange={onChange}>
      {conditionOptions}
    </select>
  );
};

export default ConditionSelect;