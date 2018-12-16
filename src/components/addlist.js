import React, { Component } from 'react';

class addList extends Component {

    state = {
        // todos : []
        content : ''
    }

    chg = (e) =>{
        this.setState({
            content : e.target.value
        })
    }

    sub = (e) =>{
       e.preventDefault();
       
       this.props.fun(this.state);
    //    console.log(1,this.state);
       this.setState({
           content : ''
       })
    //    console.log(3,this.state);
    }
    render() {
        return(
            <div>
                <form onSubmit = {this.sub.bind(this)}>
                    <label>Add New Todo</label>
                    <input type = "text" onChange = {this.chg.bind(this)} value = {this.state.content} />
                </form>
            </div>
        )
    }

}

export default addList;