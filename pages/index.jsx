import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  return (
    <>
      <section className="p-4 w-full max-w-[1000px] bg-stone-800 rounded flex flex-col gap-4 items-center shadow-xl shadow-stone-900/25">
        <ul className="flex flex-col items-center gap-2">
          <li>
            <Link href="/hechizos">
              <a className="underline">Hechizos</a>
            </Link>
          </li>
          <li>
            <Link href="/meritos">
              <a className="underline">Meritos</a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
