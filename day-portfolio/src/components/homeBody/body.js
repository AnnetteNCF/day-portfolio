import React from 'react';
import '../homeBody/body.css';

function Body() {
    return(
        <React.Fragment>
            <div className="home-body">
                <h2>I am</h2>
                <h1 className="home-body-logo">day.</h1>
                <div className="home-body-intro">
                    UI/UX
                    <br />
                    graphic designer
                    <br />
                    frontend developer
                    
                </div>
            </div>
        </React.Fragment>

    )
}

export default Body;