import { useSelector } from "react-redux"

const ProductDetails = ()=>{
    const {productSlice} = useSelector((res)=>res)
    
    if(!productSlice){
        return(
            <h1 className="text-6xl font-bold text-center py-12">
                Data not available in redux store
            </h1>
        )
    }

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg border p-12 w-6/12 space-y-6">
                <img 
                    src={productSlice.image} 
                    className="w-[70%] mx-auto"
                />
                <h1 className="text-6xl font-bold">{productSlice.title}</h1>
                <p className="text-gray-500">{productSlice.description}</p>
                <label className="bg-blue-600 px-6 py-2 rounded text-white font-semibold capitalize">{productSlice.category}</label>
                <button className=" ml-6 bg-rose-600 px-6 py-2 rounded text-white font-semibold">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductDetails