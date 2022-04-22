import React, {useState} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { BiDislike, BiLike } from 'react-icons/bi';
import {Ruling} from 'interfaces';
import RulingsServices from 'services/rulingsService';

export interface RulingGridProps {
  item: Ruling
}

const RulingGrid:React.FC<RulingGridProps> = ({item}) => {
	const positiveData = (item.votes.positive * 100) / (item.votes.positive + item.votes.negative);
	const negativeData = (item.votes.negative * 100) / (item.votes.positive + item.votes.negative);

	const [positive, setPositive] = useState(positiveData);
	const [negative, setNegative] = useState(negativeData);
	const [activeLike, setActiveLike] = useState(false);
	const [activeDisLike, setActiveDisLike] = useState(false);
	const [labelButton, setLabelButton] = useState("Vote Now");
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [copy, setCopy] = useState(false);


	const handleLike = () => {
		setPositive(positive + 1);
		setActiveLike(true);
		setActiveDisLike(false);
		setButtonDisabled(false);
	};

	const handleDiskLike = () => {
		setNegative(negative + 1);
		setActiveDisLike(true);
		setActiveLike(false);
		setButtonDisabled(false);
	};

	const handleSendVotes = async () => {
		const data = {
			votes: {
				positive: positive.toFixed(1),
				negative: negative.toFixed(1)
			}
		};
		try {
			await RulingsServices.editRuling(item._id, data);
			setLabelButton("Vote Again");
			setCopy(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="rulings__item">
			<img src={require(`../../assets/img/${item.picture}`)} alt="kanye" className="rulings__thumb"/>
			<div className="rulings__content">
				<div className="rulings__famous">
					<div className={`rulings__like like-title ${positive > negative ? 'like' : 'dislike'}`}>
						{
							positive > negative ? <BiLike size={20}/> : <BiDislike size={20}/>
						}
					</div>
					<h2>{item.name}</h2>
				</div>
				<div className="rulings__description">
					<p>{item.description}</p>
				</div>
				<div className="rulings__date">
					{
						copy
							? <p>Thank you for your vote!</p>
							: <p><Moment fromNow ago>{item.updatedAt}</Moment> in {item.category}</p>
					}
				</div>
				<div className="rulings__votes">
					<div className={`rulings__like like ${activeLike && 'is-active'}`} onClick={handleLike}>
						<BiLike size={20}/>
					</div>
					<div className={`rulings__like dislike ${activeDisLike && 'is-active'}`} onClick={handleDiskLike}>
						<BiDislike size={20}/>
					</div>
					<button type="button" className="rulings__button" onClick={handleSendVotes} disabled={buttonDisabled}>{labelButton}</button>
				</div>
				<div className="rulings__points">
					<div className="rulings__positives" style={{width: `${positive}%`}}>
						<BiLike size={20}/>
						<p>{(positive).toFixed(1)}%</p>
					</div>
					<div className="rulings__negatives" style={{width: `${negative}%`}}>
						<p>{(negative).toFixed(1)}%</p>
						<BiDislike size={20}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RulingGrid;
