import { Link } from "react-router-dom";


const ToyData = ({ toy }) => {
    const { _id, picture, name, subcategory, price, available_quantity, seller_name } = toy;
    return (
        <tr className="border-b">
            <td className="border-none">
                <div className="flex items-center gap-3">
                    <img src={picture} className="h-16 w-16 rounded-xl" alt="" />
                    <div>
                        <p className="text-xl font-bold text-red-500">{name}</p>
                        <p className="text-base font-light text-slate-700">Category: {subcategory}</p>
                    </div>
                </div>
            </td>

            <td className="text-lg text-slate-700 font-semibold border-none">
                <p>Price: ${price}</p>
                <p>Quantity: {available_quantity}</p>
            </td>

            <td className="text-lg text-slate-700 font-semibold border-none">
                <p>{seller_name}</p>
            </td>

            <td className="flex justify-end items-center border-none">
                <Link to={`/product/${_id}`} className="py-3 rounded-lg bg-red-500 hover:bg-red-800 font-semibold text-lg uppercase px-4 text-white">more details</Link>
            </td>
        </tr>
    );
};

export default ToyData;