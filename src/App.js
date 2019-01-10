import React, { Component } from 'react';
import logo from './logo.svg';
import ml from './FirstLogo.png';
import './App.css';
import {Bar} from "./Bar";
import {Stats} from "./Stats";
import {Landing} from "./Landing";
import {LoginPage} from "./LoginPage";
import {User} from "./User";

class App extends Component {
    constructor(props){
        super(props);
        const Client = new User();
        this.state ={currpage:'home', Client};

        this.setCurrPage =this.setCurrPage.bind(this);

    }



    setCurrPage(e){
        this.setState({currpage:e});
    }

    switcher(){
        console.log(this.state.currpage);
        switch(this.state.currpage) {
            case 'home':
                return <Landing/>
                break;
            case 'stats':
                return <Stats name={this.state.Client.Name}/>
                break;
            case 'login':
                return <LoginPage/>
                break;
            default:
                return <Landing/>
        }
    }

  render() {
    let Page = this.switcher();
    return (
      <div className="App">
        <header className="App-header">
          <img src={ml} className="App-logo" alt="logo" />
          <h1 className="App-title">Money Manager</h1>
        </header>
          <Bar onClick={this.setCurrPage} isLogin={this.state.Client.isLogin} />
          {Page}
      </div>




  );
  }
}


export default App;
