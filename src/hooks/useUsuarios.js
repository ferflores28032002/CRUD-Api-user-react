
import { useState } from 'react'
import Swal from 'sweetalert2'
import usuarios from '../helpers/config'


export const useUsuarios = () => {

    const [users, setUsers] = useState([])

    const loadUsuarios = async () => {

        try {

            const { data } = await usuarios.get("/users")
            setUsers(data.usuarios)

        } catch (error) {
            console.log(error)
        }

    }

    const createUser = async ({ name, password }) => {

        try {
            
            const data = await usuarios.post("/user", { name, password })

            if(data.status === 200) {

                Swal.fire("Usuario Creado ", "creado con exito", "success")
            }
            loadUsuarios()

        } catch (error) {
            console.log(error)
        }
    }


    const deleteUsuarios = async ( _id ) => {

        try {

            const data = await usuarios.delete(`/user/${_id}`)

            if(data.status === 200) {

                Swal.fire("Usuario Eliminado ", "eliminado con exito", "success")
            }
            loadUsuarios()
        } catch (error) {
            console.log(error)
        }

    }


    const updateUsuarios = async ({ _id, name, password} ) => {


        try {

            const data = await usuarios.put(`/user/${_id}`, { name, password })

            if(data.status === 200) {

                Swal.fire("Actualizado Eliminado ", "actualizado con exito", "success")
            }
            loadUsuarios()
        } catch (error) {
            console.log(error)
        }

    }




    return {
        // Atributos
        users,

        // Métodos
        loadUsuarios,
        createUser,
        deleteUsuarios,
        updateUsuarios

    }
}