import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function Login() {
  const navigate = useNavigate();

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("usuário logado: ", result.user);
      navigate("/bank");
    } catch (error) {
      console.log("Erro ao logar", error);
    }
  };

  return (
    <div id="form" className="bg-white w-130 rounded-sm p-5 text-center m-auto mt-40 flex flex-col justify-center items-center gap-3">
      <h1 className="text-5xl">Faça login</h1>
      <p className="mt-3">Faça login para ter acesso à sua conta</p>

      <button
        onClick={loginGoogle}
        className="bg-blue-500 text-white rounded-sm w-105 p-2 mb-2 cursor-pointer hover:bg-blue-400">
        Entrar
      </button>

    </div>
  );
}

export default Login;
