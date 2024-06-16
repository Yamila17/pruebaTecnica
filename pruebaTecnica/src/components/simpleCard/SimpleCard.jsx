import React from "react";
import "./simplecard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

const SimpleCard = ({ applicationNumber, brandName, sponsorName }) => {
  console.log('esto es applicationNumber :' + applicationNumber)
  return (

      <Card elevation={5}  sx={{ mt: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Marca:
          </Typography>
          <Typography component="div">
            {brandName}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Patrocinador:
          </Typography>
          <Typography component="div">
            {sponsorName}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/drug/${applicationNumber}`}>
          <Button size="small">Ver más</Button>
        </Link>
        </CardActions>
      </Card>
  );
};

export default SimpleCard;
