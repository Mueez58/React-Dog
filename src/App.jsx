import './App.css'
import Dog from './Components/Dog'
import { Canvas } from '@react-three/fiber'


function App() {
  return (
    <>
    <main> 
    <Canvas>
    <Dog />
  </Canvas>
  <section></section>
  <section></section>
  <section></section>
  </main>
    </>

  )
}

export default App