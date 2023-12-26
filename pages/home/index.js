import { DUMMY_DATA } from "../../DUMMY_DATA";
import HomePage from "../../components/home/Home";
import NavbarLayout from "../../layout/NavbarLayout";
export default function Home(props) {
  const { data } = props;
  return (
    <NavbarLayout>
      <HomePage data={data} />
    </NavbarLayout>
  );
}

export const getStaticProps = async () => {
  const data = DUMMY_DATA;
  return {
    props: { data },
  };
};
