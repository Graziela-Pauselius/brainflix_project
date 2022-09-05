import Button from "../Button/Button";
import "./Form.scss";

const Form = () => {
	return (
		<section className="form__section">
			<img
				className="form__avatar"
				src={require("../../assets/images/Mohan-muruge.jpg")}
				alt="avatar"
			/>

			<form className="form">
				<div className="form__input-container">
					<label className="form__title">JOIN THE CONVERSATION</label>
					<textarea
						className="form__textarea"
						placeholder="Add a new comment"
					></textarea>
				</div>
				<Button buttonIcon="comment" className="form__btn">
					COMMENT
				</Button>
			</form>
		</section>
	);
};

export default Form;
