import React,{Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';


// 하단 페이지 버튼
// export class  MapContainer extends Component {

//     render(){
//         if(!this.props.loaded){
//             return<div> Loading...</div>
//         }
//     return(
//         <div className='myMap'>
//             <Map
//                 google={this.props.google}
//                 zoom={8}
//                 initialCenter={{lat:0, lng:0}}
//             />
//         </div>
//     );
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: 'key'
//   })(MapContainer);