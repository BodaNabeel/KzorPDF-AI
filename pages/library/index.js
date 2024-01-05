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

// export async function getServerSideProps(context) {
//   const supabase = createPagesServerClient(context);
//   const user = await supabase.auth.getUser();
//   const user_id = user.data.user.id;

//   const { data: folderData, error: folderDataError } = await supabase
//     .from("folder")
//     .select()
//     .eq("user_id", user_id);
// const { data: documentData, error: documentDataError } = await supabase
//   .from("document")
//   .select()
//   .eq("user_id", user_id);
// if (folderData && !context.query.collection) {
//   context.replace(`?collection=${folderData[0].folder_id}`);
// }
//   // const query = context.query.collection
//   // if (folderData) {
//   //   return {
//   //     redirect: {
//   //       destination: `/library?collection${folderData[0].folder_id}`,
//   //       permanent: false,
//   //     },
//   //   };
//   // }
//   return {
//     props: {
//       folderData,
//       documentData,
//     },
//   };
// }

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

  // Check if folderData is available and if the 'collection' query parameter is not present
  if (folderData.length > 0 && !context.query.collection) {
    // Redirect to the new URL with the 'collection' query parameter
    context.res.writeHead(302, {
      Location: `library/?collection=${folderData[0].folder_id}`,
    });
    context.res.end();

    // Return an empty object for props to avoid any rendering issues
    return { props: {} };
  }

  return {
    props: {
      folderData,
      documentData, // Add your logic for documentData here
    },
  };
}
