import {FC, memo} from "react";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
interface Props{
    maxToShow:number;
    img1:string;
    img2:string;
    img3:string;
    img4:string;
    img5:string;
    img6:string;

}
const Cards: FC<Props> = ({maxToShow,img1,img2,img3,img4,img5,img6, ...rest}) =>{
return (
    <AvatarGroup max={maxToShow}>
      <Avatar alt="1" src={img1} />
      <Avatar alt="2" src= {img2}/>
      <Avatar alt="3" src={img3} />
      <Avatar alt="4" src={img4} />
      <Avatar alt="5" src={img5}/>
      <Avatar alt="6" src={img6}/>
    </AvatarGroup>

);
};
Cards.defaultProps={
    maxToShow:4,
    img1:"https://lh3.googleusercontent.com/proxy/o-VrDTTE4QkzfwTzlqSZz1gBr6U2Ce1BE57B-gmyF1vuHa0E63Vdv8-EJBQY90bwfNJEdNuYNPms8nigKBp6uMLWzAQXxGoBRHnl3WhE4TAyaD089erxfg",
    img2:"http://happyfacesparty.com/wp-content/uploads/2019/06/avataaars-Brittany.png",
    img3:"https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png",
    img4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXlw7gFsZ4AxlI_-p7BbDgffMA9YbBdHqRBTNsdsz1RnCo3A3EnZqarneMU7kzzs3P-Y&usqp=CAU",
    img5:"https://condor-gaming.com/wp-content/uploads/2020/07/avataaars-10.png",
    img6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6aKvbs_Afp97m1FhBKsAhp9cyG4ORzIFvHyqddNmqumvJ59Re3U8yvXM-gsJYu9HtGI&usqp=CAU"
}
export default memo(Cards);
