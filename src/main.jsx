import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/Title.css"
import "./styles/Main.css"
import "./styles/Cards.css"
import CardContainer from './components/CardContainer'
import Title from './components/Title'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title></Title>
    <CardContainer></CardContainer>
  </StrictMode>
)
