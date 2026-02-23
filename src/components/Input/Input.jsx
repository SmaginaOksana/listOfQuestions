import search_icon from "../../assets/search_icon.svg";

import "./Input.scss";

function BaseInput(props) {
  return <input {...props} />;
}

function SearchInput({ value, onChange, onClick, ...props }) {
  return (
    <div className="inputField">
      <button disabled={!value}>
        <img src={search_icon} alt="search" onClick={onClick} />
      </button>
      <BaseInput
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
