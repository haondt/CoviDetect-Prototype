
import React, {Component} from 'react'

class Test extends Component {
    state = {
        view: "home"
    }

    showHome = () => {
        this.setState({
            view: "home"
        });
    }

    showTestStart = () => {
        this.setState({
            view: "preview"
        })
    }
    showTest = () => {
        this.setState({
            view: "test"
        })
    }

    showVoice = () =>{
        this.setState({
            view: "voice"
        })
    }
    showResult = () =>{
        this.setState({
            view: "result"
        })
    }

    render(){
        if (this.state.view === "home"){
            return (
                <div>
                    <div id="title">
                        <h1>COVIDETECT</h1>
                    </div>
                    <div className="centerContent">
                        {localStorage.getItem("userType")==="user" ?
                            <p>
                                1 New test result available <br/>
                                0 Tests waiting for results <br/>
                                0 Tests in progress <br/>
                            </p> :
                            <p>
                                460,992 Tests submitted in the last 24 hours  <br/>
                                123,496 Tests waiting for results <br/>
                            </p>
                        }
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        {localStorage.getItem("userType")==="user" ?
                        <button onClick={this.showTestStart} className="button">
                            Submit new test
                        </button> :
                        <button onClick={this.showTest} className="button">
                            Submit new test
                        </button> 
                        }
                    </div>
                </div>
            )

        }
        if(this.state.view === "preview"){
            return(
                <div>
                    <div id="title">
                        <h1>COVIDETECT</h1>
                    </div>
                    <div className="centerContent">
                        <p>
                            The test will be composed of a short survey,
                            followed by a voice sample. Results can be
                            expected within 12 hours.
                        </p>
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        <button onClick={this.showTest} className="button">
                            Start test
                        </button>
                    </div>
                </div>
            )
        }
        
        if(this.state.view === "test"){
            return(
                <div>
                    <div id="title">
                        <h1>COVIDETECT</h1>
                    </div>
                    <div className="centerContent testForm">
                        <form ref="form">
                            {localStorage.getItem("userType")==="healthcare" && <>
                                <label htmlFor="first">First Name:</label>
                                <input type="text" id="first" name="first"/><br/>
                                <label htmlFor="last">Last Name:</label>
                                <input type="text" id="last" name="last"/><br/>
                                </>
                            }
                            <label htmlFor="gender">Gender:</label><br/>
                            <input type="radio" id="male" name="gender" value="male"/>
                            <label htmlFor="male">Male</label><br/>
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label htmlFor="female">Female</label><br/>
                            <input type="radio" id="other" name="gender" value="other"/>
                            <label htmlFor="other">Other or prefer not to answer</label><br/><br/>

                            <label htmlFor="birthday">Birthday:</label>
                            <input type="date" id="birthday" name="birthday"/><br/><br/>

                            <label htmlFor="country">Country:</label>
                            <select defaultValue={"DEFAULT"} type="select" id="country" name="country">
                                <option value="DEFAULT" disabled></option>
                                <option value="CAN">Canada</option>
                                <option value="USA">United States of America</option>
                            </select><br/><br/>

                            <label htmlFor="region">Region:</label>
                            <select defaultValue={"DEFAULT"} type="select" id="region" name="region">
                                <option value="DEFAULT" disabled></option>
                                <option value="AB">Alberta</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="NB">New Brunswick</option>
                                <option value="QC">Quebec</option>
                                <option value="ON">Ontario</option>
                            </select><br/><br/>

                            <label htmlFor="prevD">Have had previous diagnosis:</label>
                            <input type="checkbox" id="prevD" name="prevD"/><br/><br/>

                            <label htmlFor="resultD">Diagnosis Result:</label><br/>
                            <input type="radio" id="postive" name="resultD" value="positive"/>
                            <label htmlFor="positive">Positive</label><br/>
                            <input type="radio" id="negative" name="resultD" value="negative"/>
                            <label htmlFor="negative">Negative</label><br/><br/>

                            <label htmlFor="commentD">Diagnosis Comments:</label><br/>
                            <textarea name="commentD"/><br/><br/>

                            <label htmlFor="sourceD">Diagnosis Source</label>
                            <select defaultValue="doctor" type="select" id="sourceD" name="sourceD">
                                <option value="doctor">Doctor's evaluation</option>
                                <option value="test">Offical test</option>
                                <option value="self">Personal assessment</option>
                            </select><br/><br/>

                            <label htmlFor="symptoms">Symptoms (check all that apply):</label><br/>
                            <input type="checkbox" id="fever" name="symptoms" value="fever"/>
                            <label htmlFor="fever">Fever</label><br/>
                            <input type="checkbox" id="cough" name="symptoms" value="cough"/>
                            <label htmlFor="cough">Dry cough</label><br/>
                            <input type="checkbox" id="tired" name="symptoms" value="tired"/>
                            <label htmlFor="tired">Tiredness</label><br/>
                            <input type="checkbox" id="aches" name="symptoms" value="aches"/>
                            <label htmlFor="aches">Aches and pains</label><br/>
                            <input type="checkbox" id="throat" name="symptoms" value="throat"/>
                            <label htmlFor="throat">Sore throat</label><br/>
                            <input type="checkbox" id="diarrhoea" name="symptoms" value="diarrhoea"/>
                            <label htmlFor="diarrhoea">Diarrhoea</label><br/>
                            <input type="checkbox" id="conjunctivitis" name="symptoms" value="conjunctivitis"/>
                            <label htmlFor="conjunctivitis">Conjunctivitis</label><br/>
                            <input type="checkbox" id="headache" name="symptoms" value="headache"/>
                            <label htmlFor="headache">Headache</label><br/>
                            <input type="checkbox" id="taste" name="symptoms" value="taste"/>
                            <label htmlFor="taste">Loss of taste or smell</label><br/>
                            <input type="checkbox" id="rash" name="symptoms" value="rash"/>
                            <label htmlFor="rash">A rash on skin, or discolouration of fingers or toes</label><br/>
                            <input type="checkbox" id="breath" name="symptoms" value="breath"/>
                            <label htmlFor="breath">Difficulty breathing or shortness of breath</label><br/>
                            <input type="checkbox" id="pain" name="symptoms" value="pain"/>
                            <label htmlFor="pain">Chest pain or pressure</label><br/>
                            <input type="checkbox" id="speech" name="symptoms" value="speech"/>
                            <label htmlFor="speech">Loss of speech or movement</label><br/><br/>
                        </form>
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        <button onClick={this.showVoice} className="button">
                            Submit
                        </button>
                    </div>
                </div>
            )
        }
        if (this.state.view === "voice"){
            return(

                <div>
                    <div id="title">
                        <h1>COVIDETECT</h1>
                    </div>
                    <div className="centerContent">
                        <p>
                            Press and hold to record voice sample:
                        </p>
                        <div id="voiceSample">
                            <img src={require("./images/mic.svg")} alt=""/>
                        </div>
                        <button className="button">
                            Listen to recording
                        </button>
                    </div>
                    <div className="centerContent centerButtonDiv" >
                        <button onClick={this.showResult} className="button">
                            Finish Test
                        </button>
                    </div>
                </div>
            )

        }
        if(this.state.view === "result"){
            return(
                <div>
                    <div id="title">
                        <h1>COVIDETECT</h1>
                    </div>
                    <div className="centerContent">
                        <p>
                            The test has been completed and sent to CovidDetect servers. Once the results are processed, 
                            you will be able to view your current and past test results in the "Results" tab.
                        </p>
                    </div>
                </div>
            )
        }
    }

}

export default Test