import { Routes, Route } from 'react-router-dom'
import { EditarUsuarios } from './components/EditarUsuarios'
import { Usuarios } from './components/Usuarios'

export const App = () => {
  return (
    <div>

        <Routes>
            <Route  path='/' element={<Usuarios/>} />
            <Route  path='/edit/:id' element={<EditarUsuarios/>} />
            <Route  path='/*' element={<Usuarios/>} />
        </Routes>


    </div>
  )
}
