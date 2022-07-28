import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Editar = () => {
  const { data } = useSWR("/api/meritos", fetcher);
  return (
    <section className="bg-stone-800 w-full max-w-[1000px] flex flex-col items-center p-4 gap-4">
      <p className="text-4xl font-semibold w-full text-center border-b">Editar Meritos</p>
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
    </section>
  );
};

export default Editar;
