import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DebtsCard from "./components/DebtsCard"
import Header from "./components/Header"

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="debts">
          <div className="dsdividas-container">
            <DebtsCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
