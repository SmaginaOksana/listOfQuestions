import { useAppDispatch } from "@app/providers/store/hooks";
import { resetState } from "../../model/filtersSlice";
import Input from "@shared/ui/Input/Input";
import search_icon from "@shared/assets/search_icon.svg";

import "@features/filter/filter-questions/ui/SearchInput/SearchInput.scss";

function SearchInput({ value, onChange, onClick, ...props }) {
  const dispatch = useAppDispatch();

  return (
    <div className="searchInput">
      <button disabled={!value}>
        <img
          src={search_icon}
          alt="search"
          onClick={() => {
            dispatch(resetState());
            onClick();
          }}
        />
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
