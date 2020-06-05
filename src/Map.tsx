import React, { Component } from 'react';
import {render} from "react-dom";
import {option} from "./Content"

interface MapInputProps {
    id: string
    options : option
    onMapLoad : () => void
}

class Map extends React.Component<MapInputProps> {
    // onScriptLoad: any; //type 지정 수정
    constructor(props : any) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this);
      }
    
      onScriptLoad() {
        // const map = new window.google.maps.Map(
        //   document.getElementById(this.props.id),
        //   this.props.options
        // );
        // this.props.onMapLoad(map);
      }

    componentDidMount() {
        // if (!window.google) {
        //   var s = document.createElement("script");
        //   s.type = "text/javascript";
        //   s.src = `https://maps.google.com/maps/api/js?key=YOUR_API_KEY`;
        //   var x = document.getElementsByTagName("script")[0];
        //   x.parentNode.insertBefore(s, x);
    
        //   s.addEventListener("load", e => {
        //     this.onScriptLoad();
        //   });
        // } else {
        //   this.onScriptLoad();
        // }
    }
    public render(){
    return(
        <div id={this.props.id} />
    );
    }
}

export default Map