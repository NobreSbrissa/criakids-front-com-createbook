
import { useState } from "react";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");
  const [theme, setTheme] = useState("");
  const [style, setStyle] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStory("");

    // Simulação da chamada de IA (iremos conectar com backend depois)
    setTimeout(() => {
      setStory(`Era uma vez um livro chamado "${title}" criado para crianças de ${age} anos, com uma aventura sobre ${theme}, em um estilo ${style}!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-purple-700 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Criar Novo Livro com IA</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do livro" className="p-2 rounded text-black" required />
        <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade do público-alvo" className="p-2 rounded text-black" required />
        <input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="Tema da história (ex: floresta, robôs...)" className="p-2 rounded text-black" required />
        <input value={style} onChange={(e) => setStyle(e.target.value)} placeholder="Estilo (engraçado, educativo, poético...)" className="p-2 rounded text-black" required />
        <button type="submit" className="bg-white text-purple-700 font-bold p-2 rounded">{loading ? 'Gerando...' : 'Criar Livro'}</button>
      </form>

      {story && (
        <div className="mt-8 bg-white text-black p-4 rounded max-w-xl mx-auto shadow-lg">
          <h2 className="font-bold text-xl mb-2">História Gerada</h2>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
}

export default CreateBook;
