import React from 'react'
import { useSelector } from 'react-redux'

const Invoice = () => {
   const { count } = useSelector((state) => state.count)
   const itemsList = useSelector((state) => state.items.value)

   return (
      <div style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
         <div
            className="invoice"
            style={{ display: 'flex', justifyContent: 'space-between' }}
         >
            <h1>INVOICE</h1>
            <div style={{ display: 'flex' }}>
               <div className="invoice-header" style={{ padding: '30px' }}>
                  <ul>
                     <li>644-555-1234</li>
                     <li>your@gmail.com</li>
                     <li>invoicer.com</li>
                  </ul>
               </div>
               <div
                  className="invoice-header"
                  style={{ padding: '30px 20px 30px 10px' }}
               >
                  <ul>
                     <li>1 Your address</li>
                     <li>New Delhi, India</li>
                     <li>421387</li>
                  </ul>
               </div>
            </div>
         </div>
         <section class="">
            <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
               <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p class="mb-2 leading-relaxed">Billed To</p>
                  <div class="flex justify-center">
                     <ul>
                        <li>Client name</li>
                        <li>adress</li>
                        <li>Mumbai, India</li>
                        <li>421309</li>
                     </ul>
                  </div>
               </div>
               <div
                  class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                  style={{ display: 'flex', justifyContent: 'right' }}
               >
                  <div>
                     <p className="mb-2" style={{ textAlign: 'right' }}>
                        Invoice Total
                     </p>

                     <h1
                        className="text-5xl"
                        style={{
                           color: 'rgb(99, 102, 241)',
                           fontWeight: '500'
                        }}
                     >
                        $ {count}.00
                     </h1>
                  </div>
               </div>
            </div>
         </section>
         <section class="text-gray-600 body-font">
            <div class="container px-6  mx-auto">
               <div class=" w-full  mx-auto overflow-auto">
                  <table class="table-auto w-full text-left whitespace-no-wrap">
                     <thead>
                        <tr>
                           <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                              Items
                           </th>
                           <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                              Quantity
                           </th>
                           <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                              Tax
                           </th>
                           <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                              Price
                           </th>
                           <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">
                              Discount
                           </th>
                        </tr>
                     </thead>
                     {itemsList.map((item) => (
                        <tbody>
                           <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                 <ul>
                                    <li> {item.name}</li>
                                    <li style={{ fontSize: '10px' }}>
                                       {' '}
                                       {item.description}
                                    </li>
                                 </ul>
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                 {item.quantity}
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                 {item.tax}%
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                 ${item.price}
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                 {item.discount}%
                              </td>
                           </tr>
                        </tbody>
                     ))}
                  </table>
               </div>
            </div>
         </section>
         <footer class="text-gray-600 body-font">
            <div class="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
               <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"></div>
               <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                  <div class=" md:w-1/2 w-full ">
                     <nav class="list-none mb-10">
                        <li>
                           <a
                              class="text-gray-600 hover:text-gray-800"
                              style={{
                                 color: 'rgb(99, 102, 241)',
                                 fontWeight: '500'
                              }}
                           >
                              Total:
                           </a>
                        </li>
                     </nav>
                  </div>
                  <div class=" md:w-1/2 w-full ">
                     <nav class="list-none mb-10">
                        <li>
                           <a class="text-gray-600 hover:text-gray-800">
                              <h1
                                 style={{
                                    color: 'rgb(99, 102, 241)',
                                    fontWeight: '500'
                                 }}
                              >
                                 ${count}
                              </h1>{' '}
                              <h2>(inc tax)</h2>
                           </a>
                        </li>
                     </nav>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default Invoice
