import { FC, memo } from 'react';
import Avatar from '../Avatars/Avatar';


interface Props {
    name: string;
    imgSrc: string;
    desc?: string;
    className?: string;
}

const GroupData: FC<Props> = ({
    name,
    imgSrc,
    desc,
    className
}) => {
    return (
        <div className={`flex flex-row p-4 space-x-10 ${className}`}>
            <Avatar  imageUrl={imgSrc?imgSrc:"https://www.w3schools.com/howto/img_avatar2.png"}></Avatar>
            <div className="flex flex-col">
                <h1 className="font-bold text-lg">{name[0].toUpperCase()}{name.substr(1)}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

GroupData.defaultProps = {};

export default memo(GroupData);