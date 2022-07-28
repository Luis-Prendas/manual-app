import { useState } from "react";

const AccordionHechizo = ({ accordionData }) => {
  const [accordionActive, setAccordionActive] = useState(false);

  return (
    <>
      <div className="w-full border rounded max-w-[800px]">
        <p
          className="flex p-4 justify-between w-full cursor-pointer font-semibold hover:font-bold hover:bg-stone-900 transition-all"
          onClick={() => setAccordionActive((prev) => !prev)}
        >
          {accordionData.name}
          <span className="select-none">{accordionActive ? "-" : "+"}</span>
        </p>
        {accordionActive && (
          <div className="flex flex-wrap text-center justify-center gap-4 p-4">
            <div className="w-1/3 max-w-[300px] flex flex-col">
              <span className="border-b border-stone-500 font-bold">REQUISITO</span>
              <span className="py-2">{accordionData.requisito}</span>
            </div>
            <div className="w-1/3 max-w-[300px] flex flex-col">
              <span className="border-b border-stone-500 font-bold">COSTE</span>
              <span className="py-2">{accordionData.coste}</span>
            </div>
            <div className="w-1/3 max-w-[300px] flex flex-col">
              <span className="border-b border-stone-500 font-bold">ALCANCE</span>
              <span className="py-2">{accordionData.alcance}</span>
            </div>
            <div className="w-1/3 max-w-[300px] flex flex-col">
              <span className="border-b border-stone-500 font-bold">VALOR</span>
              <span className="py-2">{accordionData.valor}</span>
            </div>
            <div className="w-1/3 max-w-[300px] flex flex-col">
              <span className="border-b border-stone-500 font-bold">ALMA</span>
              <span className="py-2">{accordionData.alma}</span>
            </div>
            <div className="w-1/3 max-w-[300px] flex flex-col">
              <span className="border-b border-stone-500 font-bold">ACCION</span>
              <span className="py-2">{accordionData.accion}</span>
            </div>
            <div className="w-full flex flex-col">
              <span className="border-b border-stone-500 font-bold">DESCRIPCION</span>
              <span className="py-2">{accordionData.desc}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionHechizo;
