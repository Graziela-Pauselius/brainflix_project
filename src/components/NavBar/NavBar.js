import Button from "../Button/Button";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
	return (
		<nav className="navBar">
			<div className="navBar__logo-container">
				<Link to="/">
					<img
						src={require("../../assets/logo/BrainFlix-logo.svg").default}
						alt="brainflix-logo"
						className="navBar__logo"
					/>
				</Link>
			</div>
			<div className="navBar__container">
				<input
					className="navBar__searchBar"
					type={"search"}
					placeholder="Search"
				/>
				<img
					className="navBar__avatar"
					src={require("../../assets/images/Mohan-muruge.jpg")}
					alt="avatar"
				/>
				<Link to="/upload" className="navBar__btn-link">
					<Button buttonIcon="upload" className="navBar__btn">
						UPLOAD
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
