import Bimestre from './components/Bimestre'
import { IBimestre } from './types'

export default function App() {
  return (
    <div className='lg:h-screen text-white flex justify-center'>
      <div className='lg:max-w-[1024px] w-full p-8 gap-8'>
          <Bimestre numeroBimestre={IBimestre.PRIMEIRO} />
          <Bimestre numeroBimestre={IBimestre.SEGUNDO} />
          <Bimestre numeroBimestre={IBimestre.TERCEIRO} />
          <Bimestre numeroBimestre={IBimestre.QUARTO} />
      </div>
    </div>
  )
}
