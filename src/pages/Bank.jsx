import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Bank() {

    const [saldo, setSaldo] = useState(() => {
        const salvarSaldo = localStorage.getItem("saldo");
        return salvarSaldo ? Number(salvarSaldo) : 0
    });
    const [quantia, setQuantia] = useState("");

    useEffect(() => {
        localStorage.setItem("saldo", saldo);
    }, [saldo]);

    function adicionarQuantia(){
        if (quantia > 0){
            setSaldo(saldo + Number(quantia))
            setQuantia("")
        } else{
            alert("Quantia inválida.")
        }
    }

    function retirarQuantia() {
        const valor = Number(quantia);

        if (valor <= 0) {
            alert("Quantia inválida.");
            return
        }

        if (valor > saldo){
            alert("Saldo insuficiente.")
            return
        }

        setSaldo(saldo - valor)
        setQuantia("")
    }

    return(
        <>
            <Navbar/>

            <div className="bg-white w-150 m-auto mt-40 p-5 text-center rounded-sm">
                <h1 id="currency" className="text-5xl">Saldo: R${saldo.toFixed(2)}</h1>

                <div>
                    <p className="text-2xl mt-5 mb-2">Adicionar dinheiro</p>
                    <input
                        id="bankInput"
                        type="number" 
                        value={quantia}
                        onChange={(e) => setQuantia(e.target.value)} 
                        placeholder="digite quantia aqui"
                    />

                    <div className="flex gap-5">
                        <button
                            id="bankButton"
                            onClick={() => adicionarQuantia()} 
                            className="bg-blue-500 text-white rounded-sm w-88 p-2 mb-2 mt-5 cursor-pointer hover:bg-blue-400">
                            Depositar
                        </button>

                        <button
                            id="bankButton"
                            onClick={() => retirarQuantia()} 
                            className="bg-blue-500 text-white rounded-sm w-88 p-2 mb-2 mt-5 cursor-pointer hover:bg-blue-400">
                            Resgatar
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Bank;