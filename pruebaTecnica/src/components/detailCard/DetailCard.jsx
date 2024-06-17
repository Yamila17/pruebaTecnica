import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detailcard.css";
import { DrugHandler } from "../../handler/DrugHandler";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import drugImage from "./../../assets/img/drug.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import OpenFDA from "../../models/OpenFDA";
import Submission from "../../models/Submission";
import Product from "../../models/Product";
import DrugDetail from "../../models/DrugDetail";
import TableSubmissions from "../tableSubmissions/TableSubmissions";
import TableProduct from "../tableProduct/TableProduct";
import DrugActiveIngredient from "../../models/DrugActiveIngredient";
import { CardMedia } from "@mui/material";

const DetailCard = () => {
  const { applicationNumber } = useParams();
  const openFda = {};
  const [drugDetail, setDrugDetail] = useState({});

  useEffect(() => {
    const fetchDrugInfo = async () => {
      try {
        const results = await DrugHandler.getDrugByapplicationNumber(
          applicationNumber
        );
        console.log("datos  traidos de data:", results);

        if (results[0].openfda) {
          openFda = new OpenFDA(
            results[0].application_number,
            results[0].openfda.brand_name || "",
            results[0].openfda.generic_name || "",
            results[0].openfda.manufacturer_name || "",
            results[0].openfda.product_ndc,
            results[0].openfda.product_type || "",
            results[0].openfda.route || "",
            results[0].openfda.substance_name || "",
            results[0].openfda.rxcui,
            results[0].openfda.spl_id || "",
            results[0].openfda.spl_set_id || "",
            results[0].openfda.package_ndc,
            results[0].openfda.nui,
            results[0].openfda.pharm_class_moa,
            results[0].openfda.pharm_class_cs,
            results[0].openfda.unii || ""
          );
        }

        const submissionsArray = results[0].submissions.map((submission) => {
          return new Submission(
            submission.submission_type,
            submission.submission_number,
            submission.submission_status,
            submission.submission_status_date,
            submission.review_priority,
            submission.submission_class_code,
            submission.submission_class_code_description,
            submission.application_docs || []
          );
        });
        console.log("Submissions:", submissionsArray);

        const productsArray = results[0].products.map((product) => {
          const activeIngredient = new DrugActiveIngredient(
            product.active_ingredients[0].name,
            product.active_ingredients[0].strength
          );

          return new Product(
            product.product_number,
            product.reference_drug,
            product.brand_name,
            activeIngredient,
            product.reference_standard,
            product.dosage_form,
            product.route,
            product.marketing_status
          );
        });
        const sponsorName = results[0].sponsor_name;
        console.log("Productos:", productsArray);

        const drugDetail = new DrugDetail(
          applicationNumber,
          sponsorName,
          submissionsArray,
          openFda,
          productsArray
        );
        setDrugDetail(drugDetail);

        console.log("esto es drugdetail" + drugDetail);
      } catch (error) {
        console.error("Error al traer la informacion :", error);
      }
    };

    fetchDrugInfo();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{ display: "flex", justifyContent: "end" }}>
          <Grid item sx={2}>
            <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
              <button className="custom-button">VOLVER A HOME</button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ mt: 4, display: "flex", justifyContent: "start" }}
        >
          <Grid item sx={{ mt: 4, display: "flex", justifyContent: "start" }}>
            <Card sx={{ maWidth: 275 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={drugImage}
                      alt="Paella dish"
                      sx={{ width: "100%", overflow: "hidden" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Box sx={{ p: 2 }}>
                      <Typography sx={{ mb: 1.5 }}>
                        Patrocinador : {drugDetail.sponsorName}
                      </Typography>
                      <Typography>
                        Número de serie :{drugDetail.applicationNumber}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            mt: "50px",
            mb: "50px",
            display: "flex",
            justifyContent: "center",
          }}
          spacing={2}
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sx={{ mb: "10px", display: "flex", justifyContent: "center" }}
          >
            <TableSubmissions submissions={drugDetail.submissions} />
          </Grid>
          <Grid item xs={12}>
            <TableProduct products={drugDetail.products} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailCard;
