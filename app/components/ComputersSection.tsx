import React from "react";

// --- Definições de Ícones SVG Inline ---

// Ícone para "Sempre Ligado"
const IconPower = ({
  className,
  size = 24,
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
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <path d="M12 2v10" />
  </svg>
);

// Ícone para "Atualizações"
const IconUpdate = ({
  className,
  size = 24,
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
    <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9m18 0a9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
    <path d="M1 12v-3h3M23 12v3h-3" />
  </svg>
);

// Ícone para "Alerta"
const IconAlert = ({
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
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// --- Componente Principal (ComputersSection) ---
export default function ComputersSection() {
  return (
    <section className="w-full text-foreground py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
          Computadores da UniFil
        </h2>

        <h3 className="text-lg font-bold text-terciary-accent sm:text-xl text-left text-muted-foreground mb-8">
          Como funciona o acesso às máquinas da UniFil?
        </h3>

        {/* Lista de Destaques (Substituindo o grid de parágrafos) */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start gap-4">
            <IconPower
              className="text-terciary-accent flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-1">
                Sempre Disponíveis
              </h4>
              <p className="sm:text-lg leading-relaxed text-muted-foreground">
                Aqui na UniFil temos computadores para os alunos e professores,
                sempre ligados e funcionando para que os alunos façam uso deles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconUpdate
              className="text-terciary-accent flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-1">
                Manutenção Contínua
              </h4>
              <p className="sm:text-lg leading-relaxed text-muted-foreground">
                Esses computadores são atualizados de tempos em tempos para
                garantir que estejam funcionando corretamente.
              </p>
            </div>
          </div>
        </div>

        {/* Caixa de Alerta (Substituindo o parágrafo final) */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm mt-12">
          <div className="flex items-start gap-4">
            <IconAlert className="text-yellow-500 flex-shrink-0" size={28} />
            <div>
              <h4 className="text-xl font-semibold text-yellow-800 mb-2">
                Atenção: Acesso Compartilhado
              </h4>
              <p className="sm:text-lg leading-relaxed text-yellow-700">
                As máquinas são utilizadas compartilhando uma conta de acesso
                dos alunos em cada computador (Windows 10). Com essa
                configuração,
                <strong>
                  {" "}
                  aquilo que você desenvolve e armazena no computador pode ser
                  facilmente acessado por outras pessoas.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
