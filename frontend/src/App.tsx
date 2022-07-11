import DebtsCard from "./components/DebtsCard"
import Header from "./components/Header"

function App() {
  return (
    <>
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
