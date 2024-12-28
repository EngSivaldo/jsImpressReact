import { useState } from 'react';

const DualColorTitle = ({ title }) => {
  // Define um estado chamado definedColor com valor inicial true
  const [definedColor, setDefinedColor] = useState(true);

  return (
    <div>
      {/* Título que muda de cor baseado no estado definedColor */}
      <h1 className={definedColor ? 'first-color' : 'second-color'}>{title}</h1>
      {/* Div que contém um checkbox para alternar a cor do título */}
      <div onClick={() => setDefinedColor(!definedColor)}>
        <input type='checkbox' name='color-switcher' checked={definedColor} />
        <label htmlFor='color-switcher'>Trocar Cor</label>
      </div>
    </div>
  );
};

export default DualColorTitle;

// Este componente define um título (h1) cuja cor alterna entre duas classes CSS (first-color e second-color) com base no estado definedColor. Quando o checkbox é clicado, ele alterna o valor de definedColor, o que faz com que a cor do título mude.