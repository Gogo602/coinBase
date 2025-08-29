import { Route, Routes } from "react-router-dom"
import Sample from './pages/user/Sample'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sample/>} />
      </Routes>
    </div>
  )
}

export default App;
