import Link from "next/link";
import { useState } from "react";
import Section from "../../components/Section";

const HechizoEditor = () => {
  return (
    <Section>
      <p className="text-4xl font-semibold w-full text-center underline">
        Editor de Hechizos
      </p>
      <Link href="/editor/hechizo/crear">
        <a className="hover:scale-110 hover:underline text-2xl font-semibold">Crear un hechizo</a>
      </Link>
      <Link href="/editor/hechizo/editar">
        <a className="hover:scale-110 hover:underline text-2xl font-semibold">Editar un hechizo</a>
      </Link>
      <p className="text-4xl font-semibold w-full text-center underline">
        Editor de Meritos
      </p>
      <Link href="/editor/merito/crear">
        <a className="hover:scale-110 hover:underline text-2xl font-semibold">Crear un merito</a>
      </Link>
      <Link href="/editor/merito/editar">
        <a className="hover:scale-110 hover:underline text-2xl font-semibold">Editar un merito</a>
      </Link>
      <Link href='/'>
          <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
            ‹
          </a>
        </Link>
    </Section>
  );
};

export default HechizoEditor;
