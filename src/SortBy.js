import React from 'react';
import { Radio } from 'antd';
import { capitalize } from './utils';

const SortBy = ({ options, sortBy, onChange }) => {
  return (
    <Radio.Group value={sortBy} onChange={onChange}>
      {options.map((opt, i) => (
        <Radio.Button key={i} value={opt}>
          {capitalize(opt)}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default SortBy;
