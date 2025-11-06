"use client";

import React, { useState } from "react";
import {
  BsCheckCircleFill,
  BsXCircleFill,
  BsTrophyFill,
  BsArrowCounterclockwise,
} from "react-icons/bs";

// 1. Definição das Perguntas
// Baseadas no conteúdo que você criou em 'TextsAndReferrals.js'
const quizQuestions = [
  {
    question:
      "Qual tipo de texto informa as ideias principais de uma obra, SEM incluir opiniões ou análises críticas?",
    options: ["Resenha", "Resumo", "Citação Direta", "Curadoria"],
    correctAnswer: "Resumo",
  },
  {
    question:
      "Uma transcrição EXATA de um texto, com mais de 3 linhas, que deve ficar em parágrafo separado e com recuo, é uma:",
    options: [
      "Citação Indireta",
      "Citação Direta Longa",
      "Citação Direta Curta",
      "Apud",
    ],
    correctAnswer: "Citação Direta Longa",
  },
  {
    question: "O que diferencia uma Resenha de um Resumo?",
    options: [
      "A resenha não precisa da fonte",
      "O resumo é mais longo",
      "A resenha inclui avaliação crítica e opinião",
      "Não há diferença",
    ],
    correctAnswer: "A resenha inclui avaliação crítica e opinião",
  },
  {
    question:
      "Escrever a ideia de outro autor com as SUAS PRÓPRIAS palavras, mas ainda creditando a fonte, é um exemplo de:",
    options: [
      "Citação Direta",
      "Plágio",
      "Citação de Citação (Apud)",
      "Citação Indireta",
    ],
    correctAnswer: "Citação Indireta",
  },
  {
    question:
      "Na curadoria de conteúdo digital, o ato de 'sempre dar o crédito' e 'linkar para a fonte original' refere-se a qual etapa?",
    options: ["Seleção", "Atribuição", "Contextualização", "Resumo"],
    correctAnswer: "Atribuição",
  },
  {
    question:
      "Qual é o padrão de formatação dominante no Brasil para TCCs e teses?",
    options: ["APA", "Vancouver", "ABNT", "MLA"],
    correctAnswer: "ABNT",
  },
];

export default function ContentQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (option: any) => {
    if (showFeedback) return; // Impede seleção após a resposta
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return; // Não faz nada se nada foi selecionado

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    // Reseta os estados
    setSelectedAnswer(null);
    setShowFeedback(false);

    // Verifica se é a última pergunta
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Fim do quiz
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    // Reseta tudo para o estado inicial
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setShowResults(false);
  };

  // 2. Tela de Resultados
  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <section className="w-full bg-secondary-background text-secondary-foreground py-16 px-6 sm:px-10">
        <div className="max-w-2xl mx-auto bg-primary-foreground/5 p-8 text-center">
          <BsTrophyFill
            className="text-primary-accent mx-auto mb-6"
            size={48}
          />
          <h2 className="text-3xl font-bold mb-4">Quiz Concluído!</h2>
          <p className="text-xl mb-6">
            Você acertou {score} de {quizQuestions.length} perguntas.
          </p>
          <p className="text-4xl font-extrabold text-primary-accent mb-8">
            {percentage}%
          </p>
          <button
            onClick={handleRestartQuiz}
            className="mt-auto flex items-center justify-center gap-3 w-full sm:w-auto mx-auto bg-primary-accent text-white font-bold py-3 px-6 hover:bg-opacity-80 transition-colors"
          >
            <BsArrowCounterclockwise size={20} />
            Reiniciar Quiz
          </button>
        </div>
      </section>
    );
  }

  // 3. Tela do Quiz
  return (
    <section className="w-full bg-secondary-background text-secondary-foreground py-16 px-6 sm:px-10">
      <div className="max-w-2xl mx-auto bg-primary-foreground/5 p-6 sm:p-8">
        {/* Cabeçalho do Quiz */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary-accent">
            Teste seu Conhecimento
          </h2>
          <span className="text-lg font-semibold">
            Pergunta {currentQuestionIndex + 1} / {quizQuestions.length}
          </span>
        </div>

        {/* Pergunta */}
        <p className="text-xl font-medium mb-6 min-h-[6rem]">
          {currentQuestion.question}
        </p>

        {/* Opções */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;

            // Define o estilo com base no feedback
            let buttonClass =
              "bg-primary-foreground/10 hover:bg-primary-foreground/20"; // Padrão

            if (showFeedback) {
              if (isCorrect) {
                buttonClass = "bg-green-500/80 text-white"; // Correta
              } else if (isSelected && !isCorrect) {
                buttonClass = "bg-red-500/80 text-white"; // Incorreta selecionada
              } else {
                buttonClass = "bg-primary-foreground/10 opacity-60"; // Outras no feedback
              }
            } else if (isSelected) {
              buttonClass = "bg-primary-accent/80 text-white"; // Selecionada antes do feedback
            }

            return (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={showFeedback}
                className={`w-full text-left p-4 font-medium rounded-lg transition-all duration-200 flex items-center justify-between ${buttonClass}`}
              >
                <span>{option}</span>
                {showFeedback && isCorrect && <BsCheckCircleFill />}
                {showFeedback && isSelected && !isCorrect && <BsXCircleFill />}
              </button>
            );
          })}
        </div>

        {/* Botão de Ação */}
        <div className="h-10">
          {!showFeedback && (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full bg-primary-accent text-white font-bold py-3 px-6 hover:bg-opacity-80 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Confirmar Resposta
            </button>
          )}

          {showFeedback && (
            <button
              onClick={handleNextQuestion}
              className="w-full bg-primary-accent text-white font-bold py-3 px-6 hover:bg-opacity-80 transition-colors"
            >
              {currentQuestionIndex < quizQuestions.length - 1
                ? "Próxima Pergunta"
                : "Ver Resultados"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
