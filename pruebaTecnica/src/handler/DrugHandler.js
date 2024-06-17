import DrugService from "../services/DrugService";


export const DrugHandler = {
    async getAllDrugs(searchTerm) {
        let drugs = await DrugService.searchDrugs(searchTerm)
        return drugs;
    },
    async getDrugByapplicationNumber(applicationNumber){
        let drugDetail = await DrugService.getDrugByApplicationNumber(applicationNumber)
        return drugDetail;
    }
}
