

const AboutUs = () => {
    return (
        <div className="hero bg-base-200 md:h-[400px]">
            <div className="hero-content w-4/5 mx-auto grid md:grid-cols-2">
                <div className="md:relative flex md:block">
                    <div className="flex items-start md:w-2/3 md:absolute md:-top-10 md:left-0">
                        <img src='https://i.postimg.cc/J7BdZgNQ/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg' className=" mask mask-hexagon" />
                    </div>
                    <div className="hidden md:flex items-end w-2/3 md:absolute md:-bottom-10 md:right-0">
                    <img src='https://i.postimg.cc/D0sjhJvN/gabriel-vasiliu-t9-UQrw-Drlp-A-unsplash.jpg' className=" mask mask-hexagon" />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">About Toy<span className="text-red-500">Cars</span></h1>
                    <p className="py-6">
                        Welcome to our Toy Cars website! We offer a wide selection of high-quality toy cars for all ages and interests. From classic to modern, our collection includes something for everyone. Whether you're a collector or looking for a special gift, we have you covered. Shop with confidence and embark on an exciting toy car journey with us!</p>
                    <button className="btn py-2 px-4 bg-red-500 text-white font-semibold border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;