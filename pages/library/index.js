import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import Library from "../../components/library/Library";
import NavbarLayout from "../../layout/NavbarLayout";
export default function Lib(props) {
  const { folderData, documentData } = props;
  return (
    <NavbarLayout>
      <Library folderData={folderData} documentData={documentData} />
    </NavbarLayout>
  );
}

export async function getServerSideProps(context) {
  const supabase = createPagesServerClient(context);
  const user = await supabase.auth.getUser();
  const user_id = user.data.user.id;

  const { data: folderData, error: folderDataError } = await supabase
    .from("folder")
    .select()
    .eq("user_id", user_id);
  const { data: documentData, error: documentDataError } = await supabase
    .from("document")
    .select()
    .eq("user_id", user_id);

  return {
    props: {
      folderData,
      documentData,
    },
  };
}
