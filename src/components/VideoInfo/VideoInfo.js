import "./VideoInfo.scss";

const VideoInfo = ({ videoDataDetails, dateFormated }) => {
	if (videoDataDetails === null || dateFormated === null) {
		<h1>Loading...</h1>;
	}

	let currentVideoDetails = videoDataDetails;

	return (
		<section className="video__info-section">
			<h1 className="video__title">{currentVideoDetails.title}</h1>
			<div className="video__info">
				<div className="video__info-container">
					<span className="video__text--bold">
						By {currentVideoDetails.channel}
					</span>
					<span className="video__timestamp">
						{dateFormated(currentVideoDetails.timestamp)}
					</span>
				</div>
				<div className="video__info-container">
					<div className="video__icon-container">
						<img
							className="video__icon"
							src={require("../../assets/icons/views.svg").default}
							alt="views-icon"
						/>
						<span className="video__text">{currentVideoDetails.views}</span>
					</div>
					<div className="video__icon-container">
						<img
							className="video__icon"
							src={require("../../assets/icons/likes.svg").default}
							alt="like-icon"
						/>
						<span className="video__text">{currentVideoDetails.likes}</span>
					</div>
				</div>
			</div>
			<p className="video__description">{currentVideoDetails.description}</p>
		</section>
	);
};

export default VideoInfo;
