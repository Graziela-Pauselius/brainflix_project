import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../Button/Button";

import "./UploadVideo.scss";

const UploadVideo = () => {
	const [videosList, setVideosList] = useState([]);

	const formRef = useRef();
	let navigate = useNavigate();

	// Get Post Data
	useEffect(() => {
		const getPostData = async () => {
			try {
				const response = await axios.get("http://localhost:8080/videos");

				const videoListData = await response.data.data.videos;
				setVideosList(videoListData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getPostData();
	}, []);

	//------- NewVideo Handler ----------
	const addNewVideo = (e) => {
		e.preventDefault();
		let newVideo = {
			title: formRef.current.title.value,
			description: formRef.current.description.value,
		};

		axios
			.post("http://localhost:8080/videos", newVideo)
			.then((res) => {
				setVideosList([...videosList, newVideo]);
			})
			.catch((err) => console.log(err));
		// setVideosList([...videosList, newVideo]);
		alert("Thank you for your submition! Your video was posted sucessfully!");
		navigate("/");
	};

	return (
		<section className="upload">
			<h1 className="upload__title">Upload Video</h1>
			<form className="upload__form" onSubmit={addNewVideo} ref={formRef}>
				<div className="upload__img-container">
					<h2 className="upload__label">VIDEO THUBNAIL</h2>
					<img
						className="upload__img"
						src="http://localhost:8080/upload.jpg"
						alt="upload"
					/>
				</div>
				<div className="upload__input-container">
					<label className="upload__label">TITLE YOUR VIDEO</label>
					<input
						type="text"
						className="upload__input"
						placeholder="Add a title to your video"
						name="title"
					/>
					<label className="upload__label">ADD A VIDEO DESCRIPTION</label>
					<textarea
						className="upload__textarea"
						placeholder="Add a description to your video"
						name="description"
					></textarea>
				</div>
				<div className="upload__btn-container">
					<Button className="upload__btn" buttonType={"publish"}>
						PUBLISH
					</Button>
					<Button buttonType={"inverted"} className="upload__btn">
						CANCEL
					</Button>
				</div>
			</form>
		</section>
	);
};

export default UploadVideo;
