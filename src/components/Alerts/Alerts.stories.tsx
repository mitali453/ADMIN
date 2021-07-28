import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";
import Alerts from './Alerts';


export default {
    component: Alerts,
    title: "Alerts",
} as Meta;

export const Alert = (args :any) => <Alerts {...args} ></Alerts>;
Alert.args={
    children : "It's a  alert",
    alertBgColor:"bg-yellow-300",
    alertBorderColor:"border border-green-400",
    alertTextColor: "text-red-500"
}