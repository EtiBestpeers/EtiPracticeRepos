import React from 'react';

// const ErrorComponent= () => <div>{props.ignore}</div>
export default class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor')
        super(props)

        this.state = {
            counter: 0,
            seed: 0
        }
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }
    static getDerivedStateFromProps(props , state){
        if(props.seed && state.seed !== props.seed){
            return{
                seed: props.seed,
                counter: props.seed
            }
        }
      return null   
    }
    componentDidMount() {
        console.log('component did mount')
        console.log('------------------- ')

    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.ignoreProp && this.prop.ignoreProp !== nextProps.ignoreProp){
            console.log('Shoul component update - DO NOT RENDER')
            console.log('------------------- ')
            return false
        }
        console.log('Shoul component update -  RENDER')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return null 
    }

    render() {
        console.log('Render')
 
        // if(this.props.showErrorComponent && this.state.error){
        //     return <div>We have encountered an error!{this.state.error.message} </div>
        // }
        return <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <div className="counter">
                counter:{this.state.counter}
            </div>
            {/* {this.props.showErrorComponent ?  <ErrorComponent/> : null } */}
        </div>
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update ')
        console.log('-------------')
    }

    componentWillUnmount(){
        console.log('Counter will Unmount')
        console.log('-------------')
        

    }

    // componentDidCatch(error, info){
    //     console.log('Component did catch')
    //     this.setState({error, info})
    // }
}
