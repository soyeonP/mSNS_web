import React from 'react'
import {GoogleApiWrapper,InfoWindow,Map,Marker} from 'google-maps-react'
const apiKey = '';/**google api key */
class FindAddressPresenter extends React.Component<any> {
 public render(){
     return(
        <div className={"FindAddressPresenter"}>
        <Map google={this.props.google} zoom={14}/>
          {/* <Marker onClick={this.props.onMarkerClick}
           name={"Current location"} />
          <InfoWindow>
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow> */}
      </div>
     )
 }
}

export default GoogleApiWrapper({
    apiKey : apiKey
})(FindAddressPresenter);