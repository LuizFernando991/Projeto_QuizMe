import { Routes, Route, BrowserRouter } from 'react-router-dom' 
import { GlobalStyle } from './global-styles';
import { Container } from './components/Container'
import { Login } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Container>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
