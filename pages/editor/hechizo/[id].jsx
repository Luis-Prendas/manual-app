import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Section from "../../../components/Section";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Editar = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/hechizos/${id}`, fetcher);
  console.log(id);
  return (
    <Section>
      {data && (
        <>
          <p className="text-4xl font-semibold w-full text-center underline">
            Editando hechizo {data.name}
          </p>
          <form
            className="flex flex-col justify-center items-center gap-4 p-4 text-stone-800 w-full max-w-[500px]"
            method="post"
            action={process.env.NEXT_PUBLIC_URL + "/api/hechizos/" + id}
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
            <input
              defaultValue={data.requisito}
              className="p-2 w-full"
              name="requisito"
              type="text"
              placeholder="Requisito ejemplo: 'Alma Azul 50'"
              required
            />
            <input
              defaultValue={data.valor}
              className="p-2 w-full"
              name="valor"
              type="number"
              placeholder="Valor (Oro)"
              required
            />
            <select name="alcance" className="p-2 w-full">
              <option
                value={data.alcance}
                defaultChecked
                className="text-[#999] hidden"
              >
                {data.alcance}
              </option>
              <option value="Sin Definir">Sin Definir</option>
              <option value="5 Metros">5 Metros</option>
              <option value="10 Metros">10 Metros</option>
              <option value="15 Metro">15 Metros</option>
              <option value="20 Metro">20 Metros</option>
              <option value="25 Metros">25 Metros</option>
              <option value="30 Metros">30 Metros</option>
            </select>
            <select name="alma" className="p-2 w-full">
              <option
                value={data.alma}
                defaultChecked
                className="text-[#999] hidden"
              >
                {data.alma}
              </option>
              <option value="Sin Definir">Sin Definir</option>
              <option value="Azul">Azul</option>
              <option value="Blanca">Blanca</option>
              <option value="Negra">Negra</option>
            </select>
            <select name="accion" className="p-2 w-full">
              <option
                value={data.accion}
                defaultChecked
                className="text-[#999] hidden"
              >
                {data.accion}
              </option>
              <option value="Sin Definir">Sin Definir</option>
              <option value="Refleja">Refleja</option>
              <option value="Simple">Simple</option>
            </select>
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
            <button className="bg-white px-8 py-2 rounded-lg">Editar</button>
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
