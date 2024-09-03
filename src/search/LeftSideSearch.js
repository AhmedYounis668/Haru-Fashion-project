import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, TextField } from "@mui/material";
const LeftSideSearch = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>Search By Categoury</div>
      <hr style={{ marginTop: "10px" }} />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Pants" />
        <FormControlLabel control={<Checkbox />} label="Shirts" />
        <FormControlLabel control={<Checkbox />} label="Men" />
        <FormControlLabel control={<Checkbox />} label="Woman" />
        <FormControlLabel control={<Checkbox />} label="Bags" />
      </FormGroup>
      <hr style={{ marginTop: "10px" }} />

      {/* brands */}
      <div style={{ textAlign: "center" }}>Search By Brands</div>
      <hr style={{ marginTop: "10px" }} />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Zara" />
        <FormControlLabel control={<Checkbox />} label="H&M" />
        <FormControlLabel control={<Checkbox />} label="Prishka" />
        <FormControlLabel control={<Checkbox />} label="Defacto" />
        <FormControlLabel control={<Checkbox />} label="Lc wakiki" />
      </FormGroup>

      {/* search by price */}
      <div style={{ textAlign: "center" }}>Search By Price</div>
      <hr style={{ marginTop: "10px" }} />
      <FormGroup>
        <TextField
          id="outlined-number"
          label="From"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="To"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          className="my-3"
        />
      </FormGroup>
    </div>
  );
};

export default LeftSideSearch;
