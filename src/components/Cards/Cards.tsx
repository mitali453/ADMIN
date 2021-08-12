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
      <Avatar alt="A" src={img1} />
      <Avatar alt="B" src= {img2}/>
      <Avatar alt="C" src={img3} />
      <Avatar alt="D" src={img4} />
      <Avatar alt="E" src={img5}/>
      <Avatar alt="M" src={img6}/>
    </AvatarGroup>

);
};
Cards.defaultProps={
    maxToShow:4,
    img1:"https://www.clipartmax.com/png/middle/162-1623921_stewardess-510x510-user-profile-icon-png.png",
    img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6aKvbs_Afp97m1FhBKsAhp9cyG4ORzIFvHyqddNmqumvJ59Re3U8yvXM-gsJYu9HtGI&usqp=CAU",
    img3:"https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    img4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXlw7gFsZ4AxlI_-p7BbDgffMA9YbBdHqRBTNsdsz1RnCo3A3EnZqarneMU7kzzs3P-Y&usqp=CAU",
    img5:"https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg",
    img6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6aKvbs_Afp97m1FhBKsAhp9cyG4ORzIFvHyqddNmqumvJ59Re3U8yvXM-gsJYu9HtGI&usqp=CAU"
}
export default memo(Cards);