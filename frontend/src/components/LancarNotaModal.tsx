import { useState, ChangeEvent } from "react";
import { IDisciplina, Resultado } from "../types";
import DisciplinaButton from "./DisciplinaButton";
import { bimestreEmTexto } from "../helpers/bimestreEmTexto";

type Props = {
    handleFecharModal: () => void;
    bimestre: number;
    disciplinas: Resultado[] | undefined;
    handleAdicionarDisciplina: (data: Resultado) => void;
}

const opcaoDisciplina: IDisciplina[] = [IDisciplina.Artes, IDisciplina.Biologia, IDisciplina.Geografia, IDisciplina.Sociologia];


export default function LancarNotaModal({ handleFecharModal, bimestre, disciplinas, handleAdicionarDisciplina }: Props) {
    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<IDisciplina | null>(null);
    const [nota, setNota] = useState<string>('');


    const handleConfirmar = async () => {
        if(disciplinaSelecionada && nota) {
            const data: Resultado = {
                bimestre: bimestreEmTexto[bimestre],
                disciplina: disciplinaSelecionada,
                nota: parseFloat(nota)
            }

            handleAdicionarDisciplina(data);

            handleFecharModal();
        }
    }

    const handleNotaChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        if (!value || parseFloat(value) < 0) {
            value = '0';
        }
        if (parseFloat(value) > 10) {
            value = '10';
        }
        setNota(value);
    }
    

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="flex flex-col bg-[#0F0F0F] p-6 rounded-lg w-full mx-4 lg:w-[678px]">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl">Bimestre {bimestre}</h2>
                <button className="text-4xl" onClick={handleFecharModal}>x</button>
            </div>
            <div className="mt-5">
                <p>Disciplina</p>
                <ul className="grid grid-cols-2 justify-center items-center mt-3 gap-4 align-middle lg:grid-cols-4">
                    {opcaoDisciplina.map((disciplina) => (
                         <DisciplinaButton nomeDisciplina={disciplina} key={disciplina} disabled={disciplinas?.some((item) => item.disciplina === disciplina)} selecionarDisciplina={() => setDisciplinaSelecionada(disciplina)} disciplinaSelecionada={disciplinaSelecionada} />
                    ))}
                </ul>
            </div>
            <div>
                <p>Nota</p>
                <input type="number" min="0" max="10" className="w-14 h-12 rounded-lg bg-transparent border border-[#6D6D6D] placeholder:text-center" placeholder="7.4" onChange={handleNotaChange}  />
            </div>
                <div className="flex justify-end mt-4">
                    <button disabled={!disciplinaSelecionada && !nota ? true : false} onClick={handleConfirmar} className="px-8 py-2 bg-[#E9FF1A] text-black rounded-lg disabled:opacity-50 disabled:pointer-events-none">Confirmar</button>
                </div>
        </div>
      </div>
    );
  };

