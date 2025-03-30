import "@styles/global.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '@pages/Dashboard'
import { UsersPage } from '@pages/UsersPage'
import { TasksPage } from '@pages/TasksPage'

function AppRoutes() {
    return (
        <div className="container mx-auto mt-4">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/tasks" element={<TasksPage />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default AppRoutes