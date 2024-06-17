import React from "react";
import "./simplecard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Container, Grid } from "@mui/material";
import { CardHeader } from "react-bootstrap";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import drugImage from "./../../assets/img/drug.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SimpleCard = ({ applicationNumber, brandName, sponsorName }) => {
  return (
    <Card elevation={5} sx={{ mt: 2, maxWidth: "80%", margin: "auto" , padding: 1}}>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <CardHeader>
              <CardMedia
                component="img"
                height="194"
                image={drugImage}
                alt="Paella dish"
              />
            </CardHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 15, fontWeight: "medium" }}
              gutterBottom
            >
              {brandName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {sponsorName}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <button className="custom-button" >VER MÁS
          <ArrowForwardIosIcon fontSize="0.5em"/>
      </button>
      </Container>
    </Card>
  );
};

export default SimpleCard;
