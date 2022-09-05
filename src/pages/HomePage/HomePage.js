import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Comments from "../../components/Comments/Comments";
import Hero from "../../components/Hero/Hero";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoInfo from "../../components/VideoInfo/VideoInfo";

import "./HomePage.scss";

const API_URL = process.env.REACT_APP_API_URL;

const HomePage = () => {
	const [currentVideo, setCurrentVideo] = useState(null);
	const [videoDataDetails, setVideoDataDetails] = useState({});
	const [videoList, setVideoList] = useState(null);

	const { videoId } = useParams();

	//-------- Get the first Video List data ---------
	useEffect(() => {
		const getVideoListData = async () => {
			try {
				const response = await axios.get(`${API_URL}/videos`);

				const videoIdData = await response.data.data.videos[0].id;
				setCurrentVideo(videoIdData);

				const videoListData = await response.data.data.videos;
				setVideoList(videoListData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getVideoListData();
	}, [currentVideo]);

	//--------- Get the Video Details data --------
	const videoUrlId = videoId ? videoId : currentVideo;

	useEffect(() => {
		const getVideoDetailsData = async () => {
			try {
				const response = await axios.get(`${API_URL}/videos/${videoUrlId}`);

				const data = await response.data.data.video;
				setVideoDataDetails(data);
			} catch (error) {
				console.log(error.message);
			}
		};

		getVideoDetailsData();
	}, [currentVideo, videoId]);

	// ------ Date formated function --------------
	const dateFormated = (timestamp) => {
		let date = new Date(timestamp);
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		if (day < 10) day = "0" + day;
		if (month < 10) month = "0" + month;

		return day + "/" + month + "/" + year;
	};

	if (
		videoDataDetails === null ||
		videoDataDetails === undefined ||
		videoList === null ||
		videoList === undefined ||
		currentVideo === null ||
		currentVideo === undefined
	) {
		return <h1>Loading...</h1>;
	}

	return (
		<main>
			<Hero videoDataDetails={videoDataDetails} />
			<div className="content">
				<div className="content__central">
					<VideoInfo
						videoDataDetails={videoDataDetails}
						dateFormated={dateFormated}
						videoId={videoId}
					/>
					<Comments
						videoDataDetails={videoDataDetails}
						dateFormated={dateFormated}
					/>
				</div>
				<div className="content__sideBar">
					<NextVideos videoList={videoList} videoUrlId={videoUrlId} />
				</div>
			</div>
		</main>
	);
};

export default HomePage;
