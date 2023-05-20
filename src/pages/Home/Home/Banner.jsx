

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.postimg.cc/pXsWbggH/mohit-suthar-0u-ZMa-Y-Ho4-unsplash-1.jpg")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-3/4">
                    <h1 className="mb-5 text-5xl font-extrabold">Hello Kids! Welcome to <span className="text-red-600">ToyCars</span></h1>
                    <p className="mb-5">Now you can get all types of cars like sports car, truck, regular car, mini fire truck, mini police car, etc.</p>
                    <button className="btn bg-red-600 border-none text-lg font-bold hover:bg-red-800">Let's Play</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;