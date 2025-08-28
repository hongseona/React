import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from "./App.jsx"    // 최종
import App from "./App_V1.jsx"
import { EffectAndRef, FocusInput, PreviousValue } from './RefHookTest.jsx'
// import App from './ArrayTest.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* ref 훅 테스트 */}
    {/* <FocusInput /> */}
    {/* <EffectAndRef /> */}
    {/* <PreviousValue /> */}
  </StrictMode>
)
