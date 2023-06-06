import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/layout"
import Dashboard from "./pages/dashboard/dashboard"
import Calendar from "./pages/calendar/calendar"
import Board from "./pages/trello-board/board"
import Users from "./pages/users/users"


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