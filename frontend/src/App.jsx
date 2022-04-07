import { UserContextProvider } from './context/UserContext';
import { Routes, Route, BrowserRouter } from 'react-router-dom' 
import { Container } from './components/Container'
import { Login } from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './global-styles';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
      <GlobalStyle/>
      <Container>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Container>
      </UserContextProvider>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App;
