import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handelAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const available_quantity = parseFloat(form.available_quantity.value);
        const picture = form.picture.value;
        const subcategory = form.subcategory.value;
        const details = form.details.value;
        const seller_name = user.displayName;
        const seller_email = user.email;
        const newToy ={name, price, rating, available_quantity, picture, subcategory, details, seller_email, seller_name}
        // console.log(newToy)

        fetch('http://localhost:3000/toys',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!!',
                    text: 'The toy added successfully!!',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
            }
        })

    }
    return (
        <div className="w-4/5 mx-auto my-20">
            <form onSubmit={handelAddToy} className="p-7 rounded-xl bg-red-500">
                <div className="space-y-5">
                    <h4 className="text-white font-bold text-3xl text-center">Add A Toy</h4>
                    {/* name and price */}
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" name="name" required placeholder="Toy Name" className="input" />
                        <input type="text" name="price" required placeholder="Price" className="input" />
                    </div>
                    {/* rating and quantity */}
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" name="rating" required placeholder="Rating" className="input" />
                        <input type="text" name="available_quantity" required placeholder="Available Quantity" className="input" />
                    </div>
                    {/* photo and category */}
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" name="picture" required placeholder="Toy Photo URL" className="input" />
                        <select name="subcategory" className="rounded-lg px-5 bg-white text-slate-400">
                            <option value="truckcar">Truck</option>
                            <option value="racecar">Race Car</option>
                            <option value="jeepcar">Jeep Car</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" value={user.displayName} className="input" />
                        <input type="text" value={user.email} className="input" />
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <input type="text" name="details" placeholder="Toy Details" className="input h-36" />
                    </div>
                </div>
                <button type="submit" className="btn btn-block py-3 rounded-lg bg-red-700 hover:bg-red-800 font-semibold text-2xl text-white border-none mt-8">Add toy</button>
            </form>
        </div>
    );
};

export default AddToy;