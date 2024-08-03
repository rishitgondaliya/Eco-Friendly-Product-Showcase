import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Homeware from './Homeware/Homeware';
import Soaps from './Soaps/Soaps';
import ZeroWaste from './Zerowaste/Zerowaste';
import Custom from './Custom/Custom';
import OnTheGo from './Onthego/Onthego';
import cat1 from '../../assets/images/category/homeware.webp'
import cat2 from '../../assets/images/category/onthego.webp'
import cat3 from '../../assets/images/category/zerowaste.webp'
import cat4 from '../../assets/images/category/soaps.webp'
import cat5 from '../../assets/images/category/straw.webp'

export default function Product() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const categories = [
    { category: "homeware", name: "Homeware", src: cat1 },
    { category: "onthego", name: "On-The-Go", src: cat2 },
    { category: "zerowaste", name: "Zero Waste Bathroom", src: cat3 },
    { category: "soaps", name: "Natural Soaps", src: cat4 },
    { category: "custom", name: "Custom Eco-Friendly Products", src: cat5 },
  ];

  const handleNextCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePreviousCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const renderCategoryComponent = () => {
    const category = categories[selectedCategoryIndex];

    switch (category?.category) {
      case "homeware":
        return <Homeware onBack={() => setSelectedCategoryIndex(null)} onNext={handleNextCategory} onPrevious={handlePreviousCategory} />;
      case "soaps":
        return <Soaps onBack={() => setSelectedCategoryIndex(null)} onNext={handleNextCategory} onPrevious={handlePreviousCategory} />;
      case "zerowaste":
        return <ZeroWaste onBack={() => setSelectedCategoryIndex(null)} onNext={handleNextCategory} onPrevious={handlePreviousCategory} />;
      case "custom":
        return <Custom onBack={() => setSelectedCategoryIndex(null)} onNext={handleNextCategory} onPrevious={handlePreviousCategory} />;
      case "onthego":
        return <OnTheGo onBack={() => setSelectedCategoryIndex(null)} onNext={handleNextCategory} onPrevious={handlePreviousCategory} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: false }); 
}, []);

  return (
    <div className="product-page">
      {selectedCategoryIndex === null ? (
        <>
          <div className="mb-12 mt-4 p-4 text-xl text-center text-white bg-[#036570]" data-aos="fade-up">
            <p className="w-3/4 mx-auto">
              Nature&apos;s nook&apos;s philosophy is to inspire people to see the beauty & purpose in nature. We create earth-friendly and functional goods sourced directly from independent artisans & makers from all over the world. We believe in fair and honest manufacturing and care deeply about building relationships with the local communities that we work alongside.
            </p>
          </div>
          <div className="categories flex flex-wrap justify-center my-4" data-aos="fade-up">
            {categories.map((cat, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: 250,
                  margin: 2,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  "&:hover": {
                    boxShadow: 10,
                    transform: "Scale(1.05)",
                  },
                }}
                onClick={() => setSelectedCategoryIndex(index)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={200}
                    image={cat.src}
                    alt={cat.name}
                  />
                  <CardContent sx={{ padding: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 20,
                        marginBottom: 0,
                      }}
                    >
                      {cat.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
          <div className="my-12 p-4 text-xl text-center text-white bg-[#036570]" data-aos="fade-up">
            <p className="w-3/4 mx-auto">
              Nature&apos;s nook is a socially responsible company and everything we make is reusable, high-quality and absolutely affordable. Our values in eco sustainability motivates us to create earth friendly products with purpose that appeal to everyone. By making better decisions with the planet in mind, collectively we can make a difference.
            </p>
          </div>
        </>
      ) : (
        renderCategoryComponent()
      )}
    </div>
  );
}
