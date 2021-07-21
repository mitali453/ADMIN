import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import  Avatar  from './Avatar';

export default {
    component: Avatar,
    title: 'Avatar',
}  as Meta;

export const Avatars = (args :any) => <Avatar {...args} ></Avatar>;
Avatars.args={
    imageUrl: "https://www.w3schools.com/howto/img_avatar2.png"
}