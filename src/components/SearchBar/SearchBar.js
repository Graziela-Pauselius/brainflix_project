import SearchIcon from "../../assets/icons/search.svg";
import "./SearchBar.scss";

const SearchBar = () => {
	return (
		<div className="searchBar">
			<img className="searchBar__img" src={SearchIcon} alt="search-icon" />
			<input className="searchBar__input" placeholder="Search" />
		</div>
	);
};

export default SearchBar;
