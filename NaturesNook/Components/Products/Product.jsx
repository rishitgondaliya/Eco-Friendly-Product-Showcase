import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Homeware from './Homeware/Homeware';
import Soaps from './Soaps/Soaps'

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const categories = [
    {
      category: "homeware",
      name: "Homeware",
      src: "/src/assets/category/homeware.webp",
    },
    {
      category: "onthego",
      name: "On-The-Go",
      src: "/src/assets/category/onthego.webp",
    },
    {
      category: "zerowaste",
      name: "Zero Waste Bathroom",
      src: "/src/assets/category/zerowaste.webp",
    },
    {
      category: "soaps",
      name: "Natural Soaps",
      src: "/src/assets/category/soaps.webp",
    },
    {
      category: "straws",
      name: "Custom Eco-Friendly Products",
      src: "/src/assets/category/straw.webp",
    },
  ];

  const filteredImages = selectedCategory
    ? categories.filter((image) => image.category === selectedCategory)
    : [];

  return (
    <div className="product-page">
      {!selectedCategory ? (
        <div className="my-12 p-4 text-xl text-center text-white" style={{ backgroundColor: "#036570" }}>
          <p className="w-3/4 mx-auto">
          Nature&apos;s nook&apos; philosophy is to inspire people to see the beauty & purpose in nature. We create earth-friendly and functional goods sourced directly from independent artisans & makers from all over the world. We believe in fair and honest manufacturing and care deeply about building relationships with the local communities that we work alongside.
          </p>
        </div>
      ) : null}
      {!selectedCategory ? (
        <div className="categories flex flex-wrap justify-center my-4">
          {categories.map((cat, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 250,
                margin: 2,
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: 10,
                },
              }}
              onClick={() => setSelectedCategory(cat.category)}
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
          <div className="my-12 p-4 text-xl text-center text-white" style={{ backgroundColor: "#036570" }}>
            <p className="w-3/4 mx-auto">
            Nature&apos;s nook is a socially responsible website and everything we display is reusable, high-quality and absolutely affordable. Our values in eco sustainability motivates us to create earth friendly products with purpose that appeal to everyone. By making better decisions with the planet in mind, collectively we can make a difference.
            </p>
          </div>
        </div>
      ) : selectedCategory === "soaps" ? (
        <Soaps onBack={() => setSelectedCategory(null)} />
      ) : (
        <div className="products flex flex-wrap justify-evenly items-center m-8 p-8">
          {filteredImages.map((image, index) => (
            <Card key={index} sx={{ maxWidth: 300, margin: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image.src}
                  alt={image.name}
                />
                <CardContent
                  sx={{ padding: 1, maxHeight: 50, overflow: "hidden" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: 22,
                      marginBottom: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {image.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ padding: 1 }}>
                <Button size="small" color="primary">
                  See detail
                </Button>
              </CardActions>
            </Card>
          ))}
          <Button
            variant="outlined"
            onClick={() => setSelectedCategory(null)}
            sx={{ marginTop: 2 }}
          >
            Back to Categories
          </Button>
        </div>
      )}
    </div>
  );
}
