import Link from "next/link";
import { useState } from "react";

const HechizoEditor = () => {
  return (
    <section className="bg-stone-800 w-full max-w-[1000px] flex flex-col items-center p-4 gap-4">
      <p className="text-4xl font-semibold w-full text-center border-b">
        Editor de Hechizos
      </p>
      <Link href="/editor/hechizo/crear">
        <a className="underline hover:font-semibold">Crear un hechizo</a>
      </Link>
      <Link href="/editor/hechizo/editar">
        <a className="underline hover:font-semibold">Editar un hechizo</a>
      </Link>
      <p className="text-4xl font-semibold w-full text-center border-b">
        Editor de Meritos
      </p>
      <Link href="/editor/merito/crear">
        <a className="underline hover:font-semibold">Crear un merito</a>
      </Link>
      <Link href="/editor/merito/editar">
        <a className="underline hover:font-semibold">Editar un merito</a>
      </Link>
    </section>
  );
};

export default HechizoEditor;
