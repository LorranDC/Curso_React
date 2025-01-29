//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"

//import { CounterContext } from "../context/CounterContext"

//4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

import { userTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  //const {counter} = useContext(CounterContext);

  const {counter} = useCounterContext();

  //5 - context mais complexo
  const {color, dispatch} = userTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }} >About</h1>
        <p>Valor do contador: {counter}</p>

    </div>
  )
}

export default About