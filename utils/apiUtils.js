import formatFilename from "./formatString";

const bucket = "kzor";

export const fetchFolderData = async () => {
  const response = await fetch("/api/folder", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const storeFileToStorage = async (
  file,
  supabaseClient,
  selectedFolder
) => {
  const formattedFileName = formatFilename(file.name);

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  const { data: documentDB, error: documentDBError } = await supabaseClient
    .from("document")
    .select()
    .eq("user_id", user.id)
    .eq("document_path", formattedFileName)
    .eq("collection_id", selectedFolder);
  if (documentDBError) {
    return { error: documentDBError };
  }
  if (documentDB?.length === 0) {
    const { data: storageData, error: storageError } =
      await supabaseClient.storage
        .from(bucket)
        .upload(`${user.id}/${selectedFolder}/${formattedFileName}`, file);

    if (storageError) {
      return { error: storageError.message };
    } else {
      const { data: dbData, error: dbError } = await supabaseClient
        .from("document")
        .upsert({
          document_name: file.name,
          document_path: formattedFileName,
          collection_id: selectedFolder,
        })
        .select()
        .eq("document_path", formattedFileName)
        .eq("user_id", user.id);

      if (dbError) {
        return { error: dbError };
      } else {
        return {
          documentPath: formattedFileName,
          documentID: dbData[0]?.document_id,
          folderID: selectedFolder,
        };
      }
    }
  } else {
    return { error: "File already exist in the selected collection." };
  }
};

export const deleteFolder = async (folderID) => {
  const res = await fetch("/api/collection", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      collection_id: folderID,
    }),
  });
  console.log(res);
  return res.status;
};

export const deleteFileFromStorageDB = async (
  folderID,
  documentID,
  documentPath
) => {
  const res = await fetch("/api/document", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document_id: documentID,
      document_path: documentPath,
      collection_id: folderID,
    }),
  });
  return res.status;
};
