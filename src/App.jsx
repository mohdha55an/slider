import Slider from "./components/Slider"
import Fetch from './components/Fetch'

function App() {

  return (
    <>
    <h1 className="font-bold text-center pt-5">By JSON</h1>
      <Slider/>
      <h1 className="font-bold text-center pt-5">By FETCH</h1>
      <Fetch/>
    </>
  )
}

export default App
