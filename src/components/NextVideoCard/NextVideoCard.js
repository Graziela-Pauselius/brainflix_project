import "./NextVideoCard.scss";

const NextVideoCard = ({ content }) => {
	return (
		<div className="next-video-card__container">
			<img className="next-video-card__img" src={content.image} alt="video" />
			<div className="next-video-card__info-container">
				<h4 className="next-video-card__title">{content.title}</h4>
				<span className="next-video-card__channel">{content.channel}</span>
			</div>
		</div>
	);
};

export default NextVideoCard;
