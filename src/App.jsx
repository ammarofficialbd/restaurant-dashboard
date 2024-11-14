
import './App.css'

function App() {

  return (
    <>
     <Routes> 
            <Route path={'/'} element={<Navbar/>}>
              <Route index element={<HomePage/>}/>  
            </Route>
        </Routes>
    </>
  )
}

export default App
