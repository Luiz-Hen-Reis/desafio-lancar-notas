import { useEffect, useState } from 'react'
import Bimestre from './components/Bimestre'
import { IBimestre, Resultado } from './types'
import axios from 'axios'

const apiUrl = "http://localhost:5000/resultados/";

const buscarResultados = async () => {
  const resultados = await axios.get<Resultado[]>(apiUrl);
  const resposta = resultados.data;

  return resposta;
}


export default function App() {
  const [resultados, setResultados] = useState<Resultado[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await buscarResultados();
        setResultados(resposta);
        
      } catch (error) {
        console.log('error ', error);
      }
    };

    fetchData();
  }, [resultados]);

  const handleRemoverDisciplina = async (id: string) => {
    try {
        await axios.delete(apiUrl + id);
    } catch (error) {
        console.log('error ,', error); 
    }
  }

  const handleAdicionarDisciplina = async (data: Resultado) => {
    try {
        await axios.post(apiUrl, { data });
    } catch (error) {
        console.log('error ,', error);
    }
  }

    const disciplinasPrimeiroBimestre = resultados?.filter((resultado) => resultado.bimestre === IBimestre.PRIMEIRO);
    const disciplinasSegundoBimestre = resultados?.filter((resultado) => resultado.bimestre === IBimestre.SEGUNDO);
    const disciplinasTerceiroBimestre = resultados?.filter((resultado) => resultado.bimestre === IBimestre.TERCEIRO);
    const disciplinasQuartoBimestre = resultados?.filter((resultado) => resultado.bimestre === IBimestre.QUARTO);

  return (
    <div className='lg:h-screen text-white flex justify-center'>
      <div className='lg:max-w-[1024px] w-full p-8 gap-8'>
          <Bimestre numeroBimestre={IBimestre.PRIMEIRO} disciplinas={disciplinasPrimeiroBimestre} handleRemoverDisciplina={handleRemoverDisciplina} handleAdicionarDisciplina={handleAdicionarDisciplina} />
          <Bimestre numeroBimestre={IBimestre.SEGUNDO} disciplinas={disciplinasSegundoBimestre} handleRemoverDisciplina={handleRemoverDisciplina} handleAdicionarDisciplina={handleAdicionarDisciplina} />
          <Bimestre numeroBimestre={IBimestre.TERCEIRO} disciplinas={disciplinasTerceiroBimestre} handleRemoverDisciplina={handleRemoverDisciplina} handleAdicionarDisciplina={handleAdicionarDisciplina} />
          <Bimestre numeroBimestre={IBimestre.QUARTO} disciplinas={disciplinasQuartoBimestre} handleRemoverDisciplina={handleRemoverDisciplina} handleAdicionarDisciplina={handleAdicionarDisciplina} />
      </div>
    </div>
  )
}
