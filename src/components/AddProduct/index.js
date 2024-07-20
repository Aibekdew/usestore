import { useContext, useState } from "react"
import { ProductContext } from "../../context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
 const {product, setProduct} = useContext(ProductContext)
 console.log(product);
const [productImg, setProductImg] = useState("")
const [productName, setProductName] = useState("")
const [productPrice, setProductPrice] = useState("")

const messageError = () => {
    toast.error('🦄 Заполните пустые ячейки!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const messagePrice = () => {
    toast.success('🦄 Успешно!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

let newProduct = {
    id: product.length ? product[product.length - 1].id + 1 : 1,
    url: productImg,
    title: productName,
    price: productPrice,
        }
        const add = () => {
            let storageProduct = JSON.parse(localStorage.getItem("product")) || []
            localStorage.setItem("product", JSON.stringify([...storageProduct, newProduct]))
            setProduct([...storageProduct,newProduct])
        }
        

 const AddToProduct = () => {
    if(productImg.trim() === "" || productName.trim() === "" || productPrice.trim() === ""){
        messageError()
    }else{
        add()
                setProductImg('')
                setProductName("")
                setProductPrice('')
                messagePrice()
    }    
   
 }
    return (
        <div id='addProduct'>
            <div className="container">
                <div className="w-[50%] mx-auto mt-10 flex items-center justify-center flex-col gap-9">
                <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={(e) => setProductImg(e.target.value)}
      value={productImg}
      type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Url(...)</label>
  </div>              <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={(e) => setProductName(e.target.value)}
      value={productName} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
  </div>              <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={(e) => setProductPrice(e.target.value)}
      value={productPrice}
      type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
  </div>
  <button onClick={() => AddToProduct()}
  type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Product</button>
  <ToastContainer />
                </div>
            </div>
        </div>


    )
}

export default AddProduct;
