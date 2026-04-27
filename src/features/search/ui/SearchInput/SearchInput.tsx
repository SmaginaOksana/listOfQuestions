import Input from "@shared/ui/Input/Input";
import search_icon from "@shared/assets/search_icon.svg";
import "./SearchInput.scss";

function SearchInput({ value, onChange, onClick, ...props }) {
  return (
    <div className="searchInput">
      <button disabled={!value}>
        <img src={search_icon} alt="search" onClick={onClick} />
      </button>
      <Input
        type="text"
        placeholder="Введите запрос..."
        name="searchInput"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
