import { ImgHTMLAttributes } from 'react';
import Style from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?:boolean;
}

export function Avatar({hasBorder=true ,...props}:AvatarProps){

    return(
        <img 
            className={hasBorder ? Style.avatarComBorda : Style.avatar} 
            {...props}
        />
    )
}