import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { OurInfoComponent } from "./components/Our/OurInfo.Component";
import { BankInfoComponent } from "./components/Bank/Bank.Info.component";
import { ShippingComponent } from "./components/Shipping/Shipping.component";
import { CustomerInfoComponent } from "./components/Customer/Customer.Info.component";
import { CustomerInfoEditComponent } from "./components/Customer/Customer.Info.Edit.Component";
import { InvoiceEditComponent } from "./components/Invoice/InvoiceEditComponent";
import { InvoiceComponent } from "./components/Invoice/InvoiceComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ShippingChargeAtom } from "./store/shippingAtoms";
import { ShippingchargeEditComponent } from "./components/Shipping/ShippingChargeEditComponent";
import { TableView } from "./components/Table/TableView";
import { TableEdit } from "./components/Table/TableEdit";
import { TableSingleRowEdit } from "./components/Table/TableSingleRowEdit";
import { balanceAmountState, grandTotalAmountState, tableState, totalAmountState } from "./store/TableAtoms";
import { CustomerInfoAtom } from "./store/CustomerAtoms";
import { discountAtom } from "./store/discoutAtom";
import { DiscountEditComponent } from "./components/Discount/discount.edit.component";

function App() {

  
  const setTableData = useSetRecoilState(tableState);
  const shiipingcharge = useRecoilValue(ShippingChargeAtom)
  const discount = useRecoilValue(discountAtom)
  const totalAmount = useRecoilValue(totalAmountState)
  const grandTotal = useRecoilValue(grandTotalAmountState)
  const balanceAmout = useRecoilValue(balanceAmountState)
  const customer_data = useRecoilValue(CustomerInfoAtom)

  const [toggleOpen, setToggleOpen] = useState(false)
  const handleDownload = async () => {
  const element : HTMLElement | null  = document.getElementById("pdf-content");
  
  //@ts-expect-error nul
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png");

  const pdf = new jsPDF();
  const imgWidth = 210; // A4 width in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjust for aspect ratio
  pdf.addImage(image, "PNG", 0, 0, imgWidth, imgHeight);
  pdf.save(`${customer_data.customer_name ? customer_data.customer_name + "-austraisian" : "blank-austrasian"}.pdf`);
  };

  const handleToggleButton = () => {
    setToggleOpen((c) => !c)
  }

  if (toggleOpen) {
    return  <div className={`${toggleOpen ? "block" : "hidden"}`}>
    <div className="justify-center p-4 gap-3 flex items-center">
                    <button
                    onClick={handleToggleButton}
                    className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
                    >
                    Go to Download
                    </button>
             
            </div>
    <div id="pdf-content" className={`text-black px-2 md:px-40 py-8`}>
          <div className="md:justify-between md:flex items-center">
            <div className="w-full">
              <img className="h-36 w-58" src="logo.png" alt="" />
            </div>
            <div className="w-1/2 text-md">
              <div className="flex font-extrabold text-6xl mb-6">
                INVOICE
              </div>
              <InvoiceEditComponent/>
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

                <div className="grid grid-cols-2">
                    <div className="p-4">
                      <OurInfoComponent/>
                    </div>
                    <div className="py-4">
                      <CustomerInfoEditComponent/>
                    </div>
                    <div className="p-4">
                      <BankInfoComponent/>
                    </div>
                    <div className="py-4">
                      <ShippingComponent/>
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
                        setTableData([])
                      }} className="px-2 bg-red-600 text-white ">Delete all rerords</button>
                    </div>
                    <div className="w-18 bg-slate-700 grid grid-cols-12 text-xl justify-center items-center">
                        <div className="text-white col-span-3 w-full h-full border-r p-4">
                          <p>Item</p>
                        </div>

                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>Description</p>
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
                    <TableEdit/>

              </div>
              <div className="w-full">
                        <TableSingleRowEdit/>
              </div>
          </div>

          <div className="p-4 grid grid-cols-2 text-lg">
              <div>

              </div>
              
              <div className="text-xl">
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
                      <p>Delivery Charge</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <ShippingchargeEditComponent/>

                  </div>
                </div>

               

                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p className="">
                        Grand Total</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                
                  <p className="">AU$ {Number(grandTotal)}</p>

                      
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p>Advance paid</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <DiscountEditComponent/>

                  </div>
                </div>
                <div className="justify-between grid grid-cols-3">
                  <div>
                      <p>Balance amount</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      {balanceAmout}

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
          <div className="h-52">

          </div>
          <div className="justify-between flex items-center">
            <div className="w-full">
              <img className="h-36 w-58" src="logo.png" alt="" />
            </div>
            <div className="w-1/2 text-md">
              <div className="flex font-extrabold text-6xl mb-6">
                INVOICE
              </div>
              <InvoiceComponent/>
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

                <div className="grid grid-cols-2">
                    <div className="p-4">
                      <OurInfoComponent/>
                    </div>
                    <div className="py-4">
                      <CustomerInfoComponent/>
                    </div>
                    <div className="p-4">
                      <BankInfoComponent/>
                    </div>
                    <div className="py-4">
                      <ShippingComponent/>
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
                          <p>Item</p>
                        </div>

                        <div className="text-white col-span-2 w-full h-full border-r p-4">
                          <p>Description</p>
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
                    
                    <TableView/>
                    

              </div>
          </div>

          <div className="py-6 grid grid-cols-2 text-lg">
              <div>

              </div>
              
              <div className="text-2xl">
                <div className="justify-between grid grid-cols-3 py-2">
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

                <div className="justify-between grid grid-cols-3 py-2">
                  <div>
                      <p>Delivery Charge</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>AU$ {shiipingcharge}</p>
                  </div>
                </div>

                

                <div className="justify-between grid grid-cols-3 py-2">
                  <div>
                      <p className="">
                        Grand Total</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p className="">AU$ {Number(grandTotal)}</p>
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3 py-2">
                  <div>
                      <p>Advance paid</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>AU$ {discount}</p>
                  </div>
                </div>

                <div className="justify-between grid grid-cols-3 font-bold py-2">
                  <div>
                      <p>Balance amount</p>
                  </div>
                  <div className="justify-center items-center">
                    <p>=</p>
                  </div>
                  <div>
                      <p>AU$ {balanceAmout}</p>
                  </div>
                </div>

                
                
              </div>
          </div>
      </div>
    </div>
  )
}


export default App
