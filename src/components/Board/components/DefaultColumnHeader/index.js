import { useState } from 'react'
import PencilIcon from '../SvgIcon/PencilIcon'
import TrashIcon from '../SvgIcon/TrashIcon'

function useRenameMode(state) {
  const [renameMode, setRenameMode] = useState(state)

  function toggleRenameMode() {
    setRenameMode(!renameMode)
  }

  return [renameMode, toggleRenameMode]
}

export default function ({ children: column, allowRemoveColumn, onColumnRemove, allowRenameColumn, onColumnRename }) {
  const [renameMode, toggleRenameMode] = useRenameMode(false)
  const [titleInput, setTitleInput] = useState('')

  function handleRenameColumn(event) {
    event.preventDefault()

    onColumnRename(column, titleInput)
    toggleRenameMode()
  }

  function handleRenameMode() {
    setTitleInput(column.title)
    toggleRenameMode()
  }

  return (
    <div className='react-kanban-column-header'>
      {renameMode ? (
        <form onSubmit={handleRenameColumn}>
          <div>
            <input
              type='text'
              value={titleInput}
              onChange={({ target: { value } }) => setTitleInput(value)}
              autoFocus
            />
          </div>
          <div className='mt-1'>
            <button className='react-kanban-column-header__button' type='submit'>
              Rename
            </button>
            <button
              className='react-kanban-column-header__button button-cancel'
              type='button'
              onClick={handleRenameMode}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className='flex flex-row justify-between'>
          <span>{column.title}</span>
          <div className='flex flex-row w-20p'>
            {allowRemoveColumn && (
              <div onClick={() => onColumnRemove(column)} className='w-2r'>
                <TrashIcon />
              </div>
            )}

            {allowRemoveColumn && (
              <div onClick={handleRenameMode} className='w-2r'>
                <PencilIcon />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
