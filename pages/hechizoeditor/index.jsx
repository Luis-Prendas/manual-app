import { useRef } from "react";

const HechizoEditor = () => {
  const slug = useRef();
  const handleChange = (e) => {
    slug.current.value = e.target.value
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  return (
    <section className="bg-stone-800 flex flex-col p-4">
      <p className="text-xl w-full text-center border-b">Editor de Hechizos</p>
      <form
        className="flex flex-col gap-4 p-4 text-stone-800 w-[300px]"
        method="post"
        action={process.env.NEXT_PUBLIC_URL + "/api/hechizos"}
      >
        <input
          onChange={handleChange}
          className="p-2 w-full"
          name="name"
          type="text"
          placeholder="Nombre"
          required
        />
        <input
          ref={slug}
          className="p-2 w-full placeholder:text-stone-800 cursor-not-allowed"
          name="slug"
          type="text"
          placeholder="Slug..."
          disabled
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
        <select name="alcance" className="p-2 w-full" required>
          <option disabled selected className="text-[#999]">
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
        <select name="alma" className="p-2 w-full" required>
          <option disabled selected className="text-[#999]">
            Alma
          </option>
          <option value="Sin Definir">Sin Definir</option>
          <option value="Azul">Azul</option>
          <option value="Blanca">Blanca</option>
          <option value="Negra">Negra</option>
        </select>
        <input
          className="p-2 w-full"
          name="valor"
          type="number"
          placeholder="Valor (Oro)"
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
          required
        />
        <button className="bg-white">ENVIAR</button>
      </form>
    </section>
  );
};

export default HechizoEditor;
