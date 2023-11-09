import './App.css'
import { MantineProvider } from '@mantine/core'
import AppRoutes from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
