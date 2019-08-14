import React, { useState } from 'react';
import NameSelect from '../NameSelect';
import ConditionSelect from '../ConditionSelect';
import './Query.scss';

const Query = ({ name, type, condition, value }) => {
  const [selectedName, setSelectedName] = useState(name);
  const nameChanged = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <div className='query'>
      <NameSelect name={selectedName} onChange={nameChanged} />
      <ConditionSelect name={selectedName} condition={condition} />
    </div>
  );
};

export default Query;