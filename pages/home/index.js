import { DUMMY_DATA } from "../../DUMMY_DATA";
import HomePage from "../../components/home/Home";
import NavbarLayout from "../../layout/NavbarLayout";
export default function Home(props) {
  return (
    <NavbarLayout>
      <HomePage />
    </NavbarLayout>
  );
}
