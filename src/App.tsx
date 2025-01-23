import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";


interface TabelRow {
  description : string;
  HSN : string;
  price : string;
  qty : number;
  unit : string;
  total : number;
  id: number
}

interface Postinupts {
  invoiceNumber : string;
  invoiceDate : string | Date
  poNumber : string;
  delivey_address : string;
  customer_name : string
  cutomer_phone : string;
  customer_email : string;
  customer_abn : string;

  seller_address : string
  seller_name : string
  seller_phone : string;
  seller_email : string;
  seller_abn : string;
  
  country_of_orgin : string;
  county_of_destination : string;
  port_of_loading : string
  port_of_discharge : string
  table : TabelRow[];

  taxIdName : string;
}



function App() {

  const [postInputs, setPostInputs] = useState<Postinupts>({
    invoiceNumber : "",
    invoiceDate : "",
    poNumber : "",
    delivey_address : "",
    customer_name : "",
    cutomer_phone : "",
    customer_email : "",
    customer_abn : "",

    seller_address : "4 Savory Way Treeby WA 6164",
    seller_name : "Austrasian Traders PVY LTD",
    seller_abn : "69682452259",
    seller_email : "trinitycaanz@gmail.com",
    seller_phone : "+919496309041",
    country_of_orgin : "",
    county_of_destination : "",
    port_of_loading : "",
    port_of_discharge : "",
    table : [],
    taxIdName : "ABN"
  })

  // const countryBusinessNumbers = [
  //   { value: "EIN", label: "United States (EIN)" },
  //   { value: "BN", label: "Canada (BN)" },
  //   { value: "VAT", label: "United Kingdom (VAT)" },
  //   { value: "ABN", label: "Australia (ABN)" },
  //   { value: "GSTIN", label: "India (GSTIN)" },
  //   { value: "VAT", label: "Germany (VAT)" },
  //   { value: "SIRET", label: "France (SIRET)" },
  // ];
  
  const [row, setRow] = useState<TabelRow>({description : '', HSN : "", price : "", qty : 0, unit : "", total : 0, id : 0});

  const totalAmount = postInputs.table.reduce((sum, row) => Number(sum) + Number(row.total), 0);
  console.log(totalAmount);
  
  const [toggleOpen, setToggleOpen] = useState(false)
  const handleDownload = async () => {
    const element : any  = document.getElementById("pdf-content");
    
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjust for aspect ratio
    pdf.addImage(image, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("document.pdf");
  };

  const handleToggleButton = () => {
    setToggleOpen((c) => !c)
  }

  if (toggleOpen) {
    return  <div className={`${toggleOpen ? "block" : "hidden"}`}>
    {/* <ToggleWindow onclose={handleToggleButton} onsubmit={() => {}}/> */}
    <div className="justify-center p-4 gap-3 flex items-center">
                    <button
                    onClick={handleToggleButton}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={() => {}}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                    Submit
                    </button>
            </div>
    <div id="pdf-content" className={`text-black px-2 md:px-40 py-8`}>
          <div className="md:justify-between md:flex">
            <div className="w-full">
              <img className="h-36 w-36" src="logo11.jpeg" alt="" />
            </div>
            <div className="w-1/3 font-bold text-md">
              <div className="flex justify-center items-center font-bold text-xl">
                Invoice
              </div>
              <div className="justify-between flex gap-2">
                <div >
                  <div>
                    <p>Invoice No:</p>
                  </div>
                  <div>
                    <p>Invoice Date:</p>
                  </div>
                  <div>
                    <p>Po No:</p>
                  </div>
                </div>
                <div className="">
                  <div>
                    <input defaultValue={String(postInputs.invoiceNumber)} placeholder="invoice number" className="outline-none px-1 text-sm font-light bg-slate-300 rounded-md" type="text" onChange={(e) => {
                        setPostInputs(c =>({
                          ...c,
                          invoiceNumber : e.target.value
                        }))
                      }} />
                  </div>
                  <div>
                  <input defaultValue={String(postInputs.invoiceDate)} placeholder="invoice date" className="outline-none px-1 text-sm font-light bg-slate-300 rounded-md" type="text" onChange={(e) => {
                        setPostInputs(c =>({
                          ...c,
                          invoiceDate : e.target.value
                        }))
                      }} />
                  </div>
                  <div>
                  <input defaultValue={String(postInputs.poNumber)} placeholder="PO no" className="outline-none px-1 text-sm font-light bg-slate-300 rounded-md" type="text" onChange={(e) => {
                        setPostInputs(c =>({
                          ...c,
                          poNumber : e.target.value
                        }))
                      }} />
                  </div>

                </div>
              </div>
            </div>


          </div>
          <div className="mt-4">

          </div>
          <div className="border border-black">
              <div className="w-full">
                <div className="w-18 bg-slate-700 grid grid-cols-2 text-xl p-4">
                    <div className="text-white">
                      <p>OurInfo</p>
                    </div>

                    <div className="text-white">
                      <p>Customer</p>
                    </div>
                </div>

                <div className="p-4">
                    <div className="w-full">
                    <TableRowTitleInput left={postInputs.seller_name} placeholder={"Customer Name"} defaultVal={postInputs.customer_name} onchange={(e : any) => {
                        setPostInputs(c =>({
                          ...c,
                          customer_name : e.target.value
                        }))
                      }}/>
                      </div>
                      <div className="w-full mt-1">
                        <TableRowElementsInput left={postInputs.seller_address} placeholder={"delivery adress"} defaultVal={postInputs.delivey_address} onchange={(e : any) => {
                          setPostInputs(c => ({
                            ...c, 
                            delivey_address : e.target.value
                          }))
                        }}/>
                    </div>
                    <div className="w-full mt-1">
                      <TableRowElementsInput left={`Phone: ${postInputs.seller_phone}`} placeholder={"phone no:"} defaultVal={postInputs.cutomer_phone} onchange={(e : any) => {
                        setPostInputs(c => ({
                          ...c, 
                          cutomer_phone : e.target.value
                        }))
                      }}/>
                    </div>
                    <div className="w-full mt-1">
                      <TableRowElementsInput left={`Email: ${postInputs.seller_email}`} placeholder={"Email"} defaultVal={postInputs.customer_email} onchange={(e : any) => {
                        setPostInputs(c => ({
                          ...c, 
                          customer_email : e.target.value
                        }))
                      }}/>
                    </div>
                    <div className="w-full mt-1">
                    <TableRowElementsInputABN left={`ABN: ${postInputs.seller_abn}`} defaultTaxIdName={postInputs.taxIdName} placeholder={"ABN"} defaultVal={postInputs.customer_abn} onchange={(e : any) => {
                        setPostInputs(c => ({
                          ...c, 
                          customer_abn : e.target.value
                        }))
                      }} onchangeTaxIdName={(e: any) => {
                        setPostInputs(c => ({
                          ...c,
                          taxIdName : e.target.value
                        }))
                      }}/>
                  
                    </div>
                    
                </div>

              </div>

              <div className="w-full mt-4">

                <div className="text-xl px-4 font-bold">
                  <p>Delvery Adress:</p>
                </div>
                <div className="flex p-4">
                    <div className="text-xl grid grid-cols-2">
                      <div className="w-full">
                        <div className="w-1/2">
                          <p>ST. EUPHRASIA SYRO MALABHAR CATHLIC PARISH 5, WILLEYSTREET ELIZABETH, SA AUSTRALIA-5112</p>
                        </div>
                      </div>
                      <div className="">
                        <LocationDataInput title={"Country of origin: "} value={postInputs.country_of_orgin} onchange={(e : any) => {
                          setPostInputs(c => ({
                            ...c,
                            country_of_orgin : e.target.value
                          }))
                        }}/>
                        <LocationDataInput title={"Country of Destination: "} value={postInputs.county_of_destination} onchange={(e : any) => {
                          setPostInputs(c => ({
                            ...c,
                            county_of_destination : e.target.value
                          }))
                        }}/>
                        <LocationDataInput title={"Port of Loading: "} value={postInputs.port_of_loading} onchange={(e : any) => {
                          setPostInputs(c => ({
                            ...c,
                            port_of_loading : e.target.value
                          }))
                        }}/>
                        <LocationDataInput title={"Port of discharge: "} value={postInputs.port_of_discharge} onchange={(e : any) => {
                          setPostInputs(c => ({
                            ...c,
                            port_of_discharge : e.target.value
                          }))
                        }}/>
                        
                      </div>
                    </div>
                    <div>

                    </div>
                </div>

              </div>
          </div>

          <div className="mt-4">

          </div>

          <div>
              
              <div className="w-full border border-black">
                    <div className="flex justify-center items-center p-2">
                      <button onClick={() => {
                        setPostInputs(c => ({
                          ...c,
                          table : []
                        }))
                      }} className="px-2 bg-red-600 text-white ">Delete all rerords</button>
                    </div>
                    <div className="w-18 bg-slate-700 grid grid-cols-12 text-xl justify-center items-center">
                        <div className="text-white col-span-3 w-full h-full border-r p-4">
                          <p>Description</p>
                        </div>

                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>HSN</p>
                        </div>
                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>Price</p>
                        </div>

                        <div className="text-white col-span-1 w-full h-full border-r p-4">
                          <p>Qty</p>
                        </div>
                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>Unit</p>
                        </div>

                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>SubTotal</p>
                        </div>
                    </div>
                    {postInputs.table.map(c => (
                      <TableRow2Elements des={c.description} hsn={c.HSN} price={`AU $ ${String(c.price)}`} qty={c.qty} unit={c.unit} subtotal={`AU $ ${c.total}`}/>
                    ))}

              </div>
              <div className="w-full">
                        <TableRow2ElementsInput onchangeDes={(e : any) => {
                          setRow(c => ({
                            ...c,
                            description : e.target.value
                          }))
                        }} 
                        onchangeHSN={(e : any) => {
                          setRow(c => ({
                            ...c,
                            HSN : e.target.value
                          }))
                        }}
                        onchangePrice={(e : any) => {
                          setRow(c => ({
                            ...c,
                            price : e.target.value
                          }))
                        }} 
                        onchangeQty={(e : any) => {
                          setRow(c => ({
                            ...c,
                            qty : e.target.value
                          }))
                        }} 
                        onchangeSubtotal={(e : any) => {
                          setRow(c => ({
                            ...c,
                            total : e.target.value
                          }))
                        }} 
                        onchangeUnit={(e : any) => {
                          setRow(c => ({
                            ...c,
                            unit : e.target.value
                          }))
                        }}/>
                        <div className="justify-center items-center w-full flex-col">
                          <button className="bg-green-700 text-white p-2 rounded-md " onClick={() => setPostInputs(c => ({
                            ...c,
                            table : [...postInputs.table, row ]
                          }))}>Add a record</button>
                        </div>
              </div>
          </div>

          <div className="p-4 grid grid-cols-2">
              <div>

              </div>
              
              <div>
                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p>Total amount</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>{`AU$ ${Number(totalAmount)}`}</p>
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p>Shipping Charge</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>AU$ 3200</p>
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p className="font-bold">
                        Grand Total</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p className="font-bold">AU$ {Number(totalAmount) + 3200}</p>
                  </div>
                </div>
                
              </div>
          </div>
      </div>
  </div>
  } else return (
    <div>
     
      <div className="items-center justify-center flex gap-2">
        <button onClick={handleToggleButton} className="bg-red-700 text-white font-bold px-4 py-2 rounded-md mt-10">Change content</button>
        <button className="bg-green-700 text-white font-bold px-4 py-2 rounded-md mt-10" onClick={handleDownload}>Download PDF</button>
      </div>
      
      <div id="pdf-content" className={`text-black px-40 py-8`}>
          <div className="justify-between flex">
            <div className="w-full">
              <img className="h-36 w-36" src="logo11.jpeg" alt="" />
            </div>
            <div className="w-1/3 font-bold text-md">
              <div className="flex justify-center items-center font-bold text-xl">
                Invoice
              </div>
              <div className="justify-between flex gap-2">
                <div >
                  <div>
                    <p>Invoice No:</p>
                  </div>
                  <div>
                    <p>Invoice Date:</p>
                  </div>
                  <div>
                    <p>Po No:</p>
                  </div>
                </div>
                <div className="">
                  <div>
                    <p>{postInputs.invoiceNumber}</p>
                  </div>
                  <div>
                    <p>{String(postInputs?.invoiceDate)}</p>
                  </div>
                  <div>
                    <p>{postInputs?.poNumber}</p>
                  </div>

                </div>
              </div>
            </div>


          </div>
          <div className="mt-4">

          </div>
          <div className="border border-black">
              <div className="w-full">
                <div className="w-18 bg-slate-700 grid grid-cols-2 text-xl p-4">
                    <div className="text-white">
                      <p>OurInfo</p>
                    </div>

                    <div className="text-white">
                      <p>Customer</p>
                    </div>
                </div>

                <div className="p-4">
                    <TableRowTitle left="Austrasian Traders PVY LTD" right={postInputs.customer_name}/>
                    <TableRowElements left="4 Savory Way Treeby WA 6164" right={postInputs.delivey_address}/>
                    <TableRowElements left="Phone:+919496309041" right={`Phone: ${postInputs.cutomer_phone}`}/>
                    <TableRowElements left="Email:trinitycaanz@gmail.com" right={`Email: ${postInputs.customer_email}`}/>
                    <TableRowElements left="ABN:69682452259" right={`${postInputs.taxIdName}: ${postInputs.customer_abn}`}/>
                    
                </div>

              </div>

              <div className="w-full mt-4">

                <div className="text-xl px-4 font-bold">
                  <p>Delvery Adress:</p>
                </div>
                <div className="flex p-4">
                    <div className="text-xl grid grid-cols-2">
                      <div className="w-full">
                        <div className="w-1/2">
                          <p>ST. EUPHRASIA SYRO MALABHAR CATHLIC PARISH 5, WILLEYSTREET ELIZABETH, SA AUSTRALIA-5112</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div>
                          <p>Country of Origin:</p>
                        </div>
                        <div className="font-bold">
                          <p>{postInputs.country_of_orgin}</p>
                        </div>

                        <div>
                          <p>Country of Destination:</p>
                        </div>
                        <div className="font-bold">
                          <p>{postInputs.county_of_destination}</p>
                        </div>

                        <div>
                          <p>Port of Loading:</p>
                        </div>
                        <div className="font-bold">
                          <p>{postInputs.port_of_loading}</p>
                        </div>

                        <div>
                          <p>Port of Discharge:</p>
                        </div>
                        <div className="font-bold">
                          <p>{postInputs.port_of_discharge}</p>
                        </div>
                      </div>
                    </div>
                    <div>

                    </div>
                </div>

              </div>
          </div>

          <div className="mt-4">

          </div>

          <div>
              <div className="w-full border border-black">
                    <div className="w-18 bg-slate-700 grid grid-cols-12 text-xl justify-center items-center">
                        <div className="text-white col-span-3 w-full h-full border-r p-4">
                          <p>Description</p>
                        </div>

                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>HSN</p>
                        </div>
                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>Price</p>
                        </div>

                        <div className="text-white col-span-1 w-full h-full border-r p-4">
                          <p>Qty</p>
                        </div>
                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>Unit</p>
                        </div>

                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>SubTotal</p>
                        </div>
                    </div>
                    
                    {postInputs.table.map(c => (
                      <TableRow2Elements des={c.description} hsn={c.HSN} price={`AU $ ${String(c.price)}`} qty={c.qty} unit={c.unit} subtotal={`AU $ ${c.total}`}/>
                    ))}
                    

              </div>
          </div>

          <div className="p-4 grid grid-cols-2">
              <div>

              </div>
              
              <div>
                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p>Total amount</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>{`AU$ ${Number(totalAmount)}`}</p>
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p>Shipping Charge</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>AU$ 3200</p>
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p className="font-bold">
                        Grand Total</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p className="font-bold">AU$ {Number(totalAmount) + 3200}</p>
                  </div>
                </div>
                
              </div>
          </div>
      </div>
    </div>
  )
}


const LocationDataInput = ({title, value, onchange} : {title : string, value : string, onchange : any}) => {
  return <div className="grid grid-cols-2 mt-1">
          <div>
            <p>{title}</p>
          </div>
          <div className="font-bold">
            <input onChange={onchange} className="bg-slate-300 outline-none px-1 rounded-md" defaultValue={value}></input>
          </div>
</div>
}

const TableRowTitle = ({left, right} : {left : string, right : string}) => {
  return <div className="grid grid-cols-2 font-bold text-xl">
        <div>
          <p>{left}</p>
        </div>
        <div>
          <p>{right}</p>
        </div>
  </div>
}

const TableRowTitleInput = ({left, defaultVal, onchange, placeholder} : {left : string, defaultVal : string, onchange : any, placeholder : string}) => {
  return <div className="grid grid-cols-2 font-bold text-xl">
        <div>
          <p>{left}</p>
        </div>
        <div>
          <input className="font-bold text-black px-2 outline-none rounded-md bg-slate-300" placeholder={placeholder} defaultValue={defaultVal} onChange={onchange} type="text" />
        </div>
  </div>
}


const TableRowElements = ({left, right} : {left? : string, right? : string}) => {
  return <div className="grid grid-cols-2">
        <div>
          <p>{left}</p>
        </div>
        <div>
          <p>{right}</p>
        </div>
  </div>
}


const TableRowElementsInput = ({left,defaultVal, onchange, placeholder} : {left : string,defaultVal : string, onchange : any, placeholder : string}) => {
  return <div className="grid grid-cols-2">
        <div>
          <p>{left}</p>
        </div>
        <div>
          <div> 
            <input className="font-normal text-black px-2 outline-none bg-slate-300 rounded-md" placeholder={placeholder} defaultValue={defaultVal} onChange={onchange} type="text" />
          </div>
        </div>
  </div>
}

const TableRowElementsInputABN = ({left,defaultVal,defaultTaxIdName, onchange, placeholder, onchangeTaxIdName} : {left : string,defaultVal : string, onchange : any, placeholder : string, onchangeTaxIdName  :any, defaultTaxIdName  :string}) => {
  return <div className="grid grid-cols-2">
        <div>
          <p>{left}</p>
        </div>
        <div>
        <div className="grid-cols-4"> 
          <input className="font-normal col-span-1 text-black px-2 outline-none bg-slate-300 rounded-md" placeholder={placeholder} defaultValue={defaultTaxIdName} onChange={onchangeTaxIdName} type="text" />                        
          <input className="font-normal col-span-3 text-black px-2 outline-none bg-slate-300 rounded-md" placeholder={placeholder} defaultValue={defaultVal} onChange={onchange} type="text" />
        </div>
       
        </div>
  </div>
}

const TableRow2Elements = ({des, hsn, price, qty, unit, subtotal}: {des : string, hsn : string, price: string, qty : number, unit : string, subtotal: string}) => {
  return <div className="grid grid-cols-12 border justify-center items-center">
            <div className="text-black col-span-3 w-full h-full border-r p-4">
              <p className="break-words">{des}</p>
            </div>

            <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
              <p>{hsn}</p>
            </div>
            <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
              <p>{price}</p>
            </div>

            <div className="text-black col-span-1 w-full break-words h-full border-r p-4">
              <p>{qty}</p>
            </div>
            <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
              <p>{unit}</p>
            </div>

            <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
              <p>{subtotal}</p>
            </div>
                    
  </div>
}

const TableRow2ElementsInput = ({onchangeDes, onchangeHSN, onchangePrice, onchangeQty, onchangeUnit, onchangeSubtotal}: {onchangeDes : any, onchangeHSN : any, onchangePrice : any, onchangeQty : any, onchangeUnit : any, onchangeSubtotal : any}) => {
  return <div className="grid grid-cols-12 border justify-center items-center">
            <div className="text-black col-span-3 p-1">
              <input onChange={onchangeDes} className="w-full outline-none bg-slate-200 p-2" placeholder="Description" ></input>
            </div>

            <div className="text-black col-span-2 p-1">
              <input onChange={onchangeHSN} type="number" className="w-full outline-none bg-slate-200 p-2" placeholder="HSN" ></input>
            </div>
            <div className="text-black col-span-2 p-1">
              <input onChange={onchangePrice} type="number" className="w-full outline-none bg-slate-200 p-2" placeholder="Price" ></input>
            </div>

            <div className="text-black col-span-1 p-1">
              <input onChange={onchangeQty} type="number" className="w-full outline-none bg-slate-200 p-2" placeholder="Quantity" ></input>
            </div>
            <div className="text-black col-span-2 p-1">
              <input onChange={onchangeUnit} className="w-full outline-none bg-slate-200 p-2" placeholder="Unit" ></input>
            </div>

            <div className="text-black col-span-2 p-1">
              <input onChange={onchangeSubtotal} type="number" className="w-full outline-none bg-slate-200 p-2" placeholder="SUbtotal" ></input>
            </div>
                    
  </div>
}




export default App
