

const AboutUs = () => {
    return (
        <div className="hero bg-base-200 h-[400px]">
            <div className="hero-content w-4/5 mx-auto grid md:grid-cols-2">
                <div className="flex relative">
                        <img src='https://i.postimg.cc/J7BdZgNQ/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg' className=" mask mask-hexagon" />
                        <img src='https://i.postimg.cc/D0sjhJvN/gabriel-vasiliu-t9-UQrw-Drlp-A-unsplash.jpg' className=" mask mask-hexagon absolute bottom-0 right-5" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">About BengaliChefs</h1>
                    <p className="py-6">BengaliChefs prepares and serves exquisite dinners to parties from two to 200 at your home, business or private catering event. His blend of French-Mediterranean cuisine draws on a lifetime of skills and the knowledge that all meals, no matter how large or how small, are special events among family and friends</p>
                    <button className="btn py-2 px-4 bg-red-500 text-white font-semibold border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;