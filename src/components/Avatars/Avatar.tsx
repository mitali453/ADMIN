import {ButtonHTMLAttributes, FC, memo} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme : 'active' | 'inactive';
    imageUrl: string;
}
const Avatar: FC<Props> = ({ theme,imageUrl, className}) =>{
    const themeClasses =
        theme === "inactive" ? "bg-red-600" : "bg-green-500";

return (
    <div className="relative inline-block">
        <img className="inline-block object-cover w-32 h-32 rounded-full" src={imageUrl} alt="Profile image"/>
        <span className={"absolute bottom-4 right-0 inline-block w-4 h-4  border-2 border-white rounded-full "+ themeClasses +" "+ className}></span>
  </div>
);
};
Avatar.defaultProps={
    theme:"active",
    imageUrl:"https://www.w3schools.com/howto/img_avatar2.png"
}
export default memo(Avatar);