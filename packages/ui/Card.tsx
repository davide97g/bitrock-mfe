import { Card, CardProps } from "@mui/material";

export const MyCard = ({ children, ...props }: CardProps) => {
  return <Card {...props}>{children}</Card>;
};
