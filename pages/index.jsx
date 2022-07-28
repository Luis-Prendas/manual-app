import Accordion from "../components/Accordion";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  return (
    <>
      <section className="p-4 w-full max-w-[1000px] bg-stone-800 rounded flex flex-col gap-4 items-center">
        {data &&
          data.map((item) => <Accordion key={item._id} accordionData={item} />)}
      </section>
    </>
  );
};

export default Home;
