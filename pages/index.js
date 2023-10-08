import { useEffect, useState } from "react";
import supabase from "/config/supabaseClient";

export default function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [documents, setDocuments] = useState(null);
  useEffect(() => {
    const fetchDocuments = async () => {
      const { data, error } = await supabase.from("document").select();
      if (error) {
        setFetchError("Could not fetch documents.");
        setDocuments(null);
        console.log(error);
      }
      if (data) {
        console.log(data);
        setDocuments(data);
        setFetchError(null);
      }
    };
    fetchDocuments();
  }, []);

  return <h1>Hello</h1>;
}
