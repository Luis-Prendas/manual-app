import useSWR from "swr";
import Spinner from "../../components/Spinner";
import AccordionHechizo from "../../components/AccordionHechizo";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Hechizos = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  return (
    <>
      <section className="p-4 w-full max-w-[1000px] bg-stone-800 rounded flex flex-col gap-4 items-center shadow-xl shadow-stone-900/25">
        {data ? (
          data.map((item) => <AccordionHechizo key={item._id} accordionData={item} />)
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
};

export default Hechizos;
