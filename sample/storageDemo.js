const uploadFile = async (event) => {
  const file = event.target.files[0];
  const fileName = processString(file.name);
  const bucket = "kzor";
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  // const uniqueFilename = `${timestamp}_${fileName}`;

  // Call Storage API to upload file
  const { data, error } = await supabaseClient.storage
    .from(bucket)
    .upload(`${user.id}/${fileName}`, file);

  if (data) {
    const { error: db_error } = await supabaseClient
      .from("document")
      .insert({ document_name: "Lecture 01", document_path: fileName });
    alert("File uploaded successfully!");
  }
};
const getFile = async () => {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  const { data, error } = await supabaseClient
    .from("document")
    .select()
    .eq("user_id", user.id);

  if (data) {
    const { data: storageData, error: storageDataError } =
      await supabaseClient.storage
        .from(`kzor/${user.id}`)
        .createSignedUrl(data[0].document_path, 3600);
    // (storageData);
    // (data[0].document_path);

    setPdfLink(storageData.signedUrl);
  }

  if (error) error;
};

function processString(inputString) {
  // Convert to lowercase
  let lowercaseString = inputString.toLowerCase();

  // Replace spaces with underscores
  let stringWithUnderscores = lowercaseString.replace(/ /g, "_");

  // Remove special characters using a regular expression
  let stringWithoutSpecialChars = stringWithUnderscores.replace(
    /[^a-z0-9_.]/g,
    ""
  );

  return stringWithoutSpecialChars;
}

const [pdfLink, setPdfLink] = useState();
return (
  <>
    <div>
      <h1>Upload Profile Photo</h1>
      <input type="file" onChange={uploadFile} />
    </div>
    <button onClick={getFile}>get file</button>
    <object data={pdfLink} type="application/pdf" width="100%" height="100%">
      <p>
        Alternative text - include a link <a href={pdfLink}>to the PDF!</a>
      </p>
    </object>
  </>
);
