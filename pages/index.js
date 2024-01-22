import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { DUMMY_DATA } from "../../DUMMY_DATA";
import HomePage from "../../components/home/Home";
import NavbarLayout from "../../layout/NavbarLayout";
import { fetchFolderData } from "../../utils/apiUtils";
import { supabase } from "../../config/supabaseClient";
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
