import React from "react";

// --- Definições de Ícones SVG Inline ---

// Ícone para GitHub
const IconGitHub = ({
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
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Ícone para LinkedIn
const IconLinkedIn = ({
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
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- Componente Principal (Footer) ---
export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground py-16 px-6 sm:px-10 lg:px-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Nome ou Logo */}
          <div className="text-center md:text-left">
            <a
              href="https://witortena.netlify.app"
              className="text-xl font-semibold text-primary"
            >
              Witor Tenã
            </a>
            <p className="text-muted-foreground text-sm">
              Estudante de Ciência da Computação
            </p>
            {/* Ícones Sociais */}
            <div className="flex gap-6 mt-4 justify-center sm:justify-start">
              <a
                href="https://github.com/witordev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconGitHub className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/witortena"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Links de Navegação (Opcional, mas "cool") */}
          <nav className="flex gap-6 sm:gap-8">
            <div>
              <p className="mb-4">Navegação</p>
              <ul className="flex flex-col text-sm gap-4">
                <li>
                  <a
                    href="/"
                    className="text-muted-foreground  hover:text-primary transition-colors duration-200"
                  >
                    Sobre o Curso
                  </a>
                </li>
                <li>
                  <a
                    href="/computer-security"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Segurança
                  </a>
                </li>
                <li>
                  <a
                    href="/texts-referrals"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Textos e Referências
                  </a>
                </li>
                <li>
                  <a
                    href="/referrals"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Nossas Referências
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Witor Tenã. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground/80 mt-1">
            Feito com React, Next.js e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
