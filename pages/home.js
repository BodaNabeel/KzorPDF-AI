import { DUMMY_DATA } from "@/DUMMY_DATA"
import HomePage from "../components/home/Home"
export default function Home(props) {
    const {data} = props
    return <section className=" min-h-screen max-h-max lg:mx-20 lg:my-10">
        <HomePage data={data}/>
    </section>
}

export const getStaticProps = async () => {
    const data = DUMMY_DATA
    return {
        props: {data}
    }
}