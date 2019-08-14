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
    const updatedCondition = e.target.value;
    let updatedValue = value;
    if (updatedCondition !== 'between') {
      updatedValue.length = 1;
    }

    updateQuery(id, {
      name,
      type,
      condition: updatedCondition,
      value: updatedValue
    });
  };

  const firstValueChanged = (e) => {
    const updatedValue = value.length > 1 ? [e.target.value, value[1]] : [e.target.value];

    updateQuery(id, {
      name,
      type,
      condition,
      value: updatedValue
    });
  }

  const secondValueChanged = (e) => {
    const updatedValue = [value[0], e.target.value];

    updateQuery(id, {
      name,
      type,
      condition,
      value: updatedValue
    });
  }

  return (
    <div className='query'>
      <NameSelect name={name} onChange={nameChanged} />
      <ConditionSelect name={name} condition={condition} onChange={conditionChanged} />
      <ValueInput condition={condition} value={value} firstValOnChange={firstValueChanged} secondValOnChange={secondValueChanged} />
    </div>
  );
};

export default Query;