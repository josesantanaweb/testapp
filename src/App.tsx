import React, {useState} from 'react';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Banner from 'components/Banner';
import Aside from 'components/Aside';
import Footer from 'components/Footer';
import RulingGrid from 'components/RulingGrid';
import data from 'assets/data.json';
import {Ruling} from 'interfaces';


const App = () => {
	const [rulings, setRulings] = useState(data.data);
	return (
		<div className="main">
			<Menu />
			<Header />
			<div className="max-centered">
				<Banner />
				<main role="main">
					<div className="rulings">
						<div className="rulings__top">
							<h3 className="rulings__heading">Previous Rulings</h3>
							<select name="view" className="rulings__select">
								<option value="grid">Grid</option>
								<option value="list">List</option>
							</select>
						</div>
						<div className="rulings__items">
							{
								rulings.map((item: Ruling, index: number) => (
									<RulingGrid
										key={index}
										item={item}
									/>
								))
							}
						</div>
					</div>
				</main>
				<Aside />
				<hr role="separator" />
				<Footer />
			</div>
		</div>
	);
};

export default App;
