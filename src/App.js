import React, {useState} from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext('red')


function App() {
  const [theme, setTheme] = useState('red')
  
  return (
    <ThemeContext.Provider value ={{backgroundColor: theme}}>
    <p>Welcome to Recipe App</p>
    Counter
    <Counter initialCount={5}/>
    Hook Counter
    <CounterHooks initialCount={3}/>
    <button onClick={()=>setTheme(prevTheme=>{
      return prevTheme === 'red'? 'blue': 'red'
    })}>Toggle Theme</button>
    </ThemeContext.Provider>
    
  );
}

export default App;
