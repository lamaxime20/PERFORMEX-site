import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import { ACCEUIL, SERVICES, REALISATIONS} from './components/navBar'
import './App.css'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Main activePage={ACCEUIL} />} />
            <Route path='/services' element={<Main activePage={SERVICES} />} />
            <Route path='/realisations' element={<Main activePage={REALISATIONS} />} />
            <Route path='*/' element={<p>Erreur 404</p>} />
        </Routes>
    )
}

export default App
