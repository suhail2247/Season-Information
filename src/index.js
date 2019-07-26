import React,{Component} from 'react';
import ReactDom from 'react-dom';
import DisplaySeason from './SeasonDisplay';


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
        if(this.state.err) return <div>Error: {this.state.err}</div>
        else if(this.state.latitude)return <div><DisplaySeason latitude = {this.state.latitude}/></div>
        else return <div>Loading</div>
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