import { Header } from './components/Header'
import Contenido from './components/Contenido'
import Footer from './components/Footer'


export default function Home() {  

  return (
    <main className="w-4/5 mx-auto">
      <div>
        <Header />       
        <Contenido />  
        <Footer />   
      </div>
    </main>
  )
}
