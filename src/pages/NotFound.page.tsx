import {FC, memo} from "react";
interface Props{
}
const NotFound: FC<Props> = (props) =>{
return (
 <div className=" w-screen h-screen bg-indigo-300 text-6xl font-semibold text-black text-center p-5">Sorry!! page nott found</div>
); 
};
NotFound.defaultProps={
}
export default memo(NotFound); 