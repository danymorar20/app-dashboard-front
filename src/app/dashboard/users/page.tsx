"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { User } from "./interfaces/user.interface";
import userService from "./user.service";
import DataTable from "../components/date-table";
import UserFormModal from "./components/user-form";
import { toast } from "react-toastify";
import { FiEdit, FiTrash } from "react-icons/fi";
import Swal from 'sweetalert2';

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const userHeaders = useMemo(() => ['#', 'Nombre', 'Apellido', 'Correo', 'Celular', 'Estatus'], []);
  const userMap: { [key: string]: keyof User } = useMemo(
    () => ({
        '#': 'id',
        'Nombre': 'name',
        'Apellido': 'lastName',
        'Correo': 'email',
        'Celular': 'cellphone',
        'Estatus': 'status',
    }), []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const usersData = await userService.fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchData();
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const saveUser = useCallback(async (user: Omit<User, "id">) => {
    try {
      const newUser = await userService.createUser(user);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      toast.success("Usuario creado con éxito");
      closeModal();
    } catch (error) {
      console.log("Failed to save user: ", error);
      toast.error("Falló la creación del usuario");
    }
  }, [closeModal]);

  const handleEdit = useCallback((user: User) => {
    setSelectedUser(user);
    openModal();
  }, [openModal]);

  const handleDelete = useCallback(async (user: User) => {
    console.log("Eliminar usuario", user);
    try {
        if (!user.id) throw new Error("El usuario no esta definido");
        const result = await Swal.fire({
            title: `Deseas desactivar a ${user.name} ${user.lastName}?`,
            text: `${user.name} va a perder sus beneficios de la plataforma.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Desactivar.',
            cancelButtonText: 'Cancelar',
        });
        if (result.isConfirmed) {
            await userService.desactivateUser(user.id);
            setUsers((prevUsers) => { return prevUsers.filter(prevUser => prevUser.id !== user.id) });
            Swal.fire(
                'Usuario desactivado!',
                `${user.name} ${user.lastName} ha sido desactivado.`,
                'success'
            );
        }
    } catch (error) {
        console.error("Failed to desactivate the user: ", error);
        Swal.fire(
            'Error al desactivar el usuario',
            'Algo no previsto ocurrio',
            'error'
        );
    }
  }, []);

  const actions = useMemo(() => [
    {
      label: "Editar",
      icon: <FiEdit />,
      onClick: handleEdit,
    },
    {
      label: "Desactivar",
      icon: <FiTrash />,
      onClick: handleDelete,
    },
  ], [handleEdit, handleDelete]);

  return (
    <div className="p-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
                Usuarios
            </h3>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                Agregar
            </button>
          </div>
        <div className="overflow-x-auto">
            <DataTable headers={userHeaders} data={users} map={userMap}  actions={actions} />
        </div>
      </div>

      {/* user form */}
      <UserFormModal isOpen={isModalOpen} onClose={closeModal} onSave={saveUser} selectedUser={selectedUser}/>
    </div>
  );
}
