import { useState } from 'react'
import AccessibilityChecker from './components/AccessibilityChecker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "auto 10%" }}>
      <AccessibilityChecker />
    </div>
  )
}

export default App
