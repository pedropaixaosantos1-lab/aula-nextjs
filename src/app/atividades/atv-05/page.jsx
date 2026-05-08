"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");
  const [idEditando, setIdEditando] = useState(null);

  const limparInput = () => {
    setTexto("");
    setIdEditando(null);
  };

  const adicionarOuAtualizar = () => {
    if (!texto.trim()) return;

    if (idEditando !== null) {
      const novaLista = lista.map(item =>
        item.id === idEditando ? { ...item, text: texto } : item
      );
      setLista(novaLista);
    } else {
      const novoItem = {
        id: Date.now(),
        text: texto
      };
      setLista(prev => [...prev, novoItem]);
    }

    limparInput();
  };

  const editarItem = (item) => {
    setTexto(item.text);
    setIdEditando(item.id);
  };

  const removerItem = (id) => {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  };

  return (
    <main className={styles.container}>
      <h1>CRUD de Tarefas</h1>

      <input
        className={styles.input}
        placeholder="Digite uma tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button className={styles.addBtn} onClick={adicionarOuAtualizar}>
        {idEditando ? "Salvar Alteração" : "Adicionar Tarefa"}
      </button>

      <div className={styles.list}>
        {lista.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}

        {lista.map(item => (
          <div key={item.id} className={styles.item}>
            <span>{item.text}</span>

            <div className={styles.actions}>
              <button
                className={styles.editBtn}
                onClick={() => editarItem(item)}
              >
                Editar
              </button>

              <button
                className={styles.deleteBtn}
                onClick={() => removerItem(item.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


