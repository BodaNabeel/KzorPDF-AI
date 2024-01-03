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
    .eq("folder_id", selectedFolder);

  if (documentDB.length === 0) {
    const { data: dbData, error: db_error } = await supabaseClient
      .from("document")
      .upsert({
        document_name: file.name,
        document_path: formattedFileName,
        folder_id: selectedFolder,
      })
      .select()
      .eq("document_path", formattedFileName)
      .eq("user_id", user.id);
    if (dbData) {
      const { data, error } = await supabaseClient.storage
        .from(bucket)
        .upload(
          `${user.id}/${dbData[0]?.folder_id}/${formattedFileName}`,
          file
        );

      return {
        documentPath: formattedFileName,
        documentID: dbData[0]?.document_id,
        folderID: selectedFolder,
      };
    }
  } else {
    return false;
  }
};

export const deleteFolder = async (folderID) => {
  const res = await fetch("/api/folder", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      folder_id: folderID,
    }),
  });
  return res;
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
      folder_id: folderID,
    }),
  });
  return res;
};
