import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/Container'
import { InputUser } from './components/InputUser'
import { ContextProvider } from "./context/user/userContext";


function App() {

  return (
    <div className="flex flex-col">
      <ContextProvider>
        <Router>
          <Routes>
            <Route index path="/" element={<Container />} />
            <Route path="create" element={<InputUser />} />
            <Route path="edit/:id" element={<InputUser />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  )
}

export { App }
