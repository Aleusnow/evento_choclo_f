import { ToastContainer } from "react-toastify";
import "./App.css";
import Cuestionario from "./vistas/Cuestionario";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🌽EVENTOS CHOCLO🌽</h1>
        <h2> Formulario próximo evento:</h2>
        <div class="cuestionario">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Cuestionario />
        </div>
      </header>
    </div>
  );
}

export default App;
