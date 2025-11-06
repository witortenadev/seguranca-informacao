import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import {
  BsShieldCheck,
  BsTextWrap,
  BsChatQuoteFill, // Ícone para "Citação"
  BsListCheck, // Ícone para "Resumo"
  BsStarHalf,
  BsArrowLeftRight, // Ícone para "Resenha"
} from "react-icons/bs";
import { SlLink } from "react-icons/sl";

export default function TextsAndReferrals() {
  return (
    <>
      {/* HERO SECTION: Melhorado com um overlay gradiente para melhor legibilidade */}
      <header className="relative text-center pt-20 bg-[url(/oculos.jpg)] py-20 bg-cover bg-center text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Conteúdo */}
        <div className="relative z-10">
          <BsTextWrap className="mx-auto text-primary-accent" size={48} />
          <h1 className="max-w-screen-lg mx-auto text-4xl font-extrabold mt-4">
            Guia para Referências e Tipos Textuais
          </h1>
          <p className="text-xl mt-4 text-neutral-200 max-w-3xl mx-auto px-4">
            Um guia para escrita de resenhas, resumos e citação, com referências
            sendo usadas da forma correta.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT SECTION: Layout mais limpo e focado */}
      <section className="w-full bg-primary-background text-primary-foreground py-20 px-6 sm:px-10 lg:px-24">
        {/* Container para limitar a largura */}
        <div className="max-w-5xl mx-auto">
          {/* Seção de Introdução */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <BsShieldCheck className="text-primary-accent" size={30} />A
              Importância das Referências
            </h2>
            <p className="text-lg mb-10">
              Ao desenvolver qualquer tipo de mídia é necessário informar de
              onde vieram as informações, para que o publico atingido possa
              saber a vericidade da informação e para que saibam onde procurar
              por mais informações e sabem quem gerou as informações.
            </p>
          </div>

          <hr className="my-12 invisible" />

          {/* SEÇÃO DE DIFERENÇAS: Agora em um grid de 3 colunas */}
          <h2 className="text-3xl font-bold mb-8 text-center">
            Citações, Resumos e Resenhas
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card Citação */}
            <div className="bg-primary-foreground/5 p-6   border-t-4 border-primary-accent">
              <BsChatQuoteFill className="text-primary-accent mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Citação</h3>
              <p className="text-lg">
                É a utilização de um trecho de outra obra no seu texto. Serve
                para fundamentar um argumento. Pode ser <strong>direta</strong>{" "}
                (cópia exata) ou <strong>indireta</strong> (paráfrase). Ambas
                exigem a fonte.
              </p>
            </div>
            {/* Card Resumo */}
            <div className="bg-primary-foreground/5 p-6   border-t-4 border-primary-accent">
              <BsListCheck className="text-primary-accent mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Resumo</h3>
              <p className="text-lg">
                Um texto conciso e objetivo com as ideias principais de uma obra
                original. O objetivo é informar o leitor sobre o conteúdo
                central, <strong>sem incluir opiniões</strong> ou análises.
              </p>
            </div>
            {/* Card Resenha */}
            <div className="bg-primary-foreground/5 p-6   border-t-4 border-primary-accent">
              <BsStarHalf className="text-primary-accent mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Resenha</h3>
              <p className="text-lg">
                Uma análise mais completa. Começa com um resumo, mas seu
                diferencial é a{" "}
                <strong>inclusão de uma avaliação crítica</strong> e da opinião
                do autor da resenha, destacando pontos positivos e negativos.
              </p>
            </div>
          </div>

          <hr className="my-12 invisible" />

          {/* SEÇÃO TIPOS DE CITAÇÃO: Agora como "Callouts" */}
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tipos de Citação
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Compreender como citar corretamente é essencial para evitar o
            plágio. As citações são divididas principalmente em:
          </p>
          <div className="space-y-6">
            {/* Callout 1 */}
            <div className="bg-primary-foreground/5 p-6  border-l-4 border-primary-accent ">
              <h3 className="text-xl font-semibold mb-2">1. Citação Direta</h3>
              <p className="mb-2">
                É a transcrição exata de parte da obra do autor consultado.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-primary-foreground/90">
                <li>
                  <strong>Curta (até 3 linhas):</strong> Incluída no texto,
                  entre aspas. Ex: Segundo Silva (2020, p. 15), "o método é
                  essencial".
                </li>
                <li>
                  <strong>Longa (mais de 3 linhas):</strong> Em parágrafo
                  separado, com recuo de 4cm, fonte menor e sem aspas.
                </li>
              </ul>
            </div>
            {/* Callout 2 */}
            <div className="bg-primary-foreground/5 p-6  border-l-4 border-primary-accent ">
              <h3 className="text-xl font-semibold mb-2">
                2. Citação Indireta
              </h3>
              <p>
                É a paráfrase, ou seja, você escreve com as suas palavras a
                ideia de outro autor. Mesmo sendo suas palavras, a autoria da
                ideia original deve ser creditada. Ex: Conforme aponta Silva
                (2020), a aplicação do método científico é fundamental.
              </p>
            </div>
            {/* Callout 3 */}
            <div className="bg-primary-foreground/5 p-6  border-l-4 border-primary-accent ">
              <h3 className="text-xl font-semibold mb-2">
                3. Citação de Citação (Apud)
              </h3>
              <p>
                Ocorre quando você cita um trecho de um autor que foi mencionado
                em outra obra. Deve ser usado com moderação, apenas quando o
                documento original é inacessível. Ex: (FONSECA, 1998 apud SILVA,
                2020, p. 75).
              </p>
            </div>
          </div>

          <hr className="my-12 invisible" />

          <section className="bg-secondary-background text-secondary-foreground p-8 rounded-2xl">
            {/* SEÇÃO ESTILOS: Agora em um grid de 2 colunas */}
            <h2 className="text-3xl font-bold mb-8 text-center">
              Principais Estilos de Formatação
            </h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              Para padronizar a forma como as referências são apresentadas,
              existem diversos guias de estilo. A escolha depende da sua
              instituição.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/5 p-6 ">
                <h3 className="text-xl font-semibold text-primary-accent mb-2">
                  ABNT
                </h3>
                <p>
                  Padrão dominante no Brasil para trabalhos acadêmicos (TCCs,
                  teses). Foca em regras de formatação e numeração.
                </p>
              </div>
              <div className="bg-primary-foreground/5 p-6 ">
                <h3 className="text-xl font-semibold text-primary-accent mb-2">
                  APA
                </h3>
                <p>
                  Muito usado internacionalmente em Ciências Sociais e Educação.
                  Conhecido pelo sistema autor-data.
                </p>
              </div>
              <div className="bg-primary-foreground/5 p-6 ">
                <h3 className="text-xl font-semibold text-primary-accent mb-2">
                  MLA
                </h3>
                <p>
                  Comum nas áreas de Humanidades (Letras, Linguística). Foca na
                  autoria e na página, ideal para análise de textos.
                </p>
              </div>
              <div className="bg-primary-foreground/5 p-6 ">
                <h3 className="text-xl font-semibold text-primary-accent mb-2">
                  Vancouver
                </h3>
                <p>
                  Padrão muito utilizado na área da saúde (Medicina,
                  Enfermagem). Utiliza um sistema numérico no texto.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-12 invisible" />

          {/* SEÇÃO RECURSOS: Agora como Cards de 3 colunas */}
          <h2 className="text-3xl font-bold mb-8 text-center">
            Blogs e Recursos Recomendados
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Para se aprofundar em escrita acadêmica, metodologia e normas,
            consulte estes excelentes recursos mantidos por especialistas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card Blog 1 */}
            <div className="bg-primary-foreground/10 p-6   hover: transitionex flex-col">
              <h3 className="text-xl font-semibold mb-2">Blog da Mettzer</h3>
              <p className="mb-4 flex-grow">
                Uma fonte vasta de guias práticos sobre normas ABNT, TCC,
                formatação de citações e estruturação de projetos.
              </p>
              <a
                href="https://blog.mettzer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-primary-accent text-white font-bold py-2 px-4  hover:bg-opacity-80 transition-colors"
              >
                <div className="align-middle flex gap-4">
                  <div className="translate-y-1">
                    <SlLink />
                  </div>
                  <p>Visitar Blog</p>
                </div>{" "}
              </a>
            </div>
            {/* Card Blog 2 */}
            <div className="bg-primary-foreground/10 p-6   hover: transitionex flex-col">
              <h3 className="text-xl font-semibold mb-2">Blog da Even3</h3>
              <p className="mb-4 flex-grow">
                Conteúdo riquíssimo sobre metodologia científica, como escrever
                artigos, definir problemas de pesquisa e dicas para publicação.
              </p>
              <a
                href="https://blog.even3.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-primary-accent text-white font-bold py-2 px-4  hover:bg-opacity-80 transition-colors"
              >
                <div className="align-middle flex gap-4">
                  <div className="translate-y-1">
                    <SlLink />
                  </div>
                  <p>Visitar Blog</p>
                </div>{" "}
              </a>
            </div>
            {/* Card Blog 3 */}
            <div className="bg-primary-foreground/10 p-6   hover: transitionex flex-col">
              <h3 className="text-xl font-semibold mb-2">
                Blog da Gran Faculdade
              </h3>
              <p className="mb-4 flex-grow">
                Possui uma seção robusta sobre escrita acadêmica, com dicas
                diretas sobre o que é plágio e como evitá-lo.
              </p>
              <a
                href="https://faculdade.grancursosonline.com.br/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-primary-accent text-white font-bold py-2 px-4  hover:bg-opacity-80 transition-colors"
              >
                <div className="align-middle flex gap-4">
                  <div className="translate-y-1">
                    <SlLink />
                  </div>
                  <p>Visitar Blog</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
