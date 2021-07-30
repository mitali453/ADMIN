import classNames from "classnames";
import { ButtonHTMLAttributes, FC, memo } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme ?: 'primary' | 'secondary';
    children: string;
    type?:"submit" | "reset" | "button" | undefined;
    
}

const Button: FC<Props> = ({ children, theme, className, ...rest }) => {
    const themeClasses =
        theme === "primary" ? " bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 " : " bg-gray-500 hover:bg-gray-600 focus:ring-gray-500 ";


    return (
        <button
            type="submit"
            {...rest}
            className={
                classNames("group relative w-4/3 shadow-lg flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white disabled:cursor-not-allowed ",
          themeClasses , className)}
        >
            {children}
        </button>
    );
};


Button.defaultProps = {
    theme: "primary",
    
}
export default memo(Button);

