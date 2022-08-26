
import './App.css';
import Header from "./components/Header";
const name = "Talha";
const surname = "Ruscuk";
const isLoggedIn = true;

function App() {
  return (
    <div>
      <h1> {isLoggedIn && 'Benim Adım ${name},' }   </h1>


    </div>
  );
}

export default App;
