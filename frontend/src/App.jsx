import { UserContextProvider } from './context/UserContext'
import { BrowserRouter } from 'react-router-dom' 
import { Container } from './components/Container'
import { AnimatedAuthRoutes } from './components/AnimatedAuthRoutes'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './global-styles'

function App() {
  return (
    <>
    <UserContextProvider>
      <GlobalStyle/>
      <Container>
        <BrowserRouter>
          <AnimatedAuthRoutes />
        </BrowserRouter>
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
    </>
  )
}

export default App;
