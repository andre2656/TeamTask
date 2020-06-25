import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {
    let padding = { paddingBottom: "30px" }

    return (
        <div id='intro'>
            <div className='container' >
                <div className="row" sytle={{}}>
                    <div className="col-md-1" />
                    <div className="col-md-10">
                        <h1 style={{ marginTop: 0 }}>Team Task</h1>

                        <p>This Web app is intended to be a Boilerrplate for future Projects. Web app will include a login feature, main app / landing page functionality, Connection to a DB using Squlite, and signup page for buisnesses trying to aquire cliental. </p>

                        <Link className="get-started-now" to="/sign-up"><button type="button" id="first-button" className="btn btn-dark">Get Started Now</button></Link>
                        <div className="col-md-1" style={padding} />
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Intro;