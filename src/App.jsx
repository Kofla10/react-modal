import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  console.log(openModal)
  
  return (
    <>
      <button className="openModal"
              onClick={ ()=>setOpenModal(true)}
      >
        Open Modal
      </button>
      <Modal open={ openModal }  
             onClose = {()=>setOpenModal(false)}
             />
    </>
  )
}

export default App
