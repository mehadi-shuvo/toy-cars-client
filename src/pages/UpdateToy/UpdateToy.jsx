import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    useTitle('Update Toy')
    const {user} = useContext(AuthContext);
    const toy = useLoaderData();
    const {_id, picture, name, subcategory,rating } = toy;

    const handleUpdate =(event)=>{
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const available_quantity = parseFloat(form.available_quantity.value);
        const details = form.details.value;
        const updateToy = {price, available_quantity, details};
        fetch(`http://localhost:3000/update/${_id}`,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToy)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'Updated',
                    text: 'The toy updated successfully!!',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
            }
        })
    }

    return (
        <div className="w-4/5 mx-auto my-20">
            <form onSubmit={handleUpdate} className="p-7 rounded-xl bg-red-500">
                <div className="space-y-5">
                    <h4 className="text-white font-bold text-3xl text-center">Update {name}</h4>
                    {/* name and price */}
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" readOnly name="name" required value={name} className="input" />
                        <input type="text" name="price" required placeholder="Price" className="input" />
                    </div>
                    {/* rating and quantity */}
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" readOnly name="rating" required value={rating} className="input" />
                        <input type="text" name="available_quantity" required placeholder="Available Quantity" className="input" />
                    </div>
                    {/* photo and category */}
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" readOnly name="picture" required value={picture} className="input" />
                        <input type="text" readOnly name="subcategory" required value={subcategory} className="input" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" readOnly value={user.displayName} className="input" />
                        <input type="text" readOnly value={user.email} className="input" />
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <input type="text" name="details" placeholder="Toy details" className="input h-36" />
                    </div>
                </div>
                <button type="submit" className="btn btn-block py-3 rounded-lg bg-red-700 hover:bg-red-800 font-semibold text-2xl text-white border-none mt-8">Update</button>
            </form>
        </div>
    );
};

export default UpdateToy;