import DrugService from "../services/DrugService";


export const DrugHandler = {
    async getAllDrugs() {
        let drugs = await DrugService.searchDrugs()
        return drugs;
    },
    async getDrugByapplicationNumber(){
        let aplicationNumber = await DrugService.getDrugByApplicationNumber()
        return aplicationNumber;
    }
}
