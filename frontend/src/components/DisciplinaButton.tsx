import { corDisciplina } from "../helpers/corDisciplina";
import { IDisciplina } from "../types";

type Props = {
    nomeDisciplina: IDisciplina;
    disabled: boolean | undefined;
    selecionarDisciplina: () => void;
    disciplinaSelecionada: IDisciplina | null;
  }

export default function DisciplinaButton({ nomeDisciplina, disabled, selecionarDisciplina, disciplinaSelecionada }: Props) {
  return (
    <li style={{ backgroundColor: corDisciplina[nomeDisciplina], border: disciplinaSelecionada === nomeDisciplina ? '2px solid #ffffff' : 'none' }} className={`rounded-3xl p-3 flex items-center justify-center cursor-pointer ${disabled ? 'opacity-50 pointer-events-none' : ''}`} onClick={selecionarDisciplina}>
        {nomeDisciplina}
    </li>
  )
}
