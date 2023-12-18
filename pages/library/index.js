import Library from "../../components/library/Library";
import NavbarLayout from "../../layout/NavbarLayout";
export default function Books({ overlay, setOverlay }) {
  return (
    <NavbarLayout>
      {/* <section className="   w-[90%] mt-20  mx-auto"> */}
      <Library />
      {/* </section> */}
    </NavbarLayout>
  );
}
