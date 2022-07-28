import useSWR from "swr";
import { useRouter } from "next/dist/client/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Editar = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/meritos/${id}`, fetcher);
  return (
    <section className="bg-stone-800 w-full max-w-[1000px] flex flex-col items-center p-4 gap-4">
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
    </section>
  );
};

export default Editar;
