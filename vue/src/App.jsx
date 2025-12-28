import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

    return (
        <Routes>
            <Route path='/' element={<p>Acceuil</p>} />
            <Route path='/services' element={<p>Services</p>} />
            <Route path='/about' element={<p>A propos</p>} />
            <Route path='*/' element={<p>Erreur 404</p>} />
        </Routes>
    )
}

export default App
