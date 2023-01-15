import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/global.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Select.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Margin, Select, Text } from '@ds.e/react';

const options = [
  { label: "Strict Black", value: "strict-black" },
  { label: "Heavenly Green", value: "heavenly-green" },
  { label: "Sweet Pink", value: "pink" },
];

ReactDOM.render(
  <div>
    <Select options={options} />
  </div>,
  document.querySelector("#root")
);

// <Select label='Please select a size' onOptionSelected={console.log}  options={[{label: '', value: ''}]} />
