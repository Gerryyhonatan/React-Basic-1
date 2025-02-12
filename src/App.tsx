import HeaderCustom from "./components/Header"
// import Welcome from "./components/Welcome"
// import ProfileCard from "./components/ProfileCard"
// import Counter from "./components/Counter"
// import Like from "./components/Like"
import { Routes, Route } from "react-router"
// import TermsPage from "./pages/TermsPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetailPage from "./pages/ProductDetailPage"
// import ProductListPage from "./pages/ProductListPage"
import AboutPage from "./pages/AboutPage"
import ProductPage from "./pages/ProductPage"

// type Teacher = {
//   name : string;
//   job : string;
//   year : number;
//   id : number;
// }

// const teachers: Teacher[] = [
//   {
//     name: "sandhika",
//     job: "Dosen",
//     year : 1995,
//     id: 1
//   },
//   {
//     name: "Theo",
//     job: "Content Creator",
//     year : 1995,
//     id: 2
//   },
//   {
//     name: "Eko",
//     job: "Tech Lead",
//     year : 1993,
//     id: 3
//   },

// ]

function App() {
  return (
    <>
      <HeaderCustom/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/productDetail" element={<ProductDetailPage/>}/>

        {/* DYNAMIC ROUTE */}
        <Route path="/product/:productSlug" element={<ProductDetailPage/>}/>
        
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
