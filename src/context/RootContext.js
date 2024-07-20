import { useEffect, useState } from "react"
import {ProductContext} from "."

const Rootcontext = ({children}) => {
    const [product,setProduct] = useState([])
    const [favorite , setFavorite] = useState([])
    const [basket, setBasket] = useState([])
    function getProduct() {
        let res = JSON.parse(localStorage.getItem("product")) || []
        let resFav = JSON.parse(localStorage.getItem("favorite")) || []
        let resDel = JSON.parse(localStorage.getItem("favorite")) || []
        let resBas = JSON.parse(localStorage.getItem("basket")) || []    
        setFavorite(resFav)
        setFavorite(resDel)
        setBasket(resBas)
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return(
   <ProductContext.Provider value={{
    product,
    setProduct,
    favorite,
    basket,
     setBasket,
    setFavorite
   }}>
{children}
   </ProductContext.Provider>
    )
}


export default Rootcontext;