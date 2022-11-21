import { useRef } from 'react'
import { when } from '@services/utils'

function CardForm({ onConfirm, onCancel }) {
  const inputCardTitle = useRef()
  const inputCardDescription = ''

  function addCard(event) {
    event.preventDefault()
    when(inputCardTitle.current.value)((value) => {
      onConfirm({ title: value, description: inputCardDescription })
    })
  }

  return (
    <div className='react-kanban-card-adder-form'>
      <form onSubmit={addCard}>
        <input
          className='react-kanban-card-adder-form__description'
          name='title'
          autoFocus
          defaultValue=''
          ref={inputCardTitle}
          placeholder='Write sometext'
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <button className='react-kanban-card-adder-form__button' type='submit'>
            Add
          </button>
          <button className='react-kanban-card-adder-form__button' type='button' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
