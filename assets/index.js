import { render } from 'react-dom'
import Board from '../src'
import getUrlParams from './services/getUrlParams'
import '../src/styles.scss'
import CardTemplate from './CardTemplate'
import PopupDetail from './PopupDetail'
import { useState } from 'react'

const initialBoard = {
  columns: [
    {
      id: '0206c8d7-4d48-4d97-b867-86fc2d21074d',
      title: 'Column Backlog',
      cards: [
        {
          id: '0206c8d7-4d48-4d97-b867-86fc2d21075d',
          title: 'Card title 1',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 4,
          title: 'Card title 4',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 5,
          title: 'Card title 5',
          description: 'Create api trasaction, index,show,update, and delete',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 6,
          title: 'Card title 6',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 7,
          title: 'Card title 7',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
        {
          id: 8,
          title: 'Card title 8',
          description: 'Card content',
          label: 'COMPLETED',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
      ],
    },
    {
      id: 2,
      title: 'Column Doing',
      cards: [
        {
          id: 9,
          title: 'Create api trasaction, index,show,update, and delete',
          description: 'dedydantry@gmail.com',
          label: 'ON PROGRESS',
          owner: 'dedy@email.com',
          avatar:
            'https://bc3-production-assets-cdn.basecamp-static.com/4459958/people/BAhpBMqRvQE=--5459b292b5e520ca85d904cbff57bfb0d3102a2d/avatar?v=1',
        },
      ],
    },
  ],
}

function App() {
  const [toggle, setTogglle] = useState(false)
  const [board, setBoard] = useState(initialBoard)
  const [card, setCard] = useState(null)
  const [activeColumnIndex, setActiveColumnIndex] = useState(null)
  const [activeCardIndex, setActiveCardIndex] = useState(null)

  const initIndex = (a, b) => {
    const findIndexColumn = board.columns.findIndex((x) => x.id === a.id)
    setActiveColumnIndex(findIndexColumn)
    let findIndexCard = null
    if (b) {
      findIndexCard = board.columns[findIndexColumn].cards.findIndex((x) => x.id === b.id)
      setActiveCardIndex(findIndexCard)
    }
    return {
      indexCloum: findIndexColumn,
      indexCard: findIndexCard,
    }
  }
  const onDetail = (a, b) => {
    initIndex(a, b)
    setCard({ ...b })
    setTogglle(true)
  }

  const submitEdit = ({ comment }) => {
    const c = board
    c.columns[activeColumnIndex].cards[activeCardIndex].title = comment
    setBoard({ ...c })
    setTogglle(false)
  }

  const onCardNew = (a, b, c) => {
    const { indexCloum } = initIndex(b)
    const all = board
    all.columns[indexCloum].cards.push(c)
    setBoard(all)
  }

  const onRenameColumn = (a, b) => {
    console.log(a, 'a')
    console.log(b, 'b')
  }
  return (
    <>
      <Board
        {...getUrlParams()}
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onColumnRename={onRenameColumn}
        allowRemoveColumn
        onColumnRemove={console.log}
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        onCardDetail={onDetail}
        initialBoard={board}
        allowAddCard={{ on: 'bottom' }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard,
        })}
        onCardNew={onCardNew}
        CardComponent={CardTemplate}
      />

      {toggle ? <PopupDetail card={card} onSubmit={submitEdit} /> : <></>}
    </>
  )
}

render(<App />, document.getElementById('app'))
