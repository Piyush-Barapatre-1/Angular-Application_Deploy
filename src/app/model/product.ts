import { Supplier } from "./supplier"

export class Product {

    id:string
    productName:string
    manufacturerName:string
    availableQty:number
    reorderLevel:string
    color:string
    details:string
    supplier:Supplier
}
