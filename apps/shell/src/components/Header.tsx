import { useNavigate } from "react-router-dom";
import { MyButton } from "ui";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <MyButton variant="contained" onClick={() => navigate("/")}>
        Home
      </MyButton>
      <MyButton
        variant="contained"
        color="secondary"
        onClick={() => navigate("/shop")}
      >
        Shop
      </MyButton>
    </div>
  );
}
