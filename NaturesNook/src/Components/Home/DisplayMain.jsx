import { useState, useEffect } from "react";
import plant1 from '../../assets/home/plant1.webp';
import plant2 from '../../assets/home/plant2.webp';
import { useNavigate } from "react-router-dom";

function DisplayMain() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const headers = [
    "Discover <br> Eco-Friendly Product",
    "Sustainable <br> and Environmentally-Conscious",
    "Low Impact <br> Sustainable Product",
    "Near to Nature <br> Low Toxic Emission"
  ];

  const [currentHeader, setCurrentHeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader(prev => (prev + 1) % headers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headers.length]);

  const navigate = useNavigate();
  return (
    <>
      <div className="container-custom flex flex-row w-full justify-between items-center">
        <img className="main-image" src={plant1} alt="Main Plant" />
        <div className="header-container flex flex-col items-center px-4">
          <div className="header" dangerouslySetInnerHTML={{ __html: headers[currentHeader] }}></div>
          <div className="subheader mt-2 sm:text-2xl text-lg">
            Welcome to our Sustainable eco-friendly product showcase, where we offer a curated selection of sustainable and
            environmentally-conscious items to enhance your lifestyle.
          </div>
          <button className="px-4 py-2 bg-[#036570] text-white font-semibold rounded-md hover:bg-[#054b53]" onClick={() => navigate('/product')}>
            Explore
          </button>
        </div>
        <img className="image" src={plant2} alt="Additional Plant" />
      </div>
    </>
  );
}

export default DisplayMain;