const UserDetais = ({ nome, idade, profissao }) => {
    return (
      <div>
        <ul>
          <li>Nome: {nome}</li>
          <li>Idade: {idade}</li>
          <li>Profissão: {profissao}</li>
        </ul>
        {idade > 17 ? (
          <p>Pode tirar carteira de habilitação</p>
        ) : (
          <p>Não pode tirar carteira de habilitação</p>
        )}
      </div>
    );
  };
  
  export default UserDetais;