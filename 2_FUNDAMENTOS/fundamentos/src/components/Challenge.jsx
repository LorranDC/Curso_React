const Challenge = () => {

    const a = 10;
    const b = 20;

    const sumNumbers = () => {
        return console.log(a + b);
    }

  return (
    <div>
      <h1>Challenge</h1>

      <div>Valor de A: {a}</div>
      <div>Valor de B: {b} </div>

      <button onClick={sumNumbers}>Somar A e B</button>
    </div>
  );

}

export default Challenge;