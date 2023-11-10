import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
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
