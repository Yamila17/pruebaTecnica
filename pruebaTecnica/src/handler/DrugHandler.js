import DrugService from "../services/DrugService";


export const DrugHandler = {
    async getAllDrugs() {
        let drugs = await DrugService.searchDrugs()
        return drugs;
    },
    async getDrugByapplicationNumber(applicationNumber){
        let drugDetail = await DrugService.getDrugByApplicationNumber(applicationNumber)
        return drugDetail;
    }
}
