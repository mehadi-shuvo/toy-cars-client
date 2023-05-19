import Rating from "react-rating";
import { FaStar, FaStarHalf } from "react-icons/fa";

const CategoryCard = ({ item }) => {
    const { name, picture, price, rating, _id } = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={picture} alt="car" className="h-60 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{name}</h2>
                <p className="text-lg text-red-400 ">Price: $<span>{price}</span></p>
                <p className="text-lg text-red-400 flex items-center gap-2"><Rating
                    placeholderRating={rating}
                    emptySymbol={<FaStarHalf></FaStarHalf>}
                    placeholderSymbol={<FaStar/>}
                    fullSymbol={<FaStar/>}
                    readonly
                /> {rating}</p>
                <div className="card-actions">
                    <button className="py-3 rounded-lg bg-red-500 hover:bg-red-800 font-semibold text-lg uppercase px-4 text-white">more details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;