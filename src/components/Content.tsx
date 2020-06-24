import React from 'react';
import Mapcontent from './MapContent'
interface location{
    lat : number
    lng : number
}

export interface option{
    center : location
    zoom : number
}
// footer 버튼 클릭에 따라 , map, timeline , profile 창 변화
export default function Content () {
    
    return(
        <div>
            </div>
    );
}