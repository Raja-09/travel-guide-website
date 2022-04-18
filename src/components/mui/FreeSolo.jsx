import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";

export default function FreeSolo(props) {
  const history = useHistory();
  const onSelect = (text) => {
    history.push(`/places/${text.toLowerCase()}`);
  }
  return (
    <Stack
      onClick={(e) => {
        const text = e.target.innerText;
        if(text) {
          onSelect(text);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const text = e.target.value;
          if (text) {
            onSelect(text);
          }
        }
      }}
      spacing={2}
      sx={{ width: 500 }}
    >
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={props.list.map((option) => option.name)}
        
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}
