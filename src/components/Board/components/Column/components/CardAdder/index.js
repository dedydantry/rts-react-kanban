import { useState } from 'react'
import CardForm from './components/CardForm'

export default function CardAdder({ column, onConfirm }) {
  function confirmCard(card) {
    onConfirm(column, card)
    setAddingCard(false)
  }

  const [addingCard, setAddingCard] = useState(false)

  return (
    <>
      {addingCard ? (
        <CardForm onConfirm={confirmCard} onCancel={() => setAddingCard(false)} />
      ) : (
        <div className='react-kanban-card-adder-row'>
          <a href='javascript:;' className='react-kanban-card-adder-button' onClick={() => setAddingCard(!addingCard)}>
            + Add new to-do
          </a>
        </div>
      )}
    </>
  )
}
