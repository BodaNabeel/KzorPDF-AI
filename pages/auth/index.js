// import supabase from "@/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import supabase from "../../config/supabaseClient";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function Auth() {
  const supabaseClient = useSupabaseClient();

  const createUser = async () => {
    await supabase.auth.signUp({
      email: "bodanabeel001@gmail.com",
      password: "ProductionTest123",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  const signInUser = async () => {
    await supabaseClient.auth.signInWithPassword({
      // email: "bodanabeel001@gmail.com",
      email: "nabeelboda0@gmail.com",
      password: "ProductionTest123",
    });
  };

  const signOutUser = async () => {
    await supabaseClient.auth.signOut();
  };
  const getUser = async () => {
    const user = await supabaseClient.auth.getUser();
    console.log(user);
  };

  const read_and_write_data = async () => {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    const { data } = await supabaseClient
      .from("folder")
      .select()
      .eq("user_id", user.id);
    const { eror } = await supabaseClient
      .from("folder")
      .insert({ folder_name: "Mathematics" });
    console.log(data);
  };
  const create_folder = async () => {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    const { error } = await supabaseClient
      .from("folder")
      .insert({ folder_name: "Chemistry 28898" });
    console.log(error);
  };
  const create_document = async () => {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    const { data } = await supabaseClient
      .from("folder")
      .select("folder_id")
      .eq("user_id", user.id);
    const { error } = await supabaseClient.from("document").insert({
      document_name: "Lecture 01",
      reference_folder: data[0].folder_id,
    });
  };
  const create_chat = async () => {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    const { data } = await supabaseClient
      .from("document")
      .select()
      .eq("user_id", user.id);
    const { error } = await supabaseClient.from("chat").insert({
      message: "Hey there! I am testing my supabase backend.",
      is_user: true,
      document_id: data[0].document_id,
    });
  };
  const create_bookmark = async () => {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    const { data } = await supabaseClient
      .from("document")
      .select()
      .eq("user_id", user.id);
    const { error } = await supabaseClient.from("bookmark").insert({
      bookmark_text: "Testing the bookmark?!",
      document_id: data[0].document_id,
    });
  };
  return (
    <>
      <div>
        <h1> Creating user section</h1>
        <button onClick={createUser} className="border-2 border-black">
          Create a user
        </button>
      </div>
      <div>
        <h1> Login user section</h1>
        <button onClick={signInUser} className="border-2 border-black">
          Login a user
        </button>
      </div>
      <div>
        <h1> Logout user section</h1>
        <button onClick={signOutUser} className="border-2 border-black">
          Logout
        </button>
        <button onClick={getUser}>Show user</button>
      </div>
      <div className="flex flex-col">
        <h2>Testing Database</h2>
        <button onClick={read_and_write_data}>read_and_write_data</button>
        <button onClick={create_folder}>Create a folder</button>
        <button onClick={create_document}>Create a document</button>
        <button onClick={create_chat}>Create chat</button>
        <button onClick={create_bookmark}>Create bookmark</button>
      </div>
    </>
  );
}
