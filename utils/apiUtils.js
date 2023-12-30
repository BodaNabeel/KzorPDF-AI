import formatFilename from "./formatString";

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
  const bucket = "kzor";
  const formattedFileName = formatFilename(file.name);
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  const { data, error } = await supabaseClient.storage
    .from(bucket)
    .upload(`${user.id}/${formattedFileName}`, file);

  if (data) {
    console.log(selectedFolder);
    const { error: db_error } = await supabaseClient.from("document").insert({
      document_name: file.name,
      document_path: formattedFileName,
      folder_id: selectedFolder,
    });

    return true;
  }
  if (error) return false;
};
