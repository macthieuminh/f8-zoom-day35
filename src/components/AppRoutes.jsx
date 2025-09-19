import { HashRouter, Routes, Route } from "react-router"

// Pages
import Home from "../pages/Home"
import Counter from "../pages/Counter"
import Todo from "../pages/Todo"
import ProfileCard from "../pages/ProfileCard"
import ProductList from "../pages/ProductList"
import Comment from "../pages/Comment"
import Weather from "../pages/Weather"
import Buttons from "../pages/Buttons"
// Layout
import DefaultLayout from "../layout/DefaultLayout"

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/comment" element={<Comment />} />
                    <Route path="/profilecard" element={<ProfileCard />} />
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/buttons" element={<Buttons />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
