import Section from "../../../components/Section";
import Link from "next/link";

const Crear = () => {
  return (
    <Section>
      <p className="text-4xl font-semibold w-full text-center underline">
        Crear merito
      </p>
      <form
        className="flex flex-col justify-center items-center gap-4 p-4 text-stone-800 w-full max-w-[500px]"
        method="post"
        action={process.env.NEXT_PUBLIC_URL + "/api/meritos"}
      >
        <input
          className="p-2 w-full"
          name="name"
          type="text"
          placeholder="Nombre"
          required
        />
        <input
          className="p-2 w-full"
          name="coste"
          type="number"
          placeholder="Coste"
          required
        />
        <textarea
          name="desc"
          className="p-2 w-full"
          placeholder="Descripcion"
          required
        />
        <textarea
          name="nota"
          className="p-2 w-full"
          placeholder="Nota (Este campo no es requerido)"
        />
        <button className="bg-white px-8 py-2 rounded-lg">Crear</button>
      </form>
      <Link href="/">
        <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
          ‹
        </a>
      </Link>
    </Section>
  );
};

export default Crear;
