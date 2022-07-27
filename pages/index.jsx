import useSWR from "swr";
import Accordion from "../components/Accordion";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <section className="p-4 bg-stone-800 rounded flex flex-col gap-4 items-center">
        {data.map((item) => (
          <Accordion key={item._id} accordionData={item} />
        ))}
      </section>
    </>
  );
};

export default Home;
