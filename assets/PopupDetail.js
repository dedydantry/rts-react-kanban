import { useRef } from 'react'

export default function PopupDetail({ onSubmit, card }) {
  const comment = useRef()

  const sumbited = () => {
    const val = comment.current.value
    onSubmit({ comment: val })
  }
  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />

      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
            <div>
              <label htmlFor='comment' className='block text-sm font-medium text-gray-700'>
                Add your comment
              </label>
              <div className='mt-1'>
                <textarea
                  ref={comment}
                  defaultValue={card.title}
                  rows='4'
                  name='comment'
                  id='comment'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div className='mt-5 sm:mt-6'>
              <button
                onClick={sumbited}
                type='button'
                className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
