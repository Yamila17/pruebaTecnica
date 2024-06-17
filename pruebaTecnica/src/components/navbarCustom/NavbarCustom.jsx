import React from "react";
import "./navbarCustom.css";
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from "@mui/material";
import { Typography, Container, SvgIcon } from "@mui/material";
import { useSearch } from "../../context/SearchContext";
import { styled } from "@mui/material/styles";
import SearchBar from './../searchbar/SearchBar';
import Hidden from '@mui/material/Hidden';
import IconDrug from './../../assets/icon/logoDrug1.svg';

const CustomContainer = styled(Container)({
  marginTop: "40px",
});

const DruugleIcon = () => {
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    if (matchesXS) {
        return null; // No renderizar nada en dispositivos XS
      }
      return (
        <img
          src={IconDrug}
          alt="Druugle Icon"
          style={{
            width: '50%', // Ancho de la imagen en otros tamaños de pantalla
            height: '100px', // Altura fija de la imagen
            display: 'block', // Mostrar la imagen
          }}
        />
      );
    };
const NavbarCustom = () => {
  const { searchResults } = useSearch();
  return (
    <CustomContainer maxWidth="xl"  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Grid container  spacing={1} alignItems="center" justifyContent="space-between">
        <Grid item xs={3}   >
        <DruugleIcon />
        </Grid>
        {/* <Grid item xs={2}>
          <Typography  variant="overline" gutterBottom>
               INTRODUCE EL PRINCIPIO ACTIVO
          </Typography>
        </Grid> */}
        <Grid item xs={7}>
          <SearchBar searchResults={searchResults.length > 0} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default NavbarCustom;
