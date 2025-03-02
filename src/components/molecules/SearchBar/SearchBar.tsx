import React from "react";
import styles from "./SearchBar.module.scss";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  return (
    <div className={styles.searchBar}>
      <Input
        placeholder="Search Tasks ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        variant="primary"
        size="medium"
        onClick={() => console.log("clicked")}
        text="Search"
        type="button"
        disabled={false}
      />
    </div>
  );
};

export default SearchBar;
