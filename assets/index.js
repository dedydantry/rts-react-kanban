import { useState } from 'react'
import { render } from 'react-dom'
import Board, {
  addCard,
  addColumn,
  removeCard,
  changeColumn,
  moveCard,
  moveColumn,
  removeColumn,
  filterCard,
  filterCardDeep,
} from '../src'
// import getUrlParams from './services/getUrlParams'
import '../src/styles.scss'
import ColumnHeader from './components/ColumnHeader'
const initalBoard = {
  columns: [
    {
      id: '0206c8d7-4d48-4d97-b867-86fc2d21074d',
      title: 'Column Backlog',
      cards: [
        {
          id: '0206c8d7-4d48-4d97-b867-86fc2d21075d',
          title: 'Dedy title 1',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
            {
              name: 'prabowo',
            },
          ],
        },
        {
          id: 2,
          title: 'Joko title 2',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
          ],
        },
        {
          id: 3,
          title: 'wowo dantry',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
          ],
        },
        {
          id: 4,
          title: 'kadrun title 4',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
          ],
        },
        {
          id: 5,
          title: 'Card title 5',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
          ],
        },
        {
          id: 6,
          title: 'Card title 6',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
          ],
        },
        {
          id: 7,
          title: 'Card title probocor',
          description: 'Card content',
          members: [
            {
              name: 'prabowo',
            },
          ],
        },
        {
          id: 8,
          title: 'Card title 8',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Column Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content',
          members: [
            {
              name: 'jokowi',
            },
            {
              name: 'mega',
            },
          ],
        },
      ],
    },
  ],
}

function App() {
  const [board, setBoard] = useState(initalBoard)

  function onAddColumn() {
    const newBoard = addColumn(board, {
      id: new Date().getTime(),
      title: 'Column Backlog',
      cards: [],
    })

    setBoard(newBoard)
  }

  const onNewColumnConfirm = (column) => {
    const newBoard = addColumn(board, {
      id: new Date().getTime(),
      ...column,
    })

    setBoard(newBoard)
  }

  const onColumnRename = (a, b) => {
    const rename = changeColumn(board, a, { title: b })
    setBoard(rename)
  }

  const onCardRemove = (a, b, c) => {
    const remove = removeCard(board, a, b)
    setBoard(remove)
  }

  const onFilter = (arg) => {
    const filtered = filterCard(board, 'title', arg)
    setBoard(filtered)
  }

  const onFilterDep = (arg) => {
    const filtered = filterCardDeep(board, 'members', 'name', 'jokowi')
    setBoard(filtered)
  }

  const onNewCard = (a, b) => {
    const add = addCard(board, a, b)
    setBoard(add)
  }

  const onCardDragEnd = (a, b, c, d) => {
    const movedCard = moveCard(board, b, c)
    setBoard(movedCard)
  }

  const onColumnDragEnd = (column, from, to) => {
    const movedColumn = moveColumn(board, from, to)
    setBoard(movedColumn)
  }

  const onColumnRemove = (column) => {
    const removed = removeColumn(board, column)
    setBoard(removed)
  }

  const onCardDetail = (card) => {
    console.log(card)
  }

  const headerCol = (props) => {
    return <ColumnHeader {...props} />
  }

  return (
    <>
      <div className=''>
        <button onClick={onAddColumn}>Add Column</button> |<button onClick={() => onFilter('dedy')}>Filters</button> |
        <button onClick={() => onFilterDep()}>Filters deep</button> |<button onClick={onFilter}>Filters</button> |
        <button>Clear filter</button>|<button>Add Card</button>
      </div>
      <Board
        allowAddCard={{ on: 'bottom' }}
        allowAddColumn
        allowRemoveCard
        allowRemoveColumn
        allowRenameColumn
        onNewColumnConfirm={onNewColumnConfirm}
        onNewCardConfirm={onNewCard}
        onCardRemove={onCardRemove}
        onColumnRename={onColumnRename}
        onColumnRemove={onColumnRemove}
        onCardDragEnd={onCardDragEnd}
        onColumnDragEnd={onColumnDragEnd}
        onCardDetail={onCardDetail}
        renderColumnHeader={headerCol}
      >
        {board}
      </Board>
    </>
  )
}

render(<App />, document.getElementById('app'))
