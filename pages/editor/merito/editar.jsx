import useSWR from "swr";
import Link from "next/link";
import Section from "../../../components/Section";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Editar = () => {
  const { data } = useSWR("/api/meritos", fetcher);
  return (
    <Section>
      <p className="text-4xl font-semibold w-full text-center border-b">
        Editar Meritos
      </p>
      <ul className="flex flex-col gap-4 items-center">
        {data &&
          data.map((item) => (
            <li key={item._id}>
              <Link href={`/editor/merito/${item._id}`}>
                <a className="underline hover:font-semibold">{item.name}</a>
              </Link>
            </li>
          ))}
      </ul>
      <Link href='/'>
          <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
            ‹
          </a>
        </Link>
    </Section>
  );
};

export default Editar;
