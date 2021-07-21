import {ButtonHTMLAttributes, FC, memo} from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    progressRemainingColor?: string;
    progressCompleteColor?: string;
    widthInPercentage:string;
   
}
const ProgressBar: FC<Props> = ({ progressRemainingColor,widthInPercentage,progressCompleteColor, ...rest}) =>{
return (
    <div className="relative pt-1">
    <div className={"overflow-hidden h-3 mb-4 text-xs flex rounded " +" " + progressRemainingColor} >
      <div style={{ width: widthInPercentage }} className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center" + " " 
      + progressCompleteColor}></div>
    </div>
  </div>
);
};
ProgressBar.defaultProps={

    progressRemainingColor: "bg-green-300",
    progressCompleteColor: "bg-green-500",

}
export default memo(ProgressBar);