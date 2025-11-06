import React, { ReactNode, ElementType } from "react";

// --- Definições de Ícones SVG Inline ---

// Ícone para Algoritmos/Fundamentos
const IconAlgorithm = ({
  className,
  size = 28,
}: {
  className?: string;
  size?: number | string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect x="4" y="12" width="4" height="4" />
    <path d="M8 12v-4" />
    <path d="M16 12h-4" />
    <path d="M12 16v4" />
    <path d="M16 16v4" />
    <path d="M20 16v4" />
    <path d="M16 8h4" />
    <path d="M20 8h-4" />
    <path d="M20 12h-4" />
  </svg>
);

// Ícone para Segurança/Tópicos Avançados
const IconSecurity = ({
  className,
  size = 28,
}: {
  className?: string;
  size?: number | string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Ícone para Projetos/Desenvolvimento
const IconProjects = ({
  className,
  size = 28,
}: {
  className?: string;
  size?: number | string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

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
  <div className="bg-background border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
    <div className="flex items-center gap-4 mb-3">
      <Icon className={iconColor} size={28} />
      <h4 className="text-xl font-semibold text-foreground">{title}</h4>
    </div>
    <p className="text-foreground">{children}</p>
  </div>
);

// --- Componente Principal (CCSection) ---
export default function CCSection() {
  return (
    <section className="w-full bg-secondary-background text-secondary-foreground py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-screen-lg mx-auto">
        {/* Título da Seção */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
          Ciência da Computação
        </h2>

        {/* Parágrafo Introdutório */}
        <p className="text-justify sm:text-lg leading-relaxed mb-12">
          O meu curso é Ciência da Computação, onde aprendemos tudo sobre
          computação, desde hardware até software aqui na UniFil.
        </p>

        {/* Grid de Destaques do Curso */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <SkillCard
            icon={IconAlgorithm}
            title="Fundamentos Essenciais"
            iconColor="text-blue-500"
          >
            Estudamos algoritmos, estruturas de dados, sistemas operacionais,
            redes de computadores e programação em diversas linguagens.
          </SkillCard>
          <SkillCard
            icon={IconSecurity}
            title="Tópicos Avançados"
            iconColor="text-purple-500"
          >
            Aprendemos sobre inteligência artificial, segurança da informação e
            bancos de dados para resolver problemas complexos com soluções
            inovadoras.
          </SkillCard>
          <SkillCard
            icon={IconProjects}
            title="Projetos Práticos"
            iconColor="text-green-500"
          >
            Desenvolvemos aplicações web, mobile e sistemas embarcados,
            entendendo o ciclo completo de criação de software — da ideia à
            implementação.
          </SkillCard>
        </div>

        {/* --- NOVO CONTEÚDO ADICIONADO --- */}
        <h3 className="text-3xl font-bold mt-16 mb-8 tracking-tight text-center sm:text-left">
          Expandindo as Áreas de Estudo
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          <SkillCard
            icon={IconAlgorithm}
            title="Teoria da Computação e Lógica"
            iconColor="text-blue-500"
          >
            Estudo de autômatos, linguagens formais e a teoria da
            computabilidade, que definem os limites do que é possível computar.
            A lógica matemática e a matemática discreta formam o alicerce do
            raciocínio.
          </SkillCard>
          <SkillCard
            icon={IconProjects}
            title="Engenharia de Software e Arquitetura"
            iconColor="text-green-500"
          >
            Foco em como construir software de larga escala. Aprendemos sobre
            padrões de projeto (design patterns), arquitetura de sistemas,
            metodologias ágeis (Scrum/Kanban) e a importância de testes (QA).
          </SkillCard>
        </div>
        {/* --- FIM DO NOVO CONTEÚDO --- */}

        {/* Parágrafo de Conclusão */}
        <p className="text-justify sm:text-lg leading-relaxed mt-12 ">
          Ser estudante de Ciência da Computação significa estar em constante
          aprendizado e adaptação, acompanhando a evolução rápida da tecnologia
          e buscando sempre maneiras criativas de usar o conhecimento para
          impactar o mundo positivamente.
        </p>
      </div>
    </section>
  );
}
