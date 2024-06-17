import axios from "axios";
import {CustomSweetAlertError} from './../components/alertComponent/AlertComponent'

const DrugService = {
  searchDrugByActiveIngredient: async (searchTerm) => {
    const searchTermEncoded = encodeURIComponent(searchTerm);

    try {
      const response = await axios.get(
        "https://api.fda.gov/drug/drugsfda.json",
        {
          params: {
            search: `products.active_ingredients.name:"${searchTermEncoded}"`,
            limit: 50,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response.data &&
        response.data.results &&
        Array.isArray(response.data.results)
      ) {
        return response.data.results;
      } else {
        console.error('La respuesta no contiene la propiedad "results"');
        return [];
      }
    } catch (error) {
      CustomSweetAlertError('No se encontraron principios activos con ese nombre.');
      return [];
    }
  },

  searchDrugByBrandName: async (brandName) => {
    const searchTermEncoded = encodeURIComponent(brandName);

    try {
      const response = await axios.get(
        "https://api.fda.gov/drug/drugsfda.json",
        {
          params: {
            search: `products.brand_name:"${searchTermEncoded}"`,
            limit: 50,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response.data &&
        response.data.results &&
        Array.isArray(response.data.results)
      ) {
        return response.data.results;
      } else {
        console.error('La respuesta no contiene la propiedad "results"');
        return [];
      }
    } catch (error) {
      CustomSweetAlertError('No se encontró ese nombre comercial.');
      return [];
    }
  },

  getDrugByApplicationNumber: async (applicationNumber) => {
    const applicationNumberEncoded = encodeURIComponent(applicationNumber);

    try {
      const response = await axios.get(
        "https://api.fda.gov/drug/drugsfda.json",
        {
          params: {
            search: `application_number:"${applicationNumberEncoded}"`,
            limit: 1,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.results && Array.isArray(response.data.results)) {
        return response.data.results;
      } else {
        console.error('La respuesta no contiene la propiedad "results" o no es un array');
        return null;
      }
    } catch (error) {
      console.error("Error occurred:", error)
      CustomSweetAlertError('no se encuentra ninguna coincidencia');
      return null;
    }
  }
};

export default DrugService;
