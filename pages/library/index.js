import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import Library from "../../components/library/Library";
import NavbarLayout from "../../layout/NavbarLayout";
import supabase from "../../config/supabaseClient";
export default function Lib(props) {
  const { folderData } = props;
  return (
    <NavbarLayout>
      <Library folderData={folderData} />
    </NavbarLayout>
  );
}

export async function getServerSideProps(context) {
  const supabase = createPagesServerClient(context);
  const user = await supabase.auth.getUser();
  const user_id = user.data.user.id;

  try {
    const { data: folderData, error: folderDataError } = await supabase
      .from("folder")
      .select()
      .eq("user_id", user_id);
    if (folderData.length === 0) {
      return {
        props: {
          error: "No folder found.",
        },
      };
    } else {
      return {
        props: {
          folderData,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}
