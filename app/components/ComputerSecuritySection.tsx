// ========================================================
// 📦 Imports
// ========================================================
import React, { ReactNode, ElementType } from "react";
import {
  BsShieldCheck,
  BsCheckCircle,
  BsXCircle,
  BsExclamationTriangle,
  BsCloud,
  BsLock,
  BsTrash,
} from "react-icons/bs";
import {
  FaKey,
  FaSignOutAlt,
  FaDesktop,
  FaMousePointer,
  FaUserCheck,
} from "react-icons/fa";
import { SlCheck } from "react-icons/sl";
import ComputersSection from "@/app/components/ComputersSection";

// ========================================================
// 🧩 TypeScript Interfaces
// ========================================================
interface ListItemProps {
  icon: ElementType;
  color: string;
  title: string;
  children: ReactNode;
}

interface SectionHeaderProps {
  icon: ElementType;
  title: string;
  color: string;
}

// ========================================================
// 📋 ListItem Component
// ========================================================
const ListItem = ({ icon: Icon, color, title, children }: ListItemProps) => (
  <li className="flex gap-4">
    <Icon className={`mt-1 flex-shrink-0 ${color}`} size={20} />
    <div>
      <h4 className="font-semibold text-lg text-foreground">{title}</h4>
      <p className="text-foreground">{children}</p>
    </div>
  </li>
);

// ========================================================
// 🧭 SectionHeader Component
// ========================================================
const SectionHeader = ({ icon: Icon, title, color }: SectionHeaderProps) => (
  <div className={`flex items-center gap-3 mb-6 pb-2 border-b-2 ${color}`}>
    <Icon className={color.replace("border-", "text-")} size={28} />
    <h2 className="text-2xl font-bold text-foreground">{title}</h2>
  </div>
);

// ========================================================
// 🧠 Main Component - ComputerSecuritySection
// ========================================================
export default function ComputerSecuritySection() {
  return (
    <div className="bg-primary-background font-inter">
      <div className="space-y-12">
        <header className="relative text-center pt-20 bg-[url(/HeroImg.jpg)] py-20 bg-cover bg-center text-white">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Conteúdo */}
          <div className="relative z-10">
            <BsShieldCheck className="mx-auto text-primary-accent" size={48} />
            <h1 className="max-w-screen-lg mx-auto text-4xl font-extrabold mt-4">
              Guia de Segurança para Computadores Públicos
            </h1>
            <p className="text-xl mt-4 text-neutral-200 max-w-3xl mx-auto px-4">
              Seu protocolo de segurança para usar máquinas compartilhadas na
              faculdade.
            </p>
          </div>
        </header>

        <ComputersSection />
        <section className="max-w-screen-lg mx-4 lg:mx-auto mt-20">
          <SectionHeader
            icon={BsCheckCircle}
            title="O que VOCÊ DEVE FAZER"
            color="border-green-500 text-primary-accent"
          />

          <div className="space-y-8  mx-4 sm:mx-auto">
            <div>
              <h3 className="text-xl  text-primary-accent font-semibold mb-4 flex items-center gap-2">
                <FaDesktop size={20} /> Antes de Fazer Login
              </h3>
              <ul className="space-y-4 ml-4">
                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Inspeção Física Rápida"
                >
                  Verifique portas USB e o teclado em busca de dispositivos
                  estranhos (<i>keyloggers</i> de hardware). Se algo parecer
                  suspeito, não use a máquina.
                </ListItem>

                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Use o Modo Anônimo/Privado"
                >
                  Sempre (Ctrl+Shift+N ou Ctrl+Shift+P). Isso impede o navegador
                  de salvar histórico, cookies e senhas da sessão.
                </ListItem>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold text-primary-accent mb-4 flex items-center gap-2">
                <BsCloud size={20} /> Durante o Uso
              </h3>
              <ul className="space-y-4 ml-4">
                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Prefira a Nuvem"
                >
                  Use Google Drive, OneDrive, etc., para mover arquivos. Evite
                  pendrives pessoais, que podem conter vírus.
                </ListItem>

                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Verifique o HTTPS"
                >
                  Sempre veja o 🔒 e `https://` na barra de endereço. Isso
                  indica uma conexão segura.
                </ListItem>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary-accent mb-4 flex items-center gap-2">
                <FaSignOutAlt size={20} /> Ao Terminar (A Parte MAIS CRÍTICA)
              </h3>
              <ul className="space-y-4 ml-4">
                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Faça Logoff de TUDO"
                >
                  Não basta fechar a guia. Clique em "Sair" ou "Logoff" em todos
                  os sites.
                </ListItem>

                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Limpe Seus Arquivos"
                >
                  Exclua arquivos criados ou baixados e esvazie a Lixeira.
                </ListItem>

                <ListItem
                  icon={SlCheck}
                  color="text-primary-accent"
                  title="Faça Logoff da Máquina"
                >
                  Se houver login do sistema, saia do usuário antes de deixar o
                  computador.
                </ListItem>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-screen-lg mt-20 mx-4 lg:mx-auto">
          <SectionHeader
            icon={BsXCircle}
            title="O que VOCÊ NUNCA DEVE FAZER"
            color="border-red-500 text-red-600"
          />

          <ul className="space-y-4 ml-4">
            <ListItem
              icon={BsXCircle}
              color="text-red-600"
              title="NUNCA salve senhas"
            >
              Quando o navegador perguntar se quer salvar a senha, clique em
              "Nunca".
            </ListItem>

            <ListItem
              icon={BsXCircle}
              color="text-red-600"
              title="NUNCA faça transações financeiras"
            >
              Não acesse banco, e-commerce ou insira dados de cartão. Há risco
              de <b>keylogger</b>.
            </ListItem>

            <ListItem
              icon={BsXCircle}
              color="text-red-600"
              title="NUNCA instale programas"
            >
              Evite instalar qualquer software, extensão de navegador ou
              aplicativo.
            </ListItem>

            <ListItem
              icon={BsXCircle}
              color="text-red-600"
              title="NUNCA deixe o computador sem supervisão"
            >
              Se precisar sair, bloqueie a tela (Win + L) e faça logoff.
            </ListItem>
          </ul>
        </section>

        <section className="max-w-screen-lg  mx-4 lg:mx-auto mt-20 bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm">
          <SectionHeader
            icon={FaKey}
            title="Dica de Segurança: 2FA"
            color="border-blue-500 text-blue-600"
          />
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <FaKey className="text-blue-600 hidden sm:block" size={100} />
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Ative a Autenticação de Dois Fatores (2FA)
              </h3>
              <p className="text-foreground mt-2">
                Mesmo que alguém roube sua senha, sem o código 2FA a conta
                permanece protegida.
              </p>
              <p className="text-foreground mt-2 font-semibold">
                Isso neutraliza o maior risco dos computadores públicos.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-screen-lg  mx-4 lg:mx-auto mb-20 bg-gray-100 p-6 rounded-lg">
          <SectionHeader
            icon={BsShieldCheck}
            title="Conclusão: Seu Protocolo"
            color="border-gray-500 text-foreground"
          />
          <p className="text-lg text-foreground">
            Sua mentalidade deve ser a de um <b>"fantasma digital"</b>: entre,
            faça o que precisa e saia sem deixar rastros. Use modo anônimo, não
            salve nada e <b>faça logoff de tudo</b> ao terminar.
          </p>
        </section>
      </div>
    </div>
  );
}
