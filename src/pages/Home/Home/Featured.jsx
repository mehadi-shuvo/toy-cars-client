import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";


const Featured = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="my-20">
            <h4 className="text-center text-red-500 font-bold text-5xl mb-5">Our Featured Cars</h4>
            <div className="grid md:grid-cols-3 w-4/5 mx-auto gap-5">
                <div data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card image-full">
                    <figure><img src='https://i.postimg.cc/m2fpwwVW/jed-owen-n-Hnt-I-z-Oh-Y4-unsplash.jpg' className="opacity-100" alt="Shoes" /></figure>
                    <div className="p-8 text-white z-20 flex flex-col justify-end">
                        <h2 className="card-title text-3xl font-bold text-white">Lights Dumper Truck Toy</h2>
                        <div className="card-actions">
                            <Link to={`/category`} className="btn font-bold bg-red-600 border-none mt-3 hover:bg-red-700">See More</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card image-full">
                    <figure><img src='https://i.postimg.cc/Bn3yqg1B/gabriel-vasiliu-b-Ha-LQz5ko-Us-unsplash.jpg' className="opacity-100" alt="Shoes" /></figure>
                    <div className="p-8 text-white z-20 flex flex-col justify-end">
                        <h2 className="card-title text-3xl font-bold text-white">Heavy Duty Push n Go Vehicles </h2>
                        <div className="card-actions">
                            <Link to={`/category`} className="btn font-bold bg-red-600 border-none mt-3 hover:bg-red-700">See More</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card image-full">
                    <figure><img src='https://i.postimg.cc/J7BdZgNQ/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg' className="opacity-100" alt="Shoes" /></figure>
                    <div className="p-8 text-white z-20 flex flex-col justify-end">
                        <h2 className="card-title text-3xl font-bold text-white">High Speed Cross-country </h2>
                        <div className="card-actions">
                            <Link to={`/category`} className="btn font-bold bg-red-600 border-none mt-3 hover:bg-red-700">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;