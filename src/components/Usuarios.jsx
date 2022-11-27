import React, { useEffect } from 'react'
import { useForms } from '../hooks/useForms'
import { useUsuarios } from '../hooks/useUsuarios'
import { Link } from 'react-router-dom'

export const Usuarios = () => {

    const { onInputChange, onResetForm, formState, name, password } = useForms({name: '', password: ''})
    const { users, loadUsuarios, createUser, deleteUsuarios } = useUsuarios()

    const onSubmit = (e) => {
        e.preventDefault()
        createUser(formState)
        onResetForm()
    }

    useEffect(() => {
      loadUsuarios()
    }, [])
    

  return (
    <div className='container mt-5'>

        <div className='d-flex gap-1 items-center'>

            <div className='p-5 shadow-lg'>

                <div className='text-center'>
                    <h3>Usuarios</h3>
                </div>

                <form onSubmit={onSubmit} >

                    <div className='form-floating mt-4' style={{ width: '350px'}}>

                        <input  
                            type="text"
                            className='form-control w-100' 
                            placeholder='Name Usuario'
                            value={name}
                            name="name"
                            onChange={onInputChange}
                            
                        />
                        <label className='label-control'>Name Usuario</label>

                    </div>

                    <div className='form-floating mt-2' style={{ width: '350px'}}>

                        <input 
                            type="password" 
                            className='form-control w-100' 
                            placeholder='Password' 
                            value={password}
                            name="password"
                            onChange={onInputChange}
                        />
                        <label className='label-control'>Password</label>

                    </div>

                    <div className='d-block w-100 mt-2'>
                        
                        <button className='btn btn-primary w-100'>Agregar</button>

                    </div>

                </form>

            </div>


            <div>


                <div className='px-5 pt-5 pb-2 text-center'>

                    <h3>Lista de usuarios</h3>

                </div>

                <div className='table-responsible px-5'>

                    <table className='table table-hover table-bordered'>

                        <thead className='table-primary'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Opciones</th>
                            </tr>
                            
                        </thead>

                        <tbody>

                            {
                                users.map((user, i) => (
                                    <tr key={i}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td className='d-flex gap-2'>
        
                                            <button    
                                                className='btn btn-outline-danger'
                                                onClick={() => deleteUsuarios(user._id)}
                                            >
                                                <i className="fa-solid fa-trash"></i></button>
                                            <Link to={`/edit/${user._id}`} className='btn btn-outline-primary'><i className="fa-solid fa-pen-to-square"></i></Link>
        
                                        </td>
                                    </tr>

                                ))
                            }


                        </tbody>

                    </table>

                </div>


            </div>


        </div>





    </div>
  )
}
