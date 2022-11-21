export default function ({ children: card, dragging, allowRemoveCard, onCardRemove, onCardDetail }) {
  return (
    <div className={`relative shadow-sm react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
      <div className='' onClick={() => onCardDetail(card)}>
        <h5 className='text-md font-medium pr-3'>{card.title}</h5>
        <p className='text-gray-500'>Algotrading</p>
        <div className='w-full'>
          <ul className='flex flex-wrap mt-2 items-center'>
            <li className='w-1/6 text-xs flex flex-col text-center border border-sky-400 rounded-lg py-1 bg-sky-300 mr-1.5'>
              <span className='border-b-1 font-semibold'>Sep</span>
              <span className='text-gray-600 font-semibold'>01</span>
            </li>
            <li className='mr-1'>
              <img
                className='inline-block h-8 w-8 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </li>
            <li className='mr-2'>
              <img
                className='inline-block h-8 w-8 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </li>
            <li>
              <span className='bg-indigo-200 border border-indigo-300 text-xs font-semibold text-indigo-600 py-1 px-2 rounded-lg'>
                COMPLETED
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='absolute text-lg top-0 right-2 px-2'>
        <button onClick={() => onCardRemove(card)} className='text-xl text-gray-500 hover:text-gray-600'>
          x
        </button>
      </div>
    </div>
  )
}
