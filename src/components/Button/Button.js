import "./Button.scss";

// Button Classes
const BUTTON_TYPE_CLASSES = {
	upload: "upload",
	comment: "comment",
	inverted: "inverted",
	publish: "publish",
};

// Create reuseble button
const Button = ({ children, buttonType }) => {
	return (
		<button className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}>
			{children}
		</button>
	);
};

export default Button;
