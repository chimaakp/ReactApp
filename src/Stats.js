import React from 'react';
import {setCurrPage} from "./index";
import ReactDOM from "react-dom";


export class Stats extends React.Component{
    render(){

        return(
            <div style={{background: 'rgba(35, 61, 77, .5)',color:'#A1C181',textAlign:'center',padding:'50px',margin:'10px'}}>
                <h2>Welcome, <strong>{this.props.name}</strong></h2>
                <h4>Use this page to log and track your info</h4>




            </div>
        )
    }
}