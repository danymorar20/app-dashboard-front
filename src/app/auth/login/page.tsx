"use client";

import React, { useEffect, useState } from 'react';
import { Login } from './interfaces/login.interface';
import loginService from './login.service';
import { AccessToken } from '../interfaces/access-token.interface';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('token');
        token ? router.push('../dashboard') : setLoading(false);
    }, [router]);

    const [credentials, setCredentials] = useState<Login>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCredentials({
            ...credentials,
            [id]: value
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response: AccessToken = await loginService.login(credentials);
        if (response.access_token) {
            Cookies.set('token', response.access_token, {
                secure: true,
                sameSite: 'strict',
                expires: Number(process.env.NEXT_PUBLIC_TOKEN_DURATION)
            });

            router.push('../dashboard');
        }
    }

    //TODO: AGREGAR PANTALLAS DE CARGA Y REDIRECCION PERSONALIZADAS
    if (loading) return <p>Cargando...</p>;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-center text-3xl font-bold text-gray-100 mb-6">INICIAR SESIÓN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
              Correo
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ingresa tu contraseña"
              className="w-full px-3 py-2 text-gray-100 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full px-3 py-2 text-gray-100 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="form-checkbox text-indigo-600 bg-gray-800 border-gray-600" />
              <span className="ml-2">Recuerdame</span>
            </label>
            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-400">¿Olvidaste tu contraseña?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Ingresar
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-4">
          ¿No tienes una cuenta? <a href="#" className="text-indigo-500 hover:text-indigo-400">Registrate</a>
        </p>
      </div>
    </div>
  );
}
