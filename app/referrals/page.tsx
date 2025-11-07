import { BsYoutube } from "react-icons/bs";
import Referrals from "../components/Referrals";

export default function OurReferrals() {
  return (
    <>
      <section>
        <Referrals />
      </section>
      <section className="max-w-screen-lg mx-auto">
        {/* SEÇÃO DE VÍDEOS (NOVA) */}
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <BsYoutube className="text-primary-accent" />
          Vídeos Recomendados -
          <a
            target="_blank"
            className="text-blue-600"
            href="https://www.youtube.com/playlist?list=PLEY4EZ7412HPeGJoIK55yeRgS86is7Il7"
          >
            Clique aqui
          </a>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vídeo 1: Citação */}
          <div className="bg-primary-foreground/5 py-6 rounded-lg">
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/2Vc-wC7fEAI"
                title="Citações com a nova norma ABNT 10520 (2023)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-center">
              Como fazer Citação (ABNT 2023)
            </h3>
          </div>
          {/* Vídeo 2: Resumo */}
          <div className="bg-primary-foreground/5 py-6 rounded-lg">
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/HJZXPSrbEQc"
                title="Como fazer um Resumo por Tópicos de Alta Qualidade"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-center">
              Como fazer Resumo por Tópicos
            </h3>
          </div>
          {/* Vídeo 3: Resenha */}
          <div className="bg-primary-foreground/5 py-6 rounded-lg">
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/P0rCiXx8auU"
                title="Como Escrever uma Resenha Fácil e Objetiva - Passo a Passo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-center">
              Como escrever uma Resenha
            </h3>
          </div>
          {/* Vídeo 4: Fichamento */}
          <div className="bg-primary-foreground/5 py-6 rounded-lg">
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/dWMqyP4wEPM"
                title="COMO FAZER FICHAMENTO?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-center">
              Como fazer Fichamento
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
