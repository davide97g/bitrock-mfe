import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  Typography,
} from "@mui/material";
import { MyButton } from "./Button";

type Props = CardProps & {
  itemId: string;
  image: string;
  description: string;
  price: number;
  addToCart: (itemId: string) => void;
};

export const ItemCard = ({
  itemId,
  title,
  image,
  description,
  price,
  addToCart,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {price} $
        </Typography>
      </CardContent>
      <CardActions>
        <MyButton size="small" onClick={() => addToCart(itemId)}>
          Add to Cart
        </MyButton>
      </CardActions>
    </Card>
  );
};
