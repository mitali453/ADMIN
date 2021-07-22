import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import Cards  from './Cards';

export default {
    component: Cards,
    title: "Cards",
} as Meta;

export const Main = (args :any) => <Cards {...args} ></Cards>;
Main.args={
    maxToShow:5,
    img1:"https://lh3.googleusercontent.com/proxy/o-VrDTTE4QkzfwTzlqSZz1gBr6U2Ce1BE57B-gmyF1vuHa0E63Vdv8-EJBQY90bwfNJEdNuYNPms8nigKBp6uMLWzAQXxGoBRHnl3WhE4TAyaD089erxfg",
    img2:"http://happyfacesparty.com/wp-content/uploads/2019/06/avataaars-Brittany.png",
    img3:"https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png",
    img4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXlw7gFsZ4AxlI_-p7BbDgffMA9YbBdHqRBTNsdsz1RnCo3A3EnZqarneMU7kzzs3P-Y&usqp=CAU",
    img5:"https://condor-gaming.com/wp-content/uploads/2020/07/avataaars-10.png",
    img6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6aKvbs_Afp97m1FhBKsAhp9cyG4ORzIFvHyqddNmqumvJ59Re3U8yvXM-gsJYu9HtGI&usqp=CAU"
    
}