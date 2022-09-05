import { Link } from "react-router-dom";

import NextVideoCard from "../NextVideoCard/NextVideoCard";

import "./NextVideos.scss";

const NextVideos = ({ videoList, videoUrlId }) => {
	if (videoUrlId === undefined || videoList === undefined) {
		<h1>Loading...</h1>;
	}

	const checkId = videoList.filter((video) => video.id !== videoUrlId);

	return (
		<section className="next-videos">
			<h3 className="next-videos__title">NEXT VIDEOS</h3>
			<div className="next-videos__container">
				{checkId.map((content, i) => (
					<Link
						key={i}
						to={`/videos/${content.id}`}
						className="next-videos__link"
					>
						<NextVideoCard content={content} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default NextVideos;
