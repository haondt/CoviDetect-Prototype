
import React, {Component} from 'react'


class Settings extends Component {
    state = {
        view: "home"
    }

    showHome = () => {
        this.setState({
            view: "home"
        })
    }

    showPassChange = () => {
        this.setState({
            view: "passChange"
        })
    }

    render() {
        if (this.state.view === "home"){
            return (
                <div>
                    <div className="centerContent">
                        <p>
                            A new password will be required every 92 days.
                            Days since last password change: <b>12</b>
                        </p>
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        <button className="button" onClick={this.showPassChange}>
                            Change password
                        </button>
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        <a href="/">
                            <button className="button">
                                Log out
                            </button>
                        </a>
                    </div>
                </div>
            )
        }

        if (this.state.view === "passChange"){
            return (
                <div>
                    <div className="centerContent testForm">
                        <form ref="form">
                            <label htmlFor="oldPass" required>Old password:</label><br/><br/>
                            <input type="password" id="oldPass" name="oldPass"/><br/><br/>
                            <label htmlFor="newPass" required>New password:</label><br/><br/>
                            <input type="password" id="newPass" name="newPass"/><br/><br/>
                            <label htmlFor="confPass" required>Confirm new password:</label><br/><br/>
                            <input type="password" id="confPass" name="confPass"/><br/><br/>
                        </form>
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        <button onClick={this.showHome} className="button">
                            Change password
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default Settings