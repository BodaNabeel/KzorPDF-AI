import Image from "next/image";
import SignUp from "../../components/SignUp";

export default function Auth() {
  return (
    <main className="flex font-sans h-screen">
      <section className="lg:ml-16 lg:mt-5 flex flex-col lg:w-[50%] ">
        <header className="">
          <h1>Company Logo</h1>
        </header>
        <div className="lg:border-y-[2px] border-t-[2px]    border-primary-300 h-full flex flex-col justify-center items-center mt-8 mb-16 lg:w-[90%]">
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

      <section className="lg:w-[50%] relative">
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
