import { Product } from "./ProductDataType"
import { Service } from "./ServiceDataType"

export type FormBudgetDataType = {
    myCompany: String,
    myCnpj:String,
    myAddress: String,
    myCellPhone: String,
    myEmail: String,
    seller: String,
    numberBudget: Number,
    dateIssue: String,
    textBudget: String,
    delivary: String,
    costumerCompanyName: String,
    costumerName: String,
    inTheCareOf: String,
    costumerAddress: String,
    costumerCity: String,
    costumerCpfOrCnpj: String,
    costumerZipCode: String,
    costumerState: String,
    email: String,
    product: Product[],
    service: Service[],
    dueDate: String,
    totalPriceBudget: Number,
    formToPayment: String,
    obsBudget: string
}