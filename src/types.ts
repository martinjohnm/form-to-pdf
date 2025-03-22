


export interface InfoType {
    seller_address : string 
    seller_name : string 
    seller_phone : string 
    seller_abn : string
}



export interface BankInfoType {
    bank_ac_name : string 
    bank_bsb : string,
    bank_ac_number : string
}



export interface CustomerInfoType {
    customer_name : string 
    customer_address : string
    customer_phone : string
    customer_abn : string
}


export interface InvoiceType {
    invoiceNumber : string 
    invoiceDate : string 
    poNumber : string 
}



export type TableRowType =   {
    id: number,
    description : string,
    item : string,
    price: number,
    quantity : number,
    unit : string,
    subtotal : number
  };

export type SinglTableRowType =   {
    id: number,
    description : string,
    item : string,
    price: number,
    quantity : number,
    unit : string,
    subtotal : number
};

export type InvoiceTypeToChange = "invoiceNumber" | "invoiceDate" | "poNumber"


export type CustomerInfoTypeToEdit = "customer_name" | "customer_address" | "customer_phone" | "customer_abn"