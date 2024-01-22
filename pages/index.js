import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import HomePage from "../components/home/Home";
import NavbarLayout from "../layout/NavbarLayout";
export default function Home(folderData) {
  return (
    <NavbarLayout>
      <HomePage folderData={folderData} />
    </NavbarLayout>
  );
}

export async function getServerSideProps(context) {
  const supabase = createPagesServerClient(context);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/guest",
      },
    };
  }

  const { data: folderData, error: folderDataError } = await supabase
    .from("folder")
    .select()
    .eq("user_id", user.id);

  return {
    props: {
      folderData,
    },
  };
}
