import React, { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Drug from "../../models/Drug";
import DrugActiveIngredient from "../../models/DrugActiveIngredient";
import { DrugHandler } from "../../handler/DrugHandler";
import {CustomSweetAlertError} from './../components/alertComponent/AlertComponent'

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "& .MuiInputBase-input": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },
}));

const SearchBar = () => {
  const { setSearchResults } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    setSearchResults([]);
    if (!searchTerm.trim()) {
      CustomSweetAlertError('No se ingresó ningun término de búsqueda');
      return;
    }
    try {
      const data = await DrugHandler.getAllDrugs(searchTerm);
      const drugsArray = [];

      const transformedResults = data.map((item) => {
        const applicationNumber = item.application_number;
        const sponsorName = item.sponsor_name;
        const brandName = item.products?.[0]?.brand_name || "";
        const route = item.products?.[0]?.route || "";
        const dosageForm = item.products?.[0]?.dosage_form;
        const ingredients = new DrugActiveIngredient(
          item.products[0].active_ingredients[0].name,
          item.products[0].active_ingredients[0].strength
        );
        const drug = new Drug(
          applicationNumber,
          sponsorName,
          brandName,
          ingredients,
          dosageForm,
          route
        );
        drugsArray.push(drug);
      });

      setSearchResults(drugsArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = () => {
    setSearchTerm("");
    setResults([]);
  };
  return (
    <>
      <CustomTextField
        className="my-custom-textfield"
        label="Buscar principio activo"
        placeholder="busca un principio activo.."
        variant="outlined"
        fullWidth
        size="small"
        value={searchTerm}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label="clear">
                <ClearIcon onClick={() => handleDelete()} />
              </IconButton>
              <IconButton edge="end" aria-label="search">
                <SearchIcon onClick={() => handleSearch()} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (!e.target.value.trim()) {
            setResults([]);
          }
        }}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default SearchBar;
