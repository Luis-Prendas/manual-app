const Crear = () => {
  return (
    <section className="bg-stone-800 w-full max-w-[1000px] flex flex-col items-center p-4 gap-4">
      <div className="w-full">
        <p className="text-4xl font-semibold w-full text-center border-b">
          Crear merito
        </p>
        <form
          className="flex flex-col gap-4 p-4 text-stone-800 w-full max-w-[800px]"
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
          <button className="bg-white">CREAR</button>
        </form>
      </div>
    </section>
  );
};

export default Crear;
