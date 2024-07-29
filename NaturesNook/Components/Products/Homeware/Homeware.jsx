import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const images = [
  {
    src: "/src/assets/homemade/homeware1.webp",
    category: "homeware",
    name: "Eco-friendly Coconut Bowls & Spoons",
  },
  {
    src: "/src/assets/homemade/homeware2.webp",
    category: "homeware",
    name: "Dark Wood Cutlery Set",
  },
  {
    src: "/src/assets/homemade/homeware3.webp",
    category: "homeware",
    name: "Natural Bamboo Drinking Cups",
  },
  {
    src: "/src/assets/homemade/homeware4.webp",
    category: "homeware",
    name: "Coconut Shell Tea Light Holder Set | Eco-Friendly, Unique & Unusual Tea Light Base",
  },
  {
    src: "/src/assets/homemade/homeware5.webp",
    category: "homeware",
    name: "Bamboo Hairbrush | Sustainable Wooden Hair Brushes",
  },
  {
    src: "/src/assets/homemade/homeware6.jpg",
    category: "homeware",
    name: "Replacement Heads for Long Handle Dish Brush",
  },
  {
    src: "/src/assets/homemade/homeware7.jpg",
    category: "homeware",
    name: "Kitchen Dish Cloths • All-Purpose Natural Cleaning Cloth",
  },
  {
    src: "/src/assets/homemade/homeware8.jpg",
    category: "homeware",
    name: "Bamboo Snack & Dip Bowls",
  },
  {
    src: "/src/assets/homemade/homeware9.webp",
    category: "homeware",
    name: "Water Bottle Brush",
  },
  {
    src: "/src/assets/homemade/homeware10.webp",
    category: "homeware",
    name: "Bamboo Salad Server Set | Salad Tongs (Spoon & Fork)",
  },
  {
    src: "/src/assets/homemade/homeware11.jpg",
    category: "homeware",
    name: "Long Handle Bamboo Dish Brush",
  },
  {
    src: "/src/assets/homemade/homeware12.webp",
    category: "homeware",
    name: "Coconut Shell Candle - Toasted Coconut Scent",
  },
  {
    src: "/src/assets/homemade/homeware13.webp",
    category: "homeware",
    name: "Coconut Cups | Natural Coco Shell Cup",
  },
];

const Homeware = ({ onBack }) => {
  return (
    <div>
      <div className="disc my-4 p-4 text-center">
        <p>
          Jungle Culture’s range of sustainable homeware products are handmade by artisan craftspeople in Vietnam. Add texture and flair to your home and kitchen with a responsibly sourced wooden bowl set, some coconut shell candles or maybe a bamboo cup for smoothies! Our zero waste homeware products are all packaged 100% plastic free using eco-friendly upcycled kraft paper boxes and recycled tissue paper.
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

export default Homeware;
