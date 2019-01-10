import React from 'react';
import './Landing.css';

const imgStyle ={background:'rgba(35, 61, 77, .5)',padding:'50px',margin:'10px',float:'left', color:'white',display:'inline-block',width:document.body.clientWidth/2-120,height:document.body.clientHeight/4,textAlign:'center'};
const txtStyle ={background:'rgba(35, 61, 77, .5)',padding:'50px',margin:'10px',float:'right', color:'white',display:'inline-block',width:document.body.clientWidth/2-120,height:document.body.clientHeight/4,fontSize:'x-large'}
export class Landing extends React.Component{

    render(){

        return(
            <div>
            <div style={{background: 'rgba(35, 61, 77, .5)',color:'#A1C181',textAlign:'center',padding:'50px',margin:'10px'}}>
            <h2>Hi, My Name is <strong>Chima</strong></h2>
             <h4>Welcome to my first JavaScript project, where I will attempt to create a website that allows users to keep track of finances</h4>




        </div>




                <div style={imgStyle}><img style={{height:'75%'}} src="https://openclipart.org/download/183938/icon-db.svg"  /></div>
                <div style={txtStyle} ><p align="center">Storing your information to be accessed anywhere</p></div>

                <div style={imgStyle}><img style={{height:'75%'}} src="https://png.icons8.com/color/80/000000/combo-chart.png" /></div>
                <div style={txtStyle} ><p align="center">Tracking and Graphically Displaying your data for easy comprehension </p></div>

            </div>        )
    }
}
