import CommentCard from "../CommentCard/CommentCard";
import Form from "../Form/Form";

import "./Comments.scss";

const Comments = ({ videoDataDetails, dateFormated }) => {
	if (videoDataDetails === null || dateFormated === null) {
		return <h1>Loading...</h1>;
	}

	let commentsArray = videoDataDetails.comments;

	return (
		<section className="comments">
			<h3 className="comments__title">3 comments</h3>
			<Form />
			<div className="comments__cards">
				{commentsArray?.map((comment, i) => (
					<CommentCard comment={comment} key={i} dateFormated={dateFormated} />
				))}
			</div>
		</section>
	);
};

export default Comments;
