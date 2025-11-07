import React from "react";
import {
  BsJournalBookmark,
  BsJournalText,
  BsImage,
  BsCodeSlash,
} from "react-icons/bs";

export default function Referrals() {
  const articles = [
    {
      href: "https://www.todamateria.com.br/citacao-direta-e-indireta/",
      title: "Toda Matéria: O que é Citação (e tipos)",
      desc: "Referência para as definições de citações direta e indireta.",
    },
    {
      href: "https://www.todamateria.com.br/como-fazer-resumo/",
      title: "Toda Matéria: O que é Resumo (e como fazer)",
      desc: "Referência para a definição e estrutura de resumos.",
    },
    {
      href: "https://www.todamateria.com.br/resenha/",
      title: "Toda Matéria: O que é Resenha (e tipos)",
      desc: "Referência para o conceito e tipos de resenhas.",
    },
  ];

  const images = [
    {
      href: "https://pixabay.com/pt/photos/codifica%c3%a7%c3%a3o-computador-hacker-1841550/",
      title: "Pixabay",
      desc: "Imagem de início de página 1.",
    },
    {
      href: "https://pixabay.com/pt/photos/escrit%c3%b3rio-impressora-hardware-2815634/",
      title: "Pixabay",
      desc: "Imagem de início de página 2.",
    },
    {
      href: "https://pixabay.com/pt/photos/%c3%b3culos-livro-telefone-iphone-1052023/",
      title: "Pixabay",
      desc: "Imagem de início de página 3.",
    },
    {
      href: "https://pixabay.com/pt/photos/roma-vaticano-lugar-s%c3%a3o-pedro-5064562/",
      title: "Pixabay",
      desc: "Imagem de início de página 4.",
    },
  ];

  const tools = [
    {
      href: "https://react.dev/",
      title: "React",
      desc: "Biblioteca de desenvolvimento Frontend",
    },
    {
      href: "https://react-icons.github.io/react-icons/",
      title: "React Icons",
      desc: "Biblioteca de icones.",
    },
    {
      href: "https://nextjs.org/",
      title: "Next.js",
      desc: "Framework de desenvolvimento WEB",
    },
    {
      href: "https://tailwindcss.com/",
      title: "TailwindCSS",
      desc: "Biblioteca de CSS.",
    },
    {
      href: "https://code.visualstudio.com/",
      title: "Visual Studio Code",
      desc: "Editor de código IDE.",
    },
    {
      href: "https://netlify.com/",
      title: "Netlify",
      desc: "Para hospedagem.",
    },
    {
      href: "https://github.com/",
      title: "GitHub",
      desc: "Para controle de versão.",
    },
  ];

  return (
    <>
      {/* HERO SECTION: Mesmo estilo do exemplo */}
      <header className="relative text-center pt-20 bg-[url(/uni.jpg)] py-20 bg-cover bg-center text-white">
        {/* Imagem de fundo (substitua /referencias.jpg pela sua imagem) */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Conteúdo */}
        <div className="relative z-10">
          <BsJournalBookmark
            className="mx-auto text-primary-accent"
            size={48}
          />
          <h1 className="max-w-screen-lg mx-auto text-4xl font-extrabold mt-4">
            Referências do Nosso Conteúdo
          </h1>
          <p className="text-xl mt-4 text-neutral-200 max-w-3xl mx-auto px-4">
            Sites, imagens e ferramentas utilizadas ao longo do desenvolvimento
            deste projeto.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT SECTION: Fundo principal */}
      <section className="w-full bg-primary-background text-primary-foreground py-20 px-6 sm:px-10 lg:px-24">
        {/* Container para limitar a largura */}
        <div className="max-w-5xl mx-auto">
          {/*
            Usamos um layout 'space-y-12' para separar as seções
            e o estilo 'bg-secondary-background' para os cards de categoria,
            similar ao exemplo
          */}
          <div className="space-y-12">
            {/* Seção Artigos e Documentação */}
            <section className="bg-secondary-background text-secondary-foreground p-6 sm:p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BsJournalText className="text-primary-accent" size={28} />
                Artigos e Documentação
              </h2>
              <ul className="list-none space-y-4">
                {articles.map((item, i) => (
                  <li
                    key={i}
                    className="bg-primary-foreground/5 p-4 rounded-lg"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-primary-accent hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-primary-foreground/90">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção Imagens e Ícones */}
            <section className="bg-secondary-background text-secondary-foreground p-6 sm:p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BsImage className="text-primary-accent" size={28} />
                Imagens e Ícones
              </h2>
              <ul className="list-none space-y-4">
                {images.map((item, i) => (
                  <li
                    key={i}
                    className="bg-primary-foreground/5 p-4 rounded-lg"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-primary-accent hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-primary-foreground/90">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção Ferramentas e Bibliotecas */}
            <section className="bg-secondary-background text-secondary-foreground p-6 sm:p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BsCodeSlash className="text-primary-accent" size={28} />
                Ferramentas e Bibliotecas
              </h2>
              <ul className="list-none space-y-4">
                {tools.map((item) => (
                  <li
                    key={item.title}
                    className="bg-primary-foreground/5 p-4 rounded-lg"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-primary-accent hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-primary-foreground/90">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
