import { FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ProductDetails = () => {
    useTitle("Toy Details");
    const product = useLoaderData()
    const {name,picture, price,rating,seller_name,seller_email,available_quantity,details} = product
    return (
        <div className="flex w-4/5 mx-auto gap-5">
            <div className="w-3/4 p-8">
                <img src={picture} className="h-[300px] w-full rounded-lg" alt="" />
                <p className="text-3xl text-red-500 font-bold my-5">{name}</p>
                <p className="text-lg text-slate-800 font-light">{details}</p>
            </div>
            <div className="w-1/4 my-8 bg-red-500 text-white p-5 rounded-lg space-y-3">
                <p className="text-xl font-semibold">Toy Name: {name}</p>
                <p className="text-lg">Price: ${price}</p>
                <p className="text-lg flex items-center gap-3"> {rating} <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaStarHalf></FaStarHalf>}
                    placeholderSymbol={<FaStar/>}
                    fullSymbol={<FaStar/>}
                    readonly
                /></p>
                <p className="text-lg">Quantity: {available_quantity}</p>
                <hr />
                <div className="mt-2">
                <p className="text-base">Seller: {seller_name}</p>
                <p className="text-base">Email: {seller_email}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;