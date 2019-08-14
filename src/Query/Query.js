import React from 'react';
import NameSelect from '../NameSelect';
import ConditionSelect from '../ConditionSelect';
import ValueInput from '../ValueInput';
import './Query.scss';

const Query = ({ id, name, type, condition, value, updateQuery }) => {
  const nameChanged = (e) => {
    updateQuery(id, {
      name: e.target.value,
      type,
      condition,
      value
    })
  };

  const conditionChanged = (e) => {
    updateQuery(id, {
      name,
      type,
      condition: e.target.value,
      value
    });
  };

  const valueChanged = (e) => {
    updateQuery(id, {
      name,
      type,
      condition,
      value: e.target.value
    });
  }

  return (
    <div className='query'>
      <NameSelect name={name} onChange={nameChanged} />
      <ConditionSelect name={name} condition={condition} onChange={conditionChanged} />
      <ValueInput condition={condition} value={value} onChange={valueChanged} />
    </div>
  );
};

export default Query;