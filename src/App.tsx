 
import { useState } from 'react'
import FracttalAi from '@/Mini/FracttalAi'
import './App.css'
import { useTheme } from '@mui/material';

function App() {
    const [count, setCount] = useState(0)
    const theme = useTheme();
  // const theme = React.useMemo(() => {
  //   const preferredType = configTheme || (prefersDarkMode ? 'dark' : 'light');
  //   return customTheme(preferredType);
  // }, [configTheme, prefersDarkMode]);

  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      <h1>Remote Fracttal Ai</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Sere el  <code>Dashboard</code> de la IA de Fracttal
        </p>
        <FracttalAi theme={theme} />
      </div>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
