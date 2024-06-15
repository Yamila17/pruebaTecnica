import React, { useState } from "react";
import { Button, TextField} from "@mui/material";
import Drug from '../../models/Drug'
import DrugActiveIngredient from "../../models/DrugActiveIngredient";
import SimpleCard from "../simpleCard/SimpleCard";
import { DrugHandler } from "../../handler/DrugHandler";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setResults([]);
    if (!searchTerm.trim()) {
      console.log("No se ingresó un término de búsqueda.");
      return;
    }

    try {
      
      const data = await DrugHandler.getAllDrugs()
      const drugsArray = [];
      
      const transformedResults = data.map((item) => {
        const applicationNumber = item.application_number;
        const sponsorName = item.sponsor_name;
        const brandName = item.products?.[0]?.brand_name || "";
        const route = item.products?.[0]?.route || "";
        console.log('ESTA AQUI BRANDNAME'+brandName)
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

      setResults(drugsArray);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <TextField 
        label="Buscar principio activo"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (!e.target.value.trim()) {
            setResults([]);
          }
        }}
      />
      <Button onClick={() => handleSearch()}>Buscar</Button>
      { results.map((item, index) => (
        
        <SimpleCard
          variant="outlined"
          key={index}
          applicationNumber = {item.applicationNumber}
          brandName={item.brandName}
          sponsorName={item.sponsorName}
        />
      ))}
    </div>
  );
};

export default SearchBar;
