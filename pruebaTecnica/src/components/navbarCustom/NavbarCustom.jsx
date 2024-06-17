import React from "react";
import "./navbarCustom.css";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import { Container } from "@mui/material";
import { useSearch } from "../../context/SearchContext";
import { styled } from "@mui/material/styles";
import SearchBar from "./../searchbar/SearchBar";
import SearchBarBrandName from "./../searchbarBrandName/SearchBarBrandName";
import IconDrug from "./../../assets/icon/logoDrug1.svg";

const CustomContainer = styled(Container)({
  marginTop: "40px",
});

const DruugleIcon = () => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  if (matchesXS) {
    return null;
  }
  return (
    <img
      src={IconDrug}
      alt="Druugle Icon"
      style={{
        width: "50%",
        height: "100px",
        display: "block",
      }}
    />
  );
};
const NavbarCustom = () => {
  const { searchResults } = useSearch();
  return (
    <CustomContainer
      maxWidth="xl"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={2}>
          <DruugleIcon />
        </Grid>
        <Grid item xs={5}>
          <SearchBarBrandName searchResults={searchResults.length > 0} />
        </Grid>
        <Grid item xs={5}>
          <SearchBar searchResults={searchResults.length > 0} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default NavbarCustom;
