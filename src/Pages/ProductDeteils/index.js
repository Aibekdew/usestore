import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "../../context";

function ProductDeteils() {
    const {product} = useContext(ProductContext)
    const {elId} = useParams()
const [newProduct, setNewProduct] = useState([...product].find((el) => el.id == elId))
    const nav = useNavigate()
    return (
        <div id='productDeteils'>
            <div className="container">
        <div style={{
            display: "flex",
            gap: "50px",
            widow: "1000px",
            height: "600px",
            border: "2px solid white",
            marginTop: "50px",
            borderRadius: "30px"
        }} className="block">
        <div style={{
                 
                }} className="productDeteils">
                  <img style={{
                    width: "300px",
                    height: "450px",
                    marginTop: "70px",
                    marginLeft: "50px",
                    borderRadius: "20px"
                  }} src={newProduct.url} alt="" />
                 
                </div>
                <div className="productDeteils2">
                <h1 style={{
                    color: "white",
                    fontSize: "30px",
                    marginTop: "80px",
                  }}>Product name:  {newProduct.title}</h1>
                  <h2 style={{
                    color: "green",
                    fontSize:"30px",
                    marginTop: "350px",
                    marginLeft: "300px"
                  }}><span style={{
                    color: "white",
                  
                  }}>Price:</span> ${newProduct.price}</h2>
                  <button onClick={() => nav("/product")} style={{
                    padding: "12px 32px",
                    background: "green",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "500px",
                    marginTop: "-50px",
                    position: "absolute"
                  }}>Кипить</button>
                </div>
        </div>
            </div>
        </div>
    )
}

export default ProductDeteils;
