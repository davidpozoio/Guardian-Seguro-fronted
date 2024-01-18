import { ChangeEventHandler } from "react";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import "./searchBar.styles.css";
interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="search-container">
      <input
        className="input"
        placeholder="Busca un tipo de alerta"
        type="text"
        onChange={onChange}
      />
      <button className="search-button">
        <SearchIcon />
      </button>
    </div>
  );
};
export default SearchBar;
