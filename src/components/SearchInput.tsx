/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useDebounceValue } from "../hooks/useDebounceValue";

interface Props {
  onDebounce: (value: string) => void;
}

const SearchInput = ({ onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");
  const { debounceValue } = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debounceValue);
  }, [debounceValue]);

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl variant="filled" sx={{ width: "100%" }}>
        <OutlinedInput
          fullWidth
          type="text"
          startAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
          placeholder="Search..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
      </FormControl>
    </Box>
  );
};

export default SearchInput;
