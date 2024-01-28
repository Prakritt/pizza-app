import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza Co.</Link>
      <p>Prakrit</p>
      <SearchOrder />
    </header>
  );
}

export default Header;
