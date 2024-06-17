import React,{ useState }from 'react'
import { useSearch } from '../context/SearchContext';
import SearchBar from './../components/searchbar/SearchBar'
import SimpleCard from '../components/simpleCard/SimpleCard'
import Grid from '@mui/material/Grid';
import {  Typography,Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const CustomContainer = styled(Container)({
  marginTop: '40px',
});

const CustomContainerCards = styled(Container)({
  marginTop: '50px',
});

const LayoutHome = () => {
  const { searchResults } = useSearch();


  return (
    <>
   
     <CustomContainer maxWidth="xl">
      <Grid container >
        <Grid item xs={3}  >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        ¡Farmacity Info!
        </Typography>
        </Grid>
        <Grid item xs={9} >
        <SearchBar searchResults={searchResults.length > 0} />
        </Grid>
      </Grid>
      </CustomContainer>
      
      <CustomContainerCards maxWidth="xxl">
        <Grid container spacing={3}>
          {searchResults.length > 0 && searchResults.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}key={index} just>
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
  )
}

export default LayoutHome
