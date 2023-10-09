import supabase from "@/config/supabaseClient";
import { useEffect } from "react";

export default function Auth() {
  const createUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "bodanabeel001@gmail.com",
      password: "ProductionTest123",
    });
    error ? console.log(error) : console.log(data);
  };
  const signInUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "bodanabeel001@gmail.com",
      password: "ProductionTest123",
    });
    error ? console.log(error) : console.log(data);
  };
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
  };
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
  };
  useEffect(() => {
    getUser();
  }, []);

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
      </div>
    </>
  );
}
