import useSWR from "swr";
import Link from "next/link";
import Section from "../../../components/Section";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Editar = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  return (
    <Section>
      <p className="text-4xl font-semibold w-full text-center underline">
        Editar Hechizo
      </p>
      <ul className="flex flex-col gap-4 items-center">
        {data &&
          data.map((item) => (
            <li
              key={item._id}
              className="hover:scale-110 hover:underline text-2xl font-semibold"
            >
              <Link href={`/editor/hechizo/${item._id}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
      </ul>
      <Link href="/">
        <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
          ‹
        </a>
      </Link>
    </Section>
  );
};

export default Editar;
