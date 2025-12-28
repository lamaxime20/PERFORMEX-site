import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import { ACCEUIL, SERVICES, ABOUT} from './components/navBar'
import './App.css'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Main activePage={ACCEUIL} />} />
            <Route path='/services' element={<Main activePage={SERVICES} />} />
            <Route path='/about' element={<Main activePage={ABOUT} />} />
            <Route path='*/' element={<p>Erreur 404</p>} />
        </Routes>
    )
}

export default App
