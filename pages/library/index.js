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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: folderData, error: folderDataError } = await supabase
    .from("folder")
    .select()
    .eq("user_id", user.id);
  const { data: documentData, error: documentDataError } = await supabase
    .from("document")
    .select()
    .eq("user_id", user.id);

  return {
    props: {
      folderData,
      documentData,
    },
  };
}
