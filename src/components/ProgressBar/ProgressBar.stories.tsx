import { Meta } from '@storybook/react';
import "../../index.css";

import  ProgressBar  from './ProgressBar';

export default {
    component: ProgressBar,
    title: 'ProgressBar',
}as Meta;

export const Progress = (args :any) => <ProgressBar {...args} ></ProgressBar>;
Progress.args={
    widthInPercentage: "50%",
    progressRemainingColor: "bg-pink-300",
    progressCompleteColor: "bg-pink-700",

}