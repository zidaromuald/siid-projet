 import './App.css'
 import Dashboard from "./assets/mescomposants/parent/Dashboard.tsx";

 function App() {

  return (
    <>
        // Nous avons 04 utilisateurs crées qui peuvent poster un publications sur notre blog
        <div className="min-h-screen bg-gray-300 p-6">
            <h1 className="text-2xl font-bold text-center mb-8">Mes Utilisateurs</h1>

            <div className="grid grid-cols-2 gap-6 justify-center">
                <Dashboard />
                <Dashboard />
                <Dashboard />
                <Dashboard />
            </div>
        </div>
    </>
  )
}

export default App
