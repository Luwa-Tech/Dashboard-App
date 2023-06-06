import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Dashboard from "./pages/dashboard"
import Calendar from "./pages/calendar"
import Board from "./pages/board"
import Users from "./pages/users"


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard/>} />
      <Route path="calendar" element={<Calendar/>} />
      <Route path="board" element={<Board/>} />
      <Route path="users" element={<Users/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App