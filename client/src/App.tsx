import React, {useState, useEffect} from 'react';
import MediaQuery from 'react-responsive';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Banner from 'components/Banner';
import Aside from 'components/Aside';
import Footer from 'components/Footer';
import RulingGrid from 'components/RulingGrid';
import RulingList from 'components/RulingList';
import {Ruling} from 'interfaces';
import RulingsServices from 'services/rulingsService';

const App = () => {
	const [rulings, setRulings] = useState([]);
	const [view, setView] = useState("list");

	useEffect(() => {
		getRulings();
	}, []);

	const getRulings = async () => {
		try {
			const rulings = await RulingsServices.getRulings();
			setRulings(rulings);
		} catch (error) {
			console.log(error);
		}
	};

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
							<MediaQuery minWidth={769}>
								<select name="view" className="rulings__select">
									<option value="grid">Grid</option>
									<option value="list">List</option>
								</select>
							</MediaQuery>
						</div>
						{
							view !== "list"
								?
								<>
									<MediaQuery minWidth={769}>
										<div className="rulings__list">
											{
												rulings && rulings.map((item: Ruling, index: number) => (
													<RulingList
														key={index}
														item={item}/>
												))
											}
										</div>
									</MediaQuery>
									<MediaQuery maxWidth={768}>
										<div className="rulings__items">
											{
												rulings && rulings.map((item: Ruling, index: number) => (
													<RulingGrid
														key={index}
														item={item}
													/>
												))
											}
										</div>
									</MediaQuery>
								</>
								:
								<div className="rulings__items">
									{
										rulings && rulings.map((item: Ruling, index: number) => (
											<RulingGrid
												key={index}
												item={item}
											/>
										))
									}
								</div>
						}
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
