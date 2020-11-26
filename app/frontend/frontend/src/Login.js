
import React, {Component} from 'react'

class Login extends Component{
    handleSubmit = (event) => {
        if (event.target.elements.email.value.includes("healthcare")){
            localStorage.setItem('userType', 'healthcare');
        }
        else{
            localStorage.setItem('userType', 'user');
        }
        return true;
    }

    



    render() { return (
        <div>
            <div id="title">
                <h1>COVIDETECT</h1>
            </div>
            <div id="login">
                {/*<form ref="form" onSubmit={this.handleSubmit}>*/}
                <form ref="form" onSubmit={this.handleSubmit} action="/test">
                    <input type="email" required id="email" name="email" placeholder="email"></input><br/><br/>
                    <input type="password" required="required" id="password" name="password" placeholder="password"></input><br/><br/>
                    <input type="submit" value="Log In"/><br/><br/>
                    <input type="button" value="Register"/><br/><br/>
                </form>
            </div>
        </div>
    )}
}

export default Login;