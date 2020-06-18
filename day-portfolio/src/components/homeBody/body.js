import React from 'react';
import '../homeBody/body.css';

function Body() {
    return(
        <React.Fragment>
            <div className="home-body">
                <h2>project</h2>
                <h1 className="home-body-logo">day.</h1>
                <div className="home-body-intro">
                    UI/UX
                    <br />
                    graphic designer
                    <br />
                    frontend developer
                    
                </div>
            </div>
            {
            // <div className="email">
            //     <a href="mailto:annettencf@gmail.com?subject=Hi%20Day" class="email-link">annettencf@gmail.com</a>
            // </div>
            }
        </React.Fragment>

    )
}

export default Body;