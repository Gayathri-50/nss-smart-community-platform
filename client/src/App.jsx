import { BrowserRouter,Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import BloodHome from "./pages/BloodHome"
import MissingAlerts from "./pages/missing/MissingAlerts"
import WasteReports from "./pages/waste/WasteReports"
import AdminDashboard from "./pages/admin/AdminDashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blood" element={<BloodHome />} />
        <Route path="missing" element={<MissingAlerts />} />
        <Route path="waste" element={<WasteReports />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  )
}

export default App