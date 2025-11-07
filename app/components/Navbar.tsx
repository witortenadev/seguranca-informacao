"use client";

import { useState } from "react";

// --- Definições de Ícones SVG Inline ---
import logo from "@/public/unifilLogo.png";
import Image from "next/image";
// Ícone "Hambúrguer" (Menu)
const IconMenu = ({
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
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Ícone "X" (Fechar)
const IconX = ({
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
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- Componente Principal (Navbar) ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Sobre o Curso", href: "/" },
    { name: "Segurança", href: "/computer-security" },
    { name: "Textos e Referências", href: "/texts-referrals" },
    { name: "Nossas Referências", href: "/referrals" },
  ];

  return (
    <nav className="w-full bg-background text-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-screen-3xl mx-auto">
        <div className="flex justify-between px-5 items-center h-20">
          {/* Logo ou Nome */}
          <div className="flex gap-4 align-middle justify-center">
            <Image src={logo} className="border w-16" alt="UniFil Logo" />
            <a
              href="/"
              className="text-2xl font-bold overflow-hidden text-primary hover:opacity-80 transition-opacity w-40"
            >
              Informação e Segurança
            </a>
          </div>
          {/* Links do Menu Desktop (escondido em mobile) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Botão do Menu Mobile (apenas em mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? (
                <IconX className="block h-6 w-6" />
              ) : (
                <IconMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown (condicional) */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary-background">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
                className="block px-3 py-2 rounded-md text-base font-medium text-secondary-foreground hover:text-primary hover:bg-background"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
