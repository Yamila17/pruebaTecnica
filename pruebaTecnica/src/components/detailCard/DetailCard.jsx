import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detailcard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DrugHandler } from "../../handler/DrugHandler";
import OpenFDA from "../../models/OpenFDA";
import Submission from "../../models/Submission";
import Product from "../../models/Product";
import DrugDetail from "../../models/DrugDetail";

const DetailCard = () => {
  const { applicationNumber } = useParams();
  const [drugDetail, setDrugDetail] = useState({});

  useEffect(() => {
    const fetchDrugInfo = async () => {
      try {
        const results = await DrugHandler.getDrugByapplicationNumber(
          applicationNumber
        );
        console.log("datos  traidos de data:", results);

        const openFda = new OpenFDA(
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
            results[0].openfda.unii || "");

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
          return new Product(
            product.product_number,
            product.reference_drug,
            product.brand_name,
            product.active_ingredients,
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
      <Card elevation={5} sx={{ mt: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Marca:
          </Typography>
          <Typography component="div">
            {drugDetail.openfda?.genericName}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Patrocinador:
          </Typography>
          <Typography component="div">
            {drugDetail.openfda?.brandName}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Nombre genérico:
          </Typography>
          <Typography component="div">{applicationNumber}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailCard;
