import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import Library from "../../components/library/Library";
import NavbarLayout from "../../layout/NavbarLayout";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/context";
export default function Lib(props) {
  const { folderData, documentData, selectedFolder } = props;
  const { setFolders, setDocuments } = useContext(DataContext);
  useEffect(() => {
    setFolders(folderData);
    setDocuments(documentData);
  }, []);

  return (
    <NavbarLayout>
      <Library selectedFolder={selectedFolder} />
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

  let selectedFolder;
  if (context.query.id) {
    selectedFolder = context.query.id;
  } else {
    if (folderData[0]?.folder_id === undefined) {
      selectedFolder = null;
    } else {
      selectedFolder = folderData[0]?.folder_id;
    }
  }

  return {
    props: {
      folderData,
      documentData,
      selectedFolder,
    },
  };
}
