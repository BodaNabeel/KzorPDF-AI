import Image from "next/image";
import SignUp from "../../components/SignUp";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default function Auth() {
  return (
    <main className="flex font-sans h-screen">
      <section className="md:ml-16 md:mt-5 flex flex-col md:w-[50%] ">
        <header className="">
          <h1>Kzor-PDF AI</h1>
        </header>
        <div className="border-y-[2px] border-t-[2px] border-primary-300 h-full flex flex-col justify-center items-center mt-8 mb-16 md:w-[90%]">
          <h2 className="font-bold lg:text-4xl lg:mb-2 text-xl text-primary-700">
            Welcome Back!
          </h2>
          <p className="text-primary-300 lg:font-semibold font-medium lg:w-[60%] w-[90%] text-center">
            Sign up to upload PDFs, chat with AI, and organize smarter. Your
            documents, simplified.
          </p>
          <SignUp />
        </div>
      </section>

      <section className="md:w-[50%] relative">
        <Image
          className="object-cover object-center h-full w-full"
          src="/images/abstract.jpg"
          layout="fill"
          alt="Image of Abstract"
        />
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const supabase = createPagesServerClient(context);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
