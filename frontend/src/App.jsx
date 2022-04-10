import { UserContextProvider } from './context/UserContext'
import { BrowserRouter } from 'react-router-dom' 
import { AllRoutes } from './components/AllRoutes'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './global-styles'

function App() {
  return (
    <>
    <UserContextProvider>
      <GlobalStyle/>
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
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
