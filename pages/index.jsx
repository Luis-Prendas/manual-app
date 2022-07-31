import useSWR from "swr";
import Link from "next/link";
import Section from "../components/Section";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  return (
    <>
      <Section>
        <ul className="text-2xl font-semibold flex flex-col items-center gap-4">
          <li className="hover:scale-110 hover:underline">
            <Link href="/hechizos">
              <a>Hechizos</a>
            </Link>
          </li>
          <li className="hover:scale-110 hover:underline">
            <Link href="/meritos">
              <a>Meritos</a>
            </Link>
          </li>
        </ul>
        <Link href="/editor">
          <a className="absolute top-4 right-4 opacity-50 hover:opacity-100">
            Editor
          </a>
        </Link>
      </Section>
    </>
  );
};

export default Home;
