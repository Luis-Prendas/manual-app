import Section from "../../../components/Section";
import Link from "next/link";

const Crear = () => {
  return (
    <Section>
      <div className="w-full">
        <p className="text-4xl font-semibold w-full text-center border-b">
          Crear Hechizo
        </p>
        <form
          className="flex flex-col gap-4 p-4 text-stone-800 w-full max-w-[800px]"
          method="post"
          action={process.env.NEXT_PUBLIC_URL + "/api/hechizos"}
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
            placeholder="Coste (Magia)"
            required
          />
          <input
            className="p-2 w-full"
            name="requisito"
            type="text"
            placeholder="Requisito ejemplo: 'Alma Azul 50'"
            required
          />
          <input
            className="p-2 w-full"
            name="valor"
            type="number"
            placeholder="Valor (Oro)"
            required
          />
          <select name="alcance" className="p-2 w-full">
            <option
              value="Sin Definir"
              defaultValue
              className="text-[#999] hidden"
            >
              Alcance
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
              value="Sin Definir"
              defaultValue
              className="text-[#999] hidden"
            >
              Alma
            </option>
            <option value="Sin Definir">Sin Definir</option>
            <option value="Azul">Azul</option>
            <option value="Blanca">Blanca</option>
            <option value="Negra">Negra</option>
          </select>
          <select name="accion" className="p-2 w-full">
            <option
              value="Sin Definir"
              defaultValue
              className="text-[#999] hidden"
            >
              Accion
            </option>
            <option value="Sin Definir">Sin Definir</option>
            <option value="Refleja">Refleja</option>
            <option value="Simple">Simple</option>
          </select>
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
          <button className="bg-white">CREAR</button>
        </form>
      </div>
      <Link href="/">
        <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
          ‹
        </a>
      </Link>
    </Section>
  );
};

export default Crear;
