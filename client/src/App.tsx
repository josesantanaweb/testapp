import React, {useState, useEffect} from 'react';
import MediaQuery from 'react-responsive';
import Slider from "react-slick";
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

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};


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

	const onChangeView = (e: any) => {
		setView(e.target.value);
		getRulings();
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
								<select name="view" className="rulings__select" onChange={onChangeView}>
									<option value="list">List</option>
									<option value="grid">Grid</option>
								</select>
							</MediaQuery>
						</div>
						{
							view === "list"
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
										<Slider {...settings}>
											{
												rulings && rulings.map((item: Ruling, index: number) => (
													<RulingGrid
														key={index}
														item={item}
													/>
												))
											}
										</Slider>
									</MediaQuery>
								</>
								:
								<>
									<MediaQuery minWidth={769}>
										<div className="rulings__items">
											{
												rulings && rulings.map((item: Ruling, index: number) => (
													<RulingGrid
														item={item}
														key={index}
													/>
												))
											}
										</div>
									</MediaQuery>
									<MediaQuery maxWidth={768}>
										<Slider {...settings}>
											{
												rulings && rulings.map((item: Ruling, index: number) => (
													<RulingGrid
														item={item}
														key={index}
													/>
												))
											}
										</Slider>
									</MediaQuery>
								</>
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
