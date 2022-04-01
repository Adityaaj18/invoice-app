import React, { useState, useRef } from 'react'
import { PDFExport } from '@progress/kendo-react-pdf'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem, updateQuantity } from '../features/Items'
import { increment, decrement, decCount } from '../features/count'

import Invoice from './Invoice'

const Test = () => {
   const itemsList = useSelector((state) => state.items.value)
   const { count } = useSelector((state) => state.count)

   const dispatch = useDispatch()
   const [name, setName] = useState('')
   const [desc, setDesc] = useState('')
   const [newQuantity, setNewQuantity] = useState('')
   const [newPrice, setNewPrice] = useState('')
   const [newTax, setNewTax] = useState(0)
   const [newDiscount, setNewDiscount] = useState(0)

   const [price, setPrice] = useState(0)
   const [quantity, setQuantity] = useState(0)
   const [tax, setTax] = useState(0)
   const [discount, setDiscount] = useState(0)

   const pdfExportComponent = useRef(null)
   const handleExportWithComponent = (event) => {
      pdfExportComponent.current.save()
   }

   return (
      <section className="text-gray-600 body-font overflow-hidden">
         <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-12">
               <div className="p-8 md:w-1/2 flex flex-col items-start">
                  <form>
                     <div className="mb-6 input">
                        <input
                           type="text"
                           id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           placeholder="item name"
                           required=""
                           onChange={(e) => setName(e.target.value)}
                        />
                     </div>

                     <div className=" mb-6 input">
                        <div className="">
                           <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="item description"
                              required=""
                              onChange={(e) => setDesc(e.target.value)}
                           />
                        </div>
                     </div>
                     <div>
                        <div className=" mb-6 input">
                           <div className="">
                              <input
                                 type="number"
                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                 placeholder="quantity"
                                 required=""
                                 onChange={(e) => setQuantity(e.target.value)}
                              />
                           </div>
                        </div>
                        <div className="mb-6 input">
                           <div className="">
                              <input
                                 type="number"
                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                 placeholder="price"
                                 required=""
                                 onChange={(e) => setPrice(e.target.value)}
                              />
                           </div>
                        </div>
                        <div className="mb-6 input">
                           <div className="">
                              <input
                                 type="number"
                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                 placeholder="tax"
                                 required=""
                                 onChange={(e) => setTax(e.target.value)}
                              />
                           </div>
                        </div>
                        <div className="mb-6 input">
                           <div className="">
                              <input
                                 type="number"
                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                 placeholder="discount"
                                 required=""
                                 onChange={(e) => setDiscount(e.target.value)}
                              />
                           </div>
                        </div>
                        <button
                           onClick={(e) => {
                              e.preventDefault()
                              dispatch(
                                 addItem({
                                    id: itemsList[itemsList.length - 1].id + 1,
                                    quantity,
                                    price,
                                    tax,
                                    discount,
                                    name,
                                    description: desc
                                 })
                              )
                              setTax((tax / 100) * count)
                              setDiscount((discount / 100) * count)
                              console.log('tax', tax)
                              var newPrice =
                                 +quantity * +price + +tax - discount
                              console.log('new price', newPrice)
                              dispatch(increment(newPrice))

                              console.log('count', count)
                           }}
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                           Add
                        </button>
                     </div>
                     <div className="display-items">
                        {itemsList.map((item, key) => {
                           return (
                              <div key={item.id}>
                                 <label>Quantity: </label>
                                 <input
                                    style={{
                                       width: '50px',
                                       border: '1px solid black'
                                    }}
                                    type="number"
                                    placeholder="new value"
                                    value={item.quantity}
                                    onChange={(e) => {
                                       setNewQuantity(e.target.value)
                                    }}
                                 />
                                 <label>Price: </label>
                                 <input
                                    style={{
                                       width: '50px',
                                       border: '1px solid black'
                                    }}
                                    type="number"
                                    placeholder="new value"
                                    value={item.price}
                                    onChange={(e) => {
                                       setNewPrice(e.target.value)
                                    }}
                                 />
                                 <label>Tax: </label>
                                 <input
                                    style={{
                                       width: '50px',
                                       border: '1px solid black'
                                    }}
                                    type="number"
                                    placeholder="new value"
                                    onChange={(e) => {
                                       setNewTax(e.target.value)
                                    }}
                                 />
                                 <label>Discount: </label>
                                 <input
                                    style={{
                                       width: '50px',
                                       border: '1px solid black'
                                    }}
                                    type="number"
                                    placeholder="new value"
                                    onChange={(e) => {
                                       setNewDiscount(e.target.value)
                                    }}
                                 />
                                 <button
                                    style={{ marginLeft: '10px' }}
                                    onClick={(e) => {
                                       e.preventDefault()
                                       dispatch(
                                          updateQuantity({
                                             id: item.id,
                                             quantity: newQuantity,
                                             tax: newTax,
                                             discount: newDiscount
                                             // name: name,
                                             // description: desc
                                          })
                                       )

                                       if (
                                          item.quantity > newQuantity &&
                                          itemsList.length <= 1
                                       ) {
                                          dispatch(
                                             decCount(newQuantity * item.price)
                                          )
                                       } else if (
                                          item.quantity > newQuantity &&
                                          itemsList.length > 1
                                       ) {
                                          dispatch(
                                             decCount(
                                                count - newQuantity * item.price
                                             )
                                          )
                                       } else if (
                                          item.quantity < newQuantity &&
                                          itemsList.length <= 1
                                       ) {
                                          dispatch(
                                             decCount(newQuantity * item.price)
                                          )
                                       } else if (
                                          item.quantity < newQuantity &&
                                          itemsList.length > 1
                                       ) {
                                          dispatch(
                                             decCount(
                                                count -
                                                   item.quantity * item.price +
                                                   newQuantity * item.price
                                             )
                                          )
                                       }
                                    }}
                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                 >
                                    Edit
                                 </button>
                                 <button
                                    style={{ marginLeft: '10px' }}
                                    onClick={(e) => {
                                       e.preventDefault()
                                       dispatch(deleteItem({ id: item.id }))
                                       dispatch(
                                          decrement(item.price * item.quantity)
                                       )
                                    }}
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                 >
                                    Delete
                                 </button>
                              </div>
                           )
                        })}
                     </div>
                  </form>
                  <div className="flex justify-center">
                     <button
                        onClick={handleExportWithComponent}
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                     >
                        Download
                     </button>
                  </div>
               </div>

               <div className="p-12 md:w-1/2 flex flex-col">
                  <PDFExport ref={pdfExportComponent} paperSize="A4">
                     <Invoice />
                  </PDFExport>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Test
