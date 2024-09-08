import React, { useCallback, useEffect, useState } from 'react';
import { UserFormProps } from '../interfaces/user-form-props.interface';
import { User } from '../interfaces/user.interface';
import { initialUserState } from '../interfaces/initial-user-state.interface';

const UserFormModal: React.FC<UserFormProps> = ({ isOpen, onClose, onSave, selectedUser }) => {
    const [user, setUser] = useState<Omit<User, "id">>(initialUserState);

    const resetForm = useCallback(() => {
        setUser(initialUserState);
    }, []);

    useEffect(() => {
        if (selectedUser) {
            setUser({
                name: selectedUser.name,
                lastName: selectedUser.lastName,
                email: selectedUser.email,
                password: "",
                cellphone: selectedUser.cellphone,
                status: selectedUser.status,
            });
        } else {
            resetForm();
        }
    }, [selectedUser, resetForm]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        const parsedValue = name === "status" ? (value === "activo") : value;

        setUser((prevUser) => ({ ...prevUser, [name]: parsedValue }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(user);
        resetForm();
        onClose();
    }

    const handleModalClose = () => {
        resetForm();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">{selectedUser ? 'Editar Usuario' : 'Registrar Usuario'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-gray-700 text-gray-300"
                onChange={handleChange}
                value={user.name}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Apellido</label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 rounded bg-gray-700 text-gray-300"
                onChange={handleChange}
                value={user.lastName}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Correo</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded bg-gray-700 text-gray-300"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 rounded bg-gray-700 text-gray-300"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Número Celular</label>
              <input
                type="tel"
                name="cellphone"
                className="w-full p-2 rounded bg-gray-700 text-gray-300"
                onChange={handleChange}
                value={user.cellphone}
                required
              />
            </div>
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Estatus</label>
                <select
                    name="status"
                    className="w-full p-2 rounded bg-gray-700 text-gray-300"
                    onChange={handleChange}
                    value={user.status ? "activo" : "inactivo"}
                >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleModalClose}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                {selectedUser ? 'Actualizar' : 'Guardar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default UserFormModal;
