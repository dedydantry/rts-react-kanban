export default function ({ children: card, dragging, allowRemoveCard, onCardRemove, onCardDetail }) {
  return (
    <div className={`relative border-gray react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
      <div onClick={() => onCardDetail(card)}>
        <span>
          <div className='react-kanban-card__title flex flex-row items-center text-sm'>
            <span>{card.title}</span>
          </div>
        </span>
        {card.owner ? <div className='react-kanban-card__description text-sm'>{card.owner}</div> : <></>}

        {card.avatar || card.label ? (
          <div className='kanban-card-status'>
            <img src={card.avatar} />
            <span>{card.label}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      {allowRemoveCard && (
        <div className='card-action w-2'>
          <button onClick={() => onCardRemove(card)} className='border-0 bg-white w-full pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
