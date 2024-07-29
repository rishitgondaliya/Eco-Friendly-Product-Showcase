/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const images = [
  {
    src: "/src/assets/soaps/bodybar-soap.webp",
    category: "soaps",
    name: "Eco-friendly Coconut Bowls & Spoons",
  },
  {
    src: "/src/assets/soaps/charcoal-soap.webp",
    category: "soaps",
    name: "Dark Wood Cutlery Set",
  },
  {
    src: "/src/assets/soaps/citrus-soap.webp",
    category: "soaps",
    name: "Natural Bamboo Drinking Cups",
  },
  {
    src: "/src/assets/soaps/coffee-soap.webp",
    category: "soaps",
    name: "Coconut Shell Tea Light Holder Set | Eco-Friendly, Unique & Unusual Tea Light Base",
  },
  {
    src: "/src/assets/soaps/ginger-soap.webp",
    category: "soaps",
    name: "Bamboo Hairbrush | Sustainable Wooden Hair Brushes",
  },
  {
    src: "/src/assets/soaps/lime-soap.webp",
    category: "soaps",
    name: "Replacement Heads for Long Handle Dish Brush",
  },
  {
    src: "/src/assets/soaps/shaving-soap.jpg",
    category: "soaps",
    name: "Kitchen Dish Cloths • All-Purpose Natural Cleaning Cloth",
  },
  {
    src: "/src/assets/soaps/travel-soap.webp",
    category: "soaps",
    name: "Coconut Shell Candle - Toasted Coconut Scent",
  },
];

const Soaps = ({ onBack }) => {
  return (
    <div>
      <div className="disc my-4 p-4 text-center">
        <p>
          Nature&apos;s nook&apos; range of sustainable homeware products are handmade by artisan craftspeople in Vietnam. Add texture and flair to your home and kitchen with a responsibly sourced wooden bowl set, some coconut shell candles or maybe a bamboo cup for smoothies! Our zero waste homeware products are all packaged 100% plastic free using eco-friendly upcycled kraft paper boxes and recycled tissue paper.
        </p>
      </div>
      <div className="products flex flex-wrap justify-evenly items-center m-8 p-8">
        {images.map((image, index) => (
          <Card key={index} sx={{ maxWidth: 300, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image.src}
                alt={image.name}
              />
              <CardContent sx={{ padding: 1, maxHeight: 50, overflow: "hidden" }}>
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
          onClick={onBack}
          sx={{ marginTop: 2 }}
        >
          Back to Categories
        </Button>
      </div>
    </div>
  );
};

export default Soaps;
