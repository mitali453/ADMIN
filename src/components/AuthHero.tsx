import { useEffect } from "react";
import { FC, memo } from "react";
interface Props {
}
const AuthHero: FC<Props> = (props) => {
    console.log("Authhero rendering");
    useEffect(() => {
        console.log("Authhero rendering first time");
    

    }, [])
    
    return (
        <div className=" h-screen w-1/2 bg-gray-800 text-white invisible lg:visible absolute md:relative flex flex-wrap justify-center items-center">
            <img className="w-80 h-100" src="Logo.png" alt="......" />
        </div>
    );
};
AuthHero.defaultProps = {
}
export default memo(AuthHero);