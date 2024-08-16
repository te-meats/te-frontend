import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { selectCount } from '@reducers/count'
import { incrementCount } from '@actions/count'
import { useState } from 'react'
import { TextField } from '@mui/material'

function Example() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('0');

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => dispatch(incrementCount(Number(incrementAmount) || 0))}
        >
          count is {count}
        </button>
        <TextField
          value={incrementAmount}
          type="number"
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Example
