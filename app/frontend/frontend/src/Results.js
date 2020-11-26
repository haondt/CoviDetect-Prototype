import React, {Component} from 'react'


const UserResult = (props) => {
    return(
        <div className="centerContent">
            <p>
                Date of test submission: {props.date}<br/>
                Test result: <b>{props.result}</b><br/>
                Test comments: {props.comments}
            </p>
            <button className="resultButton button">
                Review test submission
            </button>
        </div>
    )
}

const HealthcareResult = (props) => {
    return(
        <div className="centerContent">
            <p>
                Name: {props.name}<br/>
                Date of test submission: {props.date}<br/>
                Test result: <b>{props.result}</b><br/>
                Test comments: {props.comments}
            </p>
            <button className="resultButton button">
                Modify test submission
            </button>
            <button className="resultButton button">
                Resubmit test
            </button>
            <button className="resultButton button" onClick={props.onClick}>
                Modify test result
            </button>
        </div>
    )
}


class Results extends Component {
    state = {
        view: "home"
    }

    results = [
        {
            name: "John Snow",
            date: "2020-11-13 2:57 PM",
            result: "Pending",
            comments: ""
        },
        {
            name: "Catherine Brown",
            date: "2020-11-12 4:46 PM",
            result: "Negative",
            comments: "Poor audio sample, retest recommended."
        },
        {
            name: "Amber Garcia",
            date: "2020-09-01 11:23 AM",
            result: "Negative",
            comments: ""
        }
    ]

    showModifyResult = () => {
        this.setState({
            view: "modifyResult"
        })
    }
    showHome = () => {
        this.setState({
            view: "home"
        })
    }

    render(){
        if (this.state.view === "home"){
            if(localStorage.getItem("userType")==="healthcare"){
                return (
                    <div id="results">
                        {this.results.map((result, index) => {
                            return(
                                <HealthcareResult key={index} {...result} onClick={this.showModifyResult}/>
                            )
                        })}
                    </div>
                )
            }
            else{
                return (
                    <div id="results">
                        {this.results.map((result, index) => {
                            return(
                                <UserResult key={index} {...result}/>
                            )
                        })}
                    </div>
                )
            }
        }
        else{
            return (
                <div id="results">
                    <div className="centerContent testForm">
                        <p>
                            Name: John Snow<br/>
                            Date of test submission: 2020-11-13 2:57 PM<br/>
                        </p>
                        <form ref="form">
                                <label htmlFor="result">Test Result:</label>
                                <select defaultValue={"pending"} type="select" id="result" name="result">
                                    <option value="positive">Positive</option>
                                    <option value="negative">Negative</option>
                                    <option value="pending">Pending</option>
                                </select><br/>
                                <label htmlFor="comments">Test comments:</label><br/>
                                <textarea name="comments"/><br/><br/>
                        </form>
                        <button className="resultButton button" onClick={this.showHome}>
                            Save changes
                        </button>
                        <button className="resultButton button" onClick={this.showHome}>
                            Cancel and discard changes
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default Results