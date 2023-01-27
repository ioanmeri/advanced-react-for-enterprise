import '@ds.e/scss/lib/Utilities.css';

import React from 'react';

import { Spacing } from '@ds.e/foundation';
import { select, text } from '@storybook/addon-knobs';

import Color from './Color';

export default {
  title: "Atoms|Color",
};

export const Common = () => <Color hexCode={text("HexCode", "pink")} />;

export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Width", Object.values(Spacing), "xxl")}
    height={select("Height", Object.values(Spacing), "xxl")}
  />
);
