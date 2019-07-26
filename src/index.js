import React,{Component} from 'react';
import ReactDom from 'react-dom';
import DisplaySeason from './SeasonDisplay';
import ErrorDisplay from './ErrorDisplay';

class App extends Component{
    state={
        latitude:null,
        err:null
    }
    componentDidMount(){//run only once after the render function
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {this.setState(
                {latitude:position.coords.latitude})},
                (error)=>{this.setState({err: error.message})}
          );
    }
    Condtitional=()=>{
        if(this.state.err) return <div><ErrorDisplay err={this.state.err}/></div>
        else if(this.state.latitude)return <div><DisplaySeason latitude = {this.state.latitude}/></div>
        else return (
            <div>
            <div class="ui active dimmer">
              <div class="ui text loader">Loading</div>
            </div>
            <p></p>
          </div>
          )
    }
render(){
    return (
        <div>
        {this.Condtitional()}
        </div>
    );
    
}
}
ReactDom.render(<App/>,document.getElementById('root'));