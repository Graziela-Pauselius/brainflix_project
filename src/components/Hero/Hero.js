import "./Hero.scss";

const Hero = ({ videoDataDetails }) => {
	if (videoDataDetails === null) {
		<h1>Loading...</h1>;
	}

	let currentVideoPlayer = videoDataDetails;

	return (
		<section className="video__container">
			<video className="video" poster={currentVideoPlayer.image} controls>
				<source src={currentVideoPlayer.video} />
			</video>
		</section>
	);
};

export default Hero;
