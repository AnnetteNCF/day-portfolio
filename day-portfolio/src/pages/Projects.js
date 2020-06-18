import React, { Component } from 'react';
import ProjectIntro from '../components/ProjectIntro.js';
import guessingGame from '../guessingGame.png';
import laffy from '../laffy.png';


class Projects extends Component {
  render() {
	    return(
	    	<React.Fragment>
	        <div className="projects">
	        	p
	        </div>
	       	<div className="projects">
	        	r
	        </div>
	       	<div className="projects">
	        	o
	        </div>
	       	<div className="projects">
	        	j
	        </div>
	        <div className="projects">
	        	e
	        </div>
	        <div className="projects">
	        	c
	        </div>
	       	<div className="projects">
	        	t
	        </div>
	       	<div className="projects">
	        	s
	        </div>	    
	        <div className="project-card-container">
				<div class="card">
				  <div class="card-inner">
				    <div class="card-front">
				    	<div className="card-info">
							<h1>Laffy</h1>
							<h3>Logo Design | Frontend Development</h3>
						</div>
				    </div>
				    <div class="card-back">
		  		     	<a href="https://laffy.netlify.app/" target="_blank" rel="noreferrer noopener">
		  		     		<img className="card-image" src={laffy} alt="screenshot of laffy website" 
		  		     		style={{height: '200px', width: '350px'}} />
		  		     	</a>
		  		     	{
		  		     		// <button> Visit </button>
		  		     	}
				    </div>
				  </div>
				</div>
				<div class="card">
				  <div class="card-inner">
				    <div class="card-front">
				    	<div className="card-info">
							<h1>Guessing Game</h1>
							<h3>Class Project</h3>
						</div>
				    </div>
				    <div class="card-back">
		  		     	<a href="https://annettencf.bitbucket.io/" target="_blank" rel="noreferrer noopener">
			  		     	<img className="card-image" src={guessingGame} alt="screenshot of my guessing game website" 
			  		     	style={{height: '200px', width: '350px'}} />
		  		     	</a>
		  		     	{
		  		     		// <button> Visit </button>
		  		     	}
				    </div>
				  </div>
				</div>
			</div>

	        </React.Fragment>
	    )
	}
}

export default Projects;







// <div className="projects-grid">
// 	        	<div className="projects-grid-container">
// 		        	<div className="card-each">
// 						<div className="card-info">
// 							<h2>Laffy</h2>
// 							<p>Logo Design | Frontend Development</p>
// 						</div>
// 					</div>

// 					<div className="card-each">
// 						<div className="card-info">
// 							<h2>Guessing Game</h2>
// 							<p>Class Project</p>
// 						</div>
// 					</div>
// 				</div>


// style={{backgroundImage: `url(${laffy})`, objectfit: 'cover', width: '300px', height: 'auto'}}>


	   //      	<div className="projects-grid-container">

		  //       <div className="card-each">
		  //       	<img className="card-image" src={laffy} alt="screenshot of laffy website" />
		  //       	<div className="card-info">	        	
				// 			<h2>Laffy</h2>
				// 			<p>Logo Design | Frontend Development</p>
				// 	</div>
				// 	</div>

				// 	<div className="card-each">
				// 	 	<img className="card-image" src={guessingGame} alt="screenshot of my guessing game website" />
				// 			<h2>Guessing Game</h2>
				// 			<p>Class Project</p>
				// 	</div>
				// </div> 