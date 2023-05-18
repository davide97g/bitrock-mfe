import { Button, ButtonProps } from "@mui/material";

export const MyButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
