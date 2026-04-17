'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';

function Atividade04() {
  const [inputValue, setInputValue] = useState({
    id: '',
    quantidade: '',
    produto: ''
  });
  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('listaCompras');
    if (dadosSalvos) {
      setDadosCadastrados(JSON.parse(dadosSalvos));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('listaCompras', JSON.stringify(dadosCadastrados));
  }, [dadosCadastrados]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.produto || !inputValue.quantidade) return;

    const novoItem = { ...inputValue, id: Date.now() };
    setDadosCadastrados([...dadosCadastrados, novoItem]);

    setInputValue({ id: '', quantidade: '', produto: '' });
  };

  const handleDelete = (id) => {
    const novaLista = dadosCadastrados.filter(item => item.id !== id);
    setDadosCadastrados(novaLista);
  };

  return (
    <div className={styles.container}>
      <h1>Formulário básico</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue.quantidade}
          onChange={(e) => setInputValue({ ...inputValue, quantidade: e.target.value })}
          placeholder="Qtd"
        />
        <input
          type="text"
          value={inputValue.produto}
          onChange={(e) => setInputValue({ ...inputValue, produto: e.target.value })}
          placeholder="Produto..."
        />
        <button type="submit">Adicionar</button>
      </form>

      {dadosCadastrados.length > 0 && <h2>Lista de compras</h2>}

      <ul className={styles.lista}>
        {dadosCadastrados.map((item) => (
          <li key={item.id} className={styles.linha}>
            <span>
              {item.quantidade}x {item.produto}
            </span>
            <button onClick={() => handleDelete(item.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Atividade04;