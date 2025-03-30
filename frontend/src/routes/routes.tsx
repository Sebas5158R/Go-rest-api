import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { UsersPage } from '../pages/UsersPage'
import { TasksPage } from '../pages/TasksPage'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/tasks" element={<TasksPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes