import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Section from "../../../components/Section";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Editar = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/meritos/${id}`, fetcher);
  return (
    <Section>
      {data && (
        <>
          <p className="text-4xl font-semibold w-full text-center border-b">
            Editando nerito {data.name}
          </p>
          <form
            className="flex flex-col gap-4 p-4 text-stone-800 w-full max-w-[800px]"
            method="post"
            action={process.env.NEXT_PUBLIC_URL + "/api/meritos/" + id}
          >
            <input
              defaultValue={data.name}
              className="p-2 w-full"
              name="name"
              type="text"
              placeholder="Nombre"
              required
            />
            <input
              defaultValue={data.coste}
              className="p-2 w-full"
              name="coste"
              type="number"
              placeholder="Coste (Magia)"
              required
            />
            <textarea
              defaultValue={data.desc}
              name="desc"
              className="p-2 w-full"
              placeholder="Descripcion"
              required
            />
            <textarea
              defaultValue={data.nota}
              name="nota"
              className="p-2 w-full"
              placeholder="Nota (Este campo no es requerido)"
            />
            <button className="bg-white">EDITAR</button>
          </form>
        </>
      )}
      <Link href="/">
        <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
          ‹
        </a>
      </Link>
    </Section>
  );
};

export default Editar;
