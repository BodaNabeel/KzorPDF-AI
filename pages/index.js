import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default function Home() {
  return <h1>Hello</h1>;
}

export async function getServerSideProps(ctx) {
  const supabase = createPagesServerClient(ctx);
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
      redirect: {
        permanent: false,
        destination: "/auth",
      },
    };
  }
}
