import { DUMMY_DATA } from "@/DUMMY_DATA"
import HomePage from "../components/home/Home"
export default function Home(props) {
    const {data} = props
    return <section className=" min-h-screen max-h-max w-[60%] lg:mt-32 mx-auto">
        <HomePage data={data}/>
    </section>
}

export const getStaticProps = async () => {
    const data = DUMMY_DATA
    return {
        props: {data}
    }
}