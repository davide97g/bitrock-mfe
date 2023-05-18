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
  price: number;
  quantity: number;
  removeFromCart: (itemId: string) => void;
  changeQuantity: (itemId: string, quantity: number) => void;
};

export const CartItemCard = ({
  itemId,
  title,
  image,
  quantity,
  price,
  removeFromCart,
  changeQuantity,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          x {quantity}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {price} $
        </Typography>
      </CardContent>
      <CardActions>
        <MyButton
          size="small"
          color="error"
          onClick={() => removeFromCart(itemId)}
        >
          Remove
        </MyButton>
        <MyButton
          size="small"
          color="warning"
          onClick={() => changeQuantity(itemId, quantity - 1)}
        >
          - 1
        </MyButton>
        <MyButton
          size="small"
          color="success"
          onClick={() => changeQuantity(itemId, quantity + 1)}
        >
          +1
        </MyButton>
      </CardActions>
    </Card>
  );
};
