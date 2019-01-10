import React from 'react';
import'./Bar.css';




export class Bar extends React.Component{
    constructor(props){
        super(props);
        this.state ={active:'home'};
        this.handleClick=this.handleClick.bind(this);

    }

    handleClick(e) {
        const v = e.target.getAttribute('value');
        this.setState({active: v});
        console.log('In navbar, ' + v + ' is selected.');
        this.props.onClick(v);
    }

    render(){
        let loginbar;
         if(this.props.isLogin){
             loginbar = <span value='login' className='Bar-Col' onClick ={this.handleClick}>Login/Signup</span>;
        }
         else{
            loginbar =null;
        }



        return(<div className="Bar">
            <span value='home' onClick ={this.handleClick} className='Bar-Col'>Home</span>
            <span value='stats' className='Bar-Col' onClick ={this.handleClick}>Stats</span>
            {loginbar}
        </div>)

    }
}