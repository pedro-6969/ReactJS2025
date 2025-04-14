let personagem = {
  nome: 'Batman',
  poder: 'Rico',
  altura: '1.80cm',
  peso: '46kg',
  salario: 1000000,

};
function App() {

  return (
    <>
      <h1>Nome: { personagem.nome }</h1>
      <h1>Poder: { personagem.poder }</h1>
      <h1>Altura: { personagem.altura }</h1>
      <h1>Peso: { personagem.peso }</h1>
      <h1>Salário: { personagem.salario }</h1>
    </>
  )
}

export default App
