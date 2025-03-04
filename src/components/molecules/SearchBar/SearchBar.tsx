import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <Input
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
