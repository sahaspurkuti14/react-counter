import React , {Component} from 'react'

class Main extends Component {
    constructor(props){
        super(props);
            this.state = {
                number : 0
            }
    }

    increment = () => {
        this.setState({number : this.state.number + 1})
    }

    decrement = () => {
        this.setState({number : this.state.number - 1})
    }

   reset = () => {
       this.setState({number: 0})
   }
    
    render(){
        return(
            <div className="counter">
                <h1>Counter</h1>

                <h1 className="display"> {this.state.number} </h1>
                
            
                <button type="button" class="btn btn-success" onClick={this.increment} >Increment</button>
                <button type="button" class="btn btn-danger" onClick={this.decrement} >Decrement</button>
                <button type="button" class="btn btn-secondary" onClick={this.reset} >Reset</button>
            </div>

        );
    }
} 

export default Main;

