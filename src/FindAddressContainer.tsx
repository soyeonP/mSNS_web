import React, { Component } from 'react';
import FindAddressPresenter from './FindAddressPresenter'
import {option} from "./Content"

//container
interface MapInputProps {
    id: string
    options : option
    onMapLoad : () => void
}

class FindAddressContainer extends Component {

    // // onScriptLoad: any; //type 지정 수정
    // constructor(props : any) {
    //     super(props);
    //     this.onScriptLoad = this.onScriptLoad.bind(this);
    //   }

    // componentDidMount() {
    //     if (!window.google) {
    //       var s = document.createElement("script");
    //       s.type = "text/javascript";
    //       s.src = `https://maps.google.com/maps/api/js?key=YOUR_API_KEY`;
    //       var x = document.getElementsByTagName("script")[0];
    //       x.parentNode.insertBefore(s, x);
    
    //       s.addEventListener("load", e => {
    //         this.onScriptLoad();
    //       });
    //     } else {
    //       this.onScriptLoad();
    //     }
    // }
    public render(){
    return(
        <FindAddressPresenter />
    );
    }
}

export default FindAddressContainer