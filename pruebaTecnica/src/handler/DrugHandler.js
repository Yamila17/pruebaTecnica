import DrugService from "../services/DrugService";


export const DrugHandler = {
    async searchDrugByActiveIngredient(searchTerm) {
        let drugs = await DrugService.searchDrugByActiveIngredient(searchTerm)
        return drugs;
    },
    async getDrugByapplicationNumber(applicationNumber){
        let drugDetail = await DrugService.getDrugByApplicationNumber(applicationNumber)
        return drugDetail;
    },
    
    async searchDrugByBrandName(brandName){
        let drugDetail = await DrugService.searchDrugByBrandName(brandName)
        return drugDetail;
    }
}
