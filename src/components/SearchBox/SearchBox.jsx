import s from "./SearchBox.module.css";

const SearchBox = ({ onChange }) => {
  return (
    <>
      <div className={s.search}>
        <p className={s.search_p}>Find contacts by name</p>
        <input className={s.input} type="text" onChange={onChange} />
      </div>
    </>
  );
};

export default SearchBox;
