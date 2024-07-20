import React, { useContext } from 'react'
import { ProductContext } from '../../context'
import ProductCard from '../ProductCard'

function Product() {
    const {product,setProduct} = useContext(ProductContext)
const sortProduct = (e) => {
    let pr = e.target.value
    const sortPr = product.slice().sort((a,b) => {
if(pr === "expensive"){
    return b.price - a.price
}else if(pr === "cheap"){
    return a.price - b.price
}else if(pr === "A-Z") {
    return a.title > b.title ? "1" : "-1"
}else if(pr === "Z-A") {
    return a.title < b.title ? "1" : "-1"
    }
    
    })
    setProduct(sortPr)
}
    return (
        <div id='product'>
            <div className="container">
              <div className="">
                <select
                onChange={sortProduct}
                className='bg-gray-50 border w-[20%] mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value="expensive">Expensive</option>
                    <option value="cheap">Cheap</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
              <div className="flex items-center flex-wrap gap-[26px] mt-10">
                   {product.length ? product.map((el,idx) => <ProductCard el={el} key={idx}/>) : <h1 style={{
                    color: "red",
                    fontSize: "40px",
               marginLeft:"380px"
                   }}>У вас пока нет продукты!</h1>}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Product
