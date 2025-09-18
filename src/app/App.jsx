import TasksPage from '@/pages/TasksPage'
import TaskPage from '@/pages/TaskPage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './styles'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TasksPage />}></Route>
        <Route path="/tasks/:id" element={<TaskPage />}></Route>
        <Route path="*" element={<div>404 Page not foun</div>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
