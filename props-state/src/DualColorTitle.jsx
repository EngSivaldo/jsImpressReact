import { useState, memo } from 'react';

export const DualColorTitle = ({ title }) => {
  // Define um estado chamado definedColor com valor inicial true
  const [definedColor, setDefinedColor] = useState(true);
  console.log('componente dualColo app se renderizou')

  return (
    <div>
      {/* Título que muda de cor baseado no estado definedColor */}
      <h1 className={definedColor ? 'first-color' : 'second-color'}>{title}</h1>
      {/* Div que contém um checkbox para alternar a cor do título */}
      <div onClick={() => setDefinedColor(!definedColor)}>
        <input type='checkbox' name='color-switcher' checked={definedColor} onChange={() => setBooleanState(!booleanState)}/>
        <label htmlFor='color-switcher'>Trocar Cor</label>
      </div>
    </div>
  );
};

export default DualColorTitle;

// Este componente define um título (h1) cuja cor alterna entre duas classes CSS (first-color e second-color) com base no estado definedColor. Quando o checkbox é clicado, ele alterna o valor de definedColor, o que faz com que a cor do título mude..

export const MemoizedDualColorTitle = memo(DualColorTitle);



// Memoization
// Memoization é uma técnica de otimização usada principalmente em programação para melhorar a eficiência de funções computacionais. Ela envolve armazenar os resultados de chamadas de função caras e reutilizar esses resultados quando as mesmas entradas ocorrem novamente. Isso evita a necessidade de recalcular os resultados, economizando tempo e recursos.

// Exemplo: Suponha que você tenha uma função que calcula o n-ésimo número de Fibonacci. Sem memoization, a função recalcularia os mesmos valores várias vezes. Com memoization, os resultados já calculados são armazenados e reutilizados.
// Uso: Comum em algoritmos de programação dinâmica e problemas que podem ser divididos em subproblemas repetitivos.
// Memorization
// Memorization refere-se ao ato de lembrar ou armazenar informações na memória humana. É o processo de aprender e reter informações, como fatos, números, ou textos, para recuperação futura.

// Exemplo: Estudar para uma prova e lembrar das respostas durante o exame.
// Uso: Comum em contextos educacionais e de aprendizado.
// Resumo
// Memoization: Técnica de otimização em programação para armazenar e reutilizar resultados de funções.
// Memorization: Processo humano de aprender e lembrar informações.