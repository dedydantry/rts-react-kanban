import { render } from 'react-dom'
import Board from '../src'
import getUrlParams from './services/getUrlParams'
import '../src/styles.scss'

const board = {
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

render(
  <Board
    {...getUrlParams()}
    allowRemoveLane
    allowRenameColumn
    allowRemoveCard
    onLaneRemove={console.log}
    onCardRemove={console.log}
    onLaneRename={console.log}
    onCardDetail={(a, b) => console.log(a, b, 'croot')}
    initialBoard={board}
    allowAddCard={{ on: 'bottom' }}
    onNewCardConfirm={(draftCard) => ({
      id: new Date().getTime(),
      ...draftCard,
    })}
    onCardNew={console.log}
  />,
  document.getElementById('app')
)
