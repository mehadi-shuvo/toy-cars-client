

const Gallery = () => {
    return (
        <div className="my-20">
            <h4 className="text-center text-red-500 font-bold text-5xl mb-5">Our Gallery</h4>
            <div className="grid md:grid-cols-3 h-[600px]">
                <div className="grid grid-cols-2">
                    <div className="h-1/2">
                        <img className="h-full" src="https://i.postimg.cc/m2fpwwVW/jed-owen-n-Hnt-I-z-Oh-Y4-unsplash.jpg
" alt="" />
                        <img className="h-full" src="https://i.postimg.cc/02DFR3rN/isaac-martin-C09-NUA6a-M2o-unsplash.jpg
" alt="" />
                    </div>
                    <div className="h-1/2">
                        <img className="h-full" src="https://i.postimg.cc/vB42P2pb/gimmel-magaway-h-CIPLW9-Cl-Og-unsplash.jpg
" alt="" />
                        <img className="h-full" src="https://i.postimg.cc/y8TGWZm4/gimmel-magaway-0-Swcp-A3-A-IE-unsplash.jpg
" alt="" />
                    </div>
                </div>
                <div>
                    <img className="h-full" src="https://i.postimg.cc/wj3WxGjJ/mourizal-zativa-YGEl-TTr-Aa-HM-unsplash.jpg" alt="" />
                </div>
                <div className="grid grid-cols-2">
                    <div className="h-1/2">
                        <img className="h-full" src="https://i.postimg.cc/D0sjhJvN/gabriel-vasiliu-t9-UQrw-Drlp-A-unsplash.jpg" alt="" />
                        <img className="h-full" src="https://i.postimg.cc/J7BdZgNQ/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg" alt="" />
                    </div>
                    <div className="h-1/2">
                        <img className="h-full" src="https://i.postimg.cc/Bn3yqg1B/gabriel-vasiliu-b-Ha-LQz5ko-Us-unsplash.jpg
" alt="" />
                        <img className="h-full" src="https://i.postimg.cc/Y2zkQhfR/markus-spiske-vx-Ed-Xf-Iucgg-unsplash.jpg
" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;