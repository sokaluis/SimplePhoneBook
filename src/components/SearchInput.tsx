/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
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
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
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
