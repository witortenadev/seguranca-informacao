import React, { ReactNode, ElementType } from "react";
import Image from "next/image";
import photo from "@/public/photo.webp";
// Importando ícones da react-icons para "adicionar o molho"
import { FaReact, FaNodeJs, FaBrain } from "react-icons/fa";
import { BsFillPersonBadgeFill } from "react-icons/bs";

// --- Typescript Interface para Props do SkillCard ---
interface SkillCardProps {
  icon: ElementType;
  title: string;
  children: ReactNode;
  iconColor: string;
}

// --- Sub-componente SkillCard ---
const SkillCard = ({
  icon: Icon,
  title,
  children,
  iconColor,
}: SkillCardProps) => (
  <div className="bg-background border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-4 mb-3">
      <Icon className={iconColor} size={28} />
      <h4 className="text-xl font-semibold text-foreground">{title}</h4>
    </div>
    <p className="text-muted-foreground">{children}</p>
  </div>
);

// --- Componente Principal (Atualizado) ---
export default function AboutSection() {
  return (
    <>
      <header className="relative text-center pt-20 bg-[url(/coding.jpg)] py-20 bg-cover bg-center text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Conteúdo */}
        <div className="relative z-10">
          <BsFillPersonBadgeFill
            className="mx-auto text-primary-accent"
            size={48}
          />
          <h1 className="max-w-screen-lg mx-auto text-4xl font-extrabold mt-4">
            Sobre mim e o curso de Ciência da Computação
          </h1>
          <p className="text-xl mt-4 text-neutral-200 max-w-3xl mx-auto px-4">
            Um resumo sobre quem eu sou e o que aprendemos no curso de Ciência
            da Computação na UniFil.
          </p>
        </div>
      </header>
      <section className="w-full bg-background text-foreground py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 my-8">
            {/* Imagem com sombra e transição */}
            {/* Informações de Título */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
                Witor Tenã
              </h1>
              <h3 className="text-lg sm:text-xl text-muted-foreground mb-8">
                Estudante de Ciência da Computação — UniFil
              </h3>
            </div>
            <div className="h-40 w-40 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform5">
              <Image
                alt="Foto de Witor Tenã"
                className="object-cover h-full w-full"
                src={photo}
                width={160}
                height={160}
              />
            </div>
          </div>

          {/* Seção Sobre mim */}
          <h3 className="text-lg font-bold sm:text-xl text-left text-muted-foreground mb-4 pb-2">
            Sobre mim
          </h3>

          <div className="space-y-6 text-justify sm:text-lg leading-relaxed text-foreground/90">
            <p>
              Sou um estudante apaixonado por tecnologia. Desde que comecei a
              programar, percebi o quanto gosto de entender como as coisas
              funcionam por trás das telas. Atualmente, foco em aprimorar minhas
              habilidades no desenvolvimento <b>frontend e backend</b>,
              trabalhando com tecnologias como <b>React</b>, <b>Node.js</b> e{" "}
              <b>Express.js</b>.
            </p>

            <p>
              Além da programação, gosto de explorar novas ideias, aprender
              sobre inteligência artificial e contribuir para projetos que
              possam gerar impacto real. Busco sempre equilibrar o aprendizado
              técnico com o desenvolvimento pessoal e criativo.
            </p>
          </div>
        </div>

        {/* Grid de Habilidades/Interesses preenchido */}
        <div className="max-w-screen-lg mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <SkillCard icon={FaReact} title="Frontend" iconColor="text-blue-500">
            Foco em criar interfaces responsivas e dinâmicas com React, Next.js
            e Tailwind CSS.
          </SkillCard>
          <SkillCard icon={FaNodeJs} title="Backend" iconColor="text-green-500">
            Construindo APIs RESTful e gerenciando lógica de servidor com
            Node.js e Express.js.
          </SkillCard>
          <SkillCard
            icon={FaBrain}
            title="Inteligência Artificial"
            iconColor="text-purple-500"
          >
            Explorando conceitos de machine learning e IA para aplicar em
            projetos futuros.
          </SkillCard>
        </div>
      </section>
    </>
  );
}
