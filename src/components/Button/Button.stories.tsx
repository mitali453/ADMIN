import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import  Button  from './Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

export const main = (args :any) => <Button {...args} >click</Button>;
export const main2 = (args :any) => <Button {...args} >cancel</Button>;