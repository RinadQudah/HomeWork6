
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Paragraph from './paragraph'
import Card from './Card'
import Footer from './Footer'
//import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
    return (
      <>
      <Header/>
      <Paragraph/>
      <Card/>
      <Footer/>
      </>
    )
}

export default App
/*
<>
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Pricing/>}/>
        <Route path='Supportt' element={<Supportt/>}/>
        <Route path='Enterprise'element={<Enterprise/>} />
        <Route path='Feature'element={<Feature/>} />
      </Routes>
      <Card/>
      <Footer/>
    </Router>

    </>*/
