import React from "react";
import { useSearch } from "../context/SearchContext";
import SimpleCard from "../components/simpleCard/SimpleCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavbarCustom from "../components/navbarCustom/NavbarCustom";

const CustomContainerCards = styled(Container)({
  marginTop: "50px",
});

const LayoutHome = () => {
  const { searchResults } = useSearch();

  return (
    <>
      <NavbarCustom />
      <CustomContainerCards maxWidth="xl">
        <Grid container spacing={3}>
          {searchResults.length > 0 &&
            searchResults.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <SimpleCard
                  applicationNumber={item.applicationNumber}
                  brandName={item.brandName}
                  sponsorName={item.sponsorName}
                />
              </Grid>
            ))}
        </Grid>
      </CustomContainerCards>
    </>
  );
};

export default LayoutHome;
