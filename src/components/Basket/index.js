import React, { useContext, useState } from 'react'
import { ProductContext } from '../../context'

function Basket() {
    const {basket, setBasket} = useContext(ProductContext)
    const [number , setNumber] = useState(1)
    const basketDelete = (data) => {
            let filterBasket = basket.filter((el) => el.id !== data.id)
            localStorage.setItem("basket" , JSON.stringify(filterBasket))
            setBasket(filterBasket)
    }
    
const getPl = (data) => {
console.log(data);
let findFavorite = basket.find((el) => el.id === data.id)
 
if(findFavorite) {
    let filterBasket = basket.filter((el) => el.id !== data.id)
    if(filterBasket){
        setNumber(number + 1)
    }
  }  
    return setNumber(number + 1)

}

        return (
       <div className="mt-[50px]">
        <div className="container">


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Url
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quatitin
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
     {
        basket.map((el) => (
            <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={el.url} alt="" width={80}/>
                </th>
                <td class="px-6 py-4 font-size-[40]">
                    {el.title}
                </td>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginTop: "45px"
              }} className="">
              <button onClick={() => setNumber(number > 1 ? number - 1 : 1)} style={{
                padding: "0px 10px 10px 10px",
                background:"green",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontSize: "40px"
              }}>-</button>
              <td class="px-6 py-4">
                   {number}
                </td>
              <button onClick={() => getPl(el)} style={{
                padding: "2px 8px 8px 8px",
                background:"green",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontSize: "30px"
              }}>+</button>
              </div>
                <td class="px-6 py-4">
                    {el.price}
                </td>
                <td class="px-6 py-4">
                    <a onClick={() => basketDelete(el)} href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
       
        </tbody>
        ))
     }
    </table>
</div>

        </div>
       </div>
    )
}

export default Basket;
