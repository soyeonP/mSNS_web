import React from 'react';
import FindAddressContainer from './FindAddressContainer';

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
            {/* 임의 맵 값 render */}
            {/* <Map id="MyMap" 
                options={{ 
                    center : { lat : 33.4890, lng: 126.4983},
                    zoom: 3}}
                onMapLoad={(map: any) => {
                    const marker : WindowConsole = new google.maps.Marker({
                        position : {lat :33.4890, lng: 126.4983}
                        map : map
                    })
                }
                }
            />  */}
            <FindAddressContainer/>
        </div>
    );
}