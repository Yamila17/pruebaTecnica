import axios from "axios";

const DrugService = {
  searchDrugs: async (searchTerm) => {
    const searchTermEncoded = encodeURIComponent(
      `products.brand_name:"${encodeURIComponent(searchTerm)}"`
    );

    try {
      const response = await axios.get(
        "https://api.fda.gov/drug/drugsfda.json",
        {
          params: {
            search: searchTermEncoded,
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
      console.error("Error fetching data:", error);
      return [];
    }
  },

  getDrugByApplicationNumber: async (applicationNumber) => {
    const applicationNumberEncoded = encodeURIComponent(
      `application_number:"${encodeURIComponent(applicationNumber)}"`
    );

    try {
      const response = await axios.get(
        "https://api.fda.gov/drug/drugsfda.json",
        {
          params: {
            search: applicationNumberEncoded,
            limit: 1,
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
        return response.data.results[0];
      } else {
        console.error('La respuesta no contiene la propiedad "results"');
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

};

export default DrugService;
