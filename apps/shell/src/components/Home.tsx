import { useNavigate } from "react-router-dom";
import { MyButton } from "ui";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Welcome to "Home"</p>
      <p>This is the appshell</p>
      <MyButton onClick={() => navigate("/shop")}> Shop </MyButton>
    </div>
  );
}
