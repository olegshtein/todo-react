import TasksPage from '@/pages/TasksPage'
import TaskPage from '@/pages/TaskPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />}></Route>
        <Route path="/tasks/:id" element={<TaskPage />}></Route>
        <Route path="*" element={<div>404 Page not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
