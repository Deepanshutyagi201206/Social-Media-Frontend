import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages"

const PagesRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
}

export default PagesRoutes