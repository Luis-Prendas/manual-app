import Link from "next/link";
import { useState } from "react";
import Section from "../../components/Section";

const HechizoEditor = () => {
  return (
    <Section>
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
      <Link href='/'>
          <a className="absolute top-0 left-4 text-5xl opacity-50 hover:opacity-100">
            ‹
          </a>
        </Link>
    </Section>
  );
};

export default HechizoEditor;
