import React from 'react';

import { BiDislike, BiLike } from 'react-icons/bi';
import kanye from 'assets/img/kanye.png';
import {Ruling} from 'interfaces';

export interface RulingGridProps {
  item: Ruling
}

const RulingGrid:React.FC<RulingGridProps> = ({item}) => {
	return (
		<div className="rulings__item">
			<img src={kanye} alt="kanye" className="rulings__thumb"/>
			<div className="rulings__content">
				<div className="rulings__famous">
					<div className="rulings__like like-title like">
						<BiLike size={20}/>
					</div>
					<h2>{item.name}</h2>
				</div>
				<div className="rulings__description">
					<p>{item.description}</p>
				</div>
				<div className="rulings__date">
					<p>{item.lastUpdated} in {item.category}</p>
				</div>
				<div className="rulings__votes">
					<div className="rulings__like like">
						<BiLike size={20}/>
					</div>
					<div className="rulings__like dislike">
						<BiDislike size={20}/>
					</div>
					<button type="button" className="rulings__button">Vote Now</button>
				</div>
				<div className="rulings__points">
					<div className="rulings__positives" style={{width: `${item.votes.positive * 100 / 100 * 50}%`}}>
						<BiLike size={20}/>
						<p>{item.votes.positive}%</p>
					</div>
					<div className="rulings__negatives" style={{width: `${item.votes.negative * 100 / 100 * 50}%`}}>
						<p>{item.votes.positive}%</p>
						<BiDislike size={20}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RulingGrid;
