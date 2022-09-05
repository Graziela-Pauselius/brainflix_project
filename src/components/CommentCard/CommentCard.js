import "./CommentCard.scss";

// Comment Card
const CommentCard = ({ comment, dateFormated }) => {
	return (
		<div className="comment__container">
			<img className="comment__avatar" />
			<div className="comment__info">
				<div className="comment__box">
					<h3 className="comment__name">{comment.name}</h3>
					<span className="comment__timestamp">
						{dateFormated(comment.timestamp)}
					</span>
				</div>
				<p className="comment__text">{comment.comment}</p>
			</div>
		</div>
	);
};

export default CommentCard;
