import wooden_product1 from '../../assets/images/home/card_image1.png';
import wooden_product2 from '../../assets/images/home/card_image2.jpg';
import wooden_product3 from '../../assets/images/home/card_image3.png';
import recycle from '../../assets/images/home/recycle.jpg';

function SectionFour() {
  return (
    <>
      <div className="section-four flex items-center">
        <div className="relative w-full overflow-hidden scrollbar-hidden mx-4">
          <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hidden">

            {/* Card 1 */}
            <div className="slider-card flex-none  bg-white shadow-lg rounded-lg overflow-hidden flex">
              <img src={wooden_product1} alt="Card Image 1" className="slider-img h-auto" />
              <div className="flex-1 p-4  flex-col justify-center text-center">
                <h3 className="  mb-2 font-custom-weight">Explore</h3>
                <p className="text-gray-600 font-size-17 mb-4">Transform your living space with our thoughtfully designed eco-friendly home essentials. From reusable storage solutions to energy-efficient appliances, our collection empowers you to make </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-none w-[45rem] bg-white shadow-lg rounded-lg overflow-hidden flex">
              <img src={wooden_product2} alt="Card Image 2" className="slider-img " />
              <div className="flex-1 p-4  flex-col justify-center text-center">
                <h3 className="  mb-2 font-custom-weight">Opt to Minimum</h3>
                <p className="text-gray-600  mb-4">Choosing to minimize plastic use and embrace eco-friendly alternatives is a powerful step towards a sustainable future. Our carefully selected range of products offers practical and stylish solutions to reduce your plastic footprint. </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-none w-[45rem] bg-white shadow-lg rounded-lg overflow-hidden flex">
              <span className="flex-1 p-4 flex justify-center items-center h-auto">
                <img src={wooden_product3} alt="Card Image 3" className="slider-img rounded-xl" />
              </span>
              <div className="flex-1 p-4 flex flex-col items-center text-center">
                <h3 className="font-custom-weight mb-2">Encourage Other</h3>
                <p className="text-gray-600 mb-4">Inspire those around you to embrace eco-friendly products and make a positive impact on the environment. By sharing your commitment to sustainability</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex-none w-[35rem] bg-white shadow-lg rounded-lg overflow-hidden flex">
              <img src={recycle} alt="Card Image 4" className="slider-img " />
              <div className="flex-1 p-4  flex-col justify-center text-center">
                <h3 className="font-custom-weight mb-2">Use Recycle</h3>
                <p className="text-gray-600 mb-4">Recycling is a simple yet powerful way to make a positive impact on the environment. By choosing to recycle, you help conserve natural resources, reduce waste in landfills, and lower greenhouse gas emissions. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;