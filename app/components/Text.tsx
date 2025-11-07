// Estilo reutilizável para as tags <code>
const codeStyle =
  "font-mono bg-gray-100 text-blue-700 px-2 py-0.5 rounded-md text-sm";

export default function Text() {
  return (
    // Container principal: card com sombra, bordas arredondadas, padding e largura máxima
    <section className="max-w-3xl mx-auto my-10 p-6 sm:p-8 bg-white rounded-xl shadow-lg">
      {/* Título Principal */}
      <h2 className="text-3xl font-bold text-gray-900 mb-5 flex items-center">
        Exemplo de Fichamento:
      </h2>
      <hr />
      <br />
      <h2 className="text-3xl font-bold text-gray-900 mb-5 flex items-center">
        Árvores de Decisão no Scikit-learn{" "}
      </h2>

      {/* Seção Vantagens */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
        Vantagens
      </h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>
          <strong className="font-semibold text-gray-900">
            Interpretabilidade alta:
          </strong>{" "}
          A função <code className={codeStyle}>sklearn.tree.plot_tree()</code>{" "}
          permite visualizar a árvore treinada, facilitando a compreensão de
          como o modelo toma suas decisões.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Eficiência:</strong> A
          implementação em C (Cython) torna o treinamento e a previsão muito
          rápidos.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">
            Dispensa normalização:
          </strong>{" "}
          O scikit-learn não exige que os dados sejam escalonados (por exemplo,
          com <code className={codeStyle}>StandardScaler</code>), pois as
          divisões são feitas com base em limiares numéricos.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">
            Base para ensembles:
          </strong>{" "}
          As árvores de decisão servem como componentes fundamentais para
          modelos mais avançados, como{" "}
          <code className={codeStyle}>RandomForestClassifier</code> e{" "}
          <code className={codeStyle}>GradientBoostingClassifier</code>.
        </li>
      </ul>

      {/* Divisor */}
      <hr className="my-6 border-gray-200" />

      {/* Seção Desvantagens */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Desvantagens
      </h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>
          <strong className="font-semibold text-gray-900">Overfitting:</strong>{" "}
          O comportamento padrão (
          <code className={codeStyle}>max_depth=None</code>) tende a gerar
          árvores excessivamente complexas, que se ajustam demais aos dados de
          treino.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">
            Instabilidade:
          </strong>{" "}
          Pequenas alterações nos dados podem resultar em árvores muito
          diferentes, devido à natureza sensível da divisão dos nós.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">
            Necessidade de ajuste fino:
          </strong>{" "}
          Para evitar overfitting, é essencial ajustar hiperparâmetros como{" "}
          <code className={codeStyle}>max_depth</code> e{" "}
          <code className={codeStyle}>ccp_alpha</code>, utilizando técnicas como{" "}
          <code className={codeStyle}>GridSearchCV</code> ou{" "}
          <code className={codeStyle}>RandomizedSearchCV</code>.
        </li>
      </ul>
    </section>
  );
}
