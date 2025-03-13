import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica de inicio de sesión
    console.log("Iniciar sesión con", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FF5000] to-[#FF9000]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-[#FF5000] mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#3C3C3C]"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-3 w-full border border-[#3C3C3C] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5000]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#3C3C3C]"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 p-3 w-full border border-[#3C3C3C] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5000]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#FF5000] text-white font-semibold rounded-md hover:bg-[#FF7000] focus:outline-none focus:ring-2 focus:ring-[#FF5000]"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-[#3C3C3C]">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-[#FF5000] hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
