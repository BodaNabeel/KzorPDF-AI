import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import HomePage from "../../components/home/Home";
import NavbarLayout from "../../layout/NavbarLayout";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/context";

export default function Home(props) {
  const {
    folderData,
    userName,
    documentCount,
    chatCount,
    bookmarkCount,
    collectionCount,
    recentDocuments,
  } = props;
  const {
    setDocumentCount,
    setChatCount,
    setBookmarkCount,
    setCollectionCount,
    setRecentDocuments,
  } = useContext(DataContext);

  useEffect(() => {
    setDocumentCount(documentCount);
    setChatCount(chatCount);
    setBookmarkCount(bookmarkCount);
    setCollectionCount(collectionCount);
    setRecentDocuments(recentDocuments);
  }, []);

  return (
    <NavbarLayout>
      <HomePage folderData={folderData} userName={userName} />
    </NavbarLayout>
  );
}

export async function getServerSideProps(context) {
  const supabase = createPagesServerClient(context);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userName = user.user_metadata.full_name;

  const { data: folderData, error: folderDataError } = await supabase
    .from("collection")
    .select()
    .eq("user_id", user.id);

  const { count: documentCount, error: documentCountError } = await supabase
    .from("document")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: chatCount, error: chatCountError } = await supabase
    .from("chat")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: bookmarkCount, error: bookmarkCountError } = await supabase
    .from("chat")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("is_bookmarked", true);

  const { count: collectionCount, error: collectionCountError } = await supabase
    .from("collection")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { data: documentData, error: documentDataError } = await supabase
    .from("document")
    .select()
    .eq("user_id", user.id)
    .order("id", { ascending: false });

  const recentDocuments = documentData.slice(0, 5);

  return {
    props: {
      folderData,
      userName,
      documentCount,
      chatCount,
      bookmarkCount,
      collectionCount,
      recentDocuments,
    },
  };
}
