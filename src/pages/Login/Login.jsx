import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/userAuthentication";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { useAuthValue } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const { user } = useAuthValue();
  const { loginUser, error: newError, clearError, auth } = useAuthentication();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const user = { email, password };

    await loginUser(user);
  };

  useEffect(() => {
    if (newError) {
      setError(newError);
      clearError();
    }
  }, [newError]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  if (user) {
    navigator("/");
  }

  return (
    <div className="containerDefault h-heightDefault px-4">
      <span className="text-3xl font-bold  text-support01 ">Naped</span>
      <h1 className="text-4xl sm:text-5xl">Entrar na conta</h1>
      <form
        className="mt-8 flex w-full max-w-sm flex-col"
        onSubmit={handleSignIn}
      >
        <label className="relative">
          <AiOutlineUser className="absolute left-2 top-2/4 translate-y-[-85%] bg-transparent  text-support01 " />
          <input
            className="mb-3 w-full  appearance-none rounded bg-dark20 px-8 py-2 text-gray-700   shadow focus:text-white focus:outline-none "
            type="text"
            name="email"
            placeholder="Digite seu usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="relative">
          <RiLockPasswordLine className="absolute left-2 top-2/4 translate-y-[-85%] bg-transparent  text-support01 " />
          <input
            className="mb-3 w-full  appearance-none rounded bg-dark20 px-8 py-2 text-gray-700   shadow focus:text-white focus:outline-none "
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input
          type="submit"
          value="Log in"
          className="mb-2 cursor-pointer rounded  border-none bg-support01 py-2 font-bold text-white"
        />
      </form>
      <Link to="/register" className="text-white">
        Criar uma conta
      </Link>
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default Login;
