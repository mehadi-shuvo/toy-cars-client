import { useEffect, useState } from "react";
import ToyData from "./ToyData";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [showFullData, setShowFullData] = useState(false);

    useEffect(() => {
        const limit = showFullData ? null : 3;
        fetch(`http://localhost:3000/toys/?limit=${limit}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }, [showFullData]);

    const handleLoadMore = () => {
        setShowFullData(true);
    };


    return (
        <div className="w-4/5 mx-auto">
            <div>
                <div className="overflow-x-auto w-full my-12">
                    <table className="table w-full">
                        <thead >
                            <tr>
                                <th>Toy Info</th>
                                <th>Price & Quantity</th>
                                <th>Seller</th>
                                <th className="text-center">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <ToyData key={toy._id}
                                    toy={toy}
                                ></ToyData>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>

            <div className="flex justify-center my-8">
            {
                showFullData? ''
                : <button className="w-1/4 mx-auto py-3 rounded-lg bg-red-500 hover:bg-red-800 font-semibold text-lg uppercase px-4 text-white" onClick={handleLoadMore}>load more</button>
            }
            </div>
        </div>
    );
};

export default AllToys;