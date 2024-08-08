import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { storeProduct } from "../redux/slices/product-slice"

const Product = ()=>{
    const [products,setProducts] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')

        .then((response)=>{
            return response.json()
        })

        .then((data)=>{
            setProducts(data)
        })

        .catch((err)=>{
            console.log(err)
        })
    },[])

    const viewProducts = (item)=>{
        dispatch(storeProduct(item))
        navigate('/product-details')
    }

    return (
        <div className="bg-gray-100 flex flex-col items-center min-h-screen p-16">
            <div className="bg-white p-8 text-center rounded-lg shadow">
                <h1 className="text-5xl font-bold">Redux App</h1>
                <p className="text-lg text-gray-600 mt-2">Click on any product to test your redux app</p>
            </div>
            
            <div className="bg-white w-10/12 mx-auto p-8 shadow rounded-lg my-12">
                <div className="grid grid-cols-4 gap-8">
                    {
                        products.map((item,index)=>(
                            <div key={index} className="shadow-lg rounded-lg border p-6 flex flex-col gap-3">
                                <img 
                                    src={item.image} 
                                    className="w-full h-[250px] object-cover"
                                />
                                <h1 className="text-lg font-semibold">{item.title}</h1>
                                <label className="font-bold text-lg">₹{item.price}</label>
                                <button onClick={()=>{viewProducts(item)}} to='/product-details' className="text-center font-medium text-white bg-green-500 rounded-md px-4 py-2">View Product Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Product