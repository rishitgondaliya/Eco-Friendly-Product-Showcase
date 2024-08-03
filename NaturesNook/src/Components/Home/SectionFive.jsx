import bg_image from '../../assets/images/home/bg_leaves.png';

function SectionFive() {
    return (
        <>
            <div className="section-five relative w-full h-[22rem] flex items-center justify-center overflow-hidden">
                <img src={bg_image} alt="Background" className="absolute inset-0 object-cover w-full h-full z-[-1] " ></img>
                <div className="flex items-center justify-center h-full container40 raleway-font ">
                    <div className="text-center p-4 text-[#493b2f]">
                        <p className='my-4'>&quot;The earth has music for those who listen.&quot; - Shakespeare.<br></br> At our eco-friendly product showcase, we believe in the harmony between nature and human ingenuity</p>
                        <p>Embrace the beauty of sustainable living with our thoughtfully designed products</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SectionFive;