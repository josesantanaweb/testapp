import React from 'react';
import Header from 'components/Header';

const App = () => {
	return (
		<div className="main">
			<div className="wrapper">
				<div className="container-fluid">
					<Header/>
					<div className="home">
						<div className="hero">
							<h1 className="hero-title">Engineering as a service</h1>
							<h3 className="hero-subtitle">Agile as a culture.</h3>
							<p className="hero-text">Squadreon is a software development studio established in 2020 by  the initiative of independent developers and engineers motivated to team up, keeping our freelance spirit with each project as a new quest to jump into.</p>
						</div>
						<div className="hero">
							<h3>Engineering as a service</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
