import './App.css'
import MyForms from './components/MyForm';

function App() {

  return (
    <>
      <h2>Forms</h2>

      <MyForms user={{
        name: "Josias", 
        email: "josias@gmail.com", 
        bio: "Sou um advogado", 
        role: "admin"
        }} />
    </>
  )
}

export default App;
