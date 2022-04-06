import { Routes, Route, BrowserRouter } from 'react-router-dom' 
import { GlobalStyle } from './global-styles';
import { Container } from './components/container'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Container>
        Oi
      </Container>
    </BrowserRouter>
  )
}

export default App;
