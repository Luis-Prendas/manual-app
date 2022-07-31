import useSWR from "swr";
import Spinner from "../../components/Spinner";
import AccordionHechizo from "../../components/AccordionHechizo";
import Section from "../../components/Section";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Hechizos = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  return (
    <>
      <Section>
        {data ? (
          data.map((item) => (
            <AccordionHechizo key={item._id} accordionData={item} />
          ))
        ) : (
          <Spinner />
        )}
        <Link href="/">
          <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
            ‹
          </a>
        </Link>
      </Section>
    </>
  );
};

export default Hechizos;
