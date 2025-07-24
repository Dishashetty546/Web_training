import React, {Component} from 'react';
class LifecycleFirst extends Component{
    constructor(props)
    {
        super(props);
        console.log("Constructor: Component called.....");
        this.state={
            count:0
        };
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps() method called...");
        return null;
    }
    render(){
        console.log("render() method called...");
        return (
            <div>
                <h1>Life Cycle Methods of Class Component</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=>this.setState({const:this.state.count+1})}>Increment</button></div>
        )
    }
    componentDidMount(){
        console.log(" componentDidMount() called...")

    }
    
}
export default LifecycleFirst;