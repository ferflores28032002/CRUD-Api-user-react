import { useForms } from "../hooks/useForms";
import { useUsuarios } from "../hooks/useUsuarios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usuarios from "../helpers/config";

export const EditarUsuarios = () => {
  const { setFormState, onInputChange, formState, name, password } = useForms({
    name: "",
    password: "",
  });
  const { updateUsuarios } = useUsuarios();
  const navigate = useNavigate()

  const { id } = useParams();
  const user = async () => {
    const data = await usuarios.get("/user/" + id);
    setFormState(data.data.user);
  };

  useEffect(() => {
    user();
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateUsuarios(formState);
    navigate("/")
  };

  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
      <div className="p-5 shadow-lg">
        <div className="text-center">
          <h3>Editar Usuarios</h3>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-floating mt-4" style={{ width: "350px" }}>
            <input
              type="text"
              className="form-control w-100"
              placeholder="Name Usuario"
              value={name}
              name="name"
              onChange={onInputChange}
            />
            <label className="label-control">Name Usuario</label>
          </div>

          <div className="form-floating mt-2" style={{ width: "350px" }}>
            <input
              type="password"
              className="form-control w-100"
              placeholder="Password"
              value={password}
              name="password"
              onChange={onInputChange}
            />
            <label className="label-control">Password</label>
          </div>

          <div className="d-block w-100 mt-2">
            <button className="btn btn-primary w-100">Editar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
