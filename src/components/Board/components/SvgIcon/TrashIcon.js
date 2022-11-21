export default function TrashIcon({ width, height }) {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width}
      height={height}
      stroke='currentColor'
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='css-i6dzq1'
    >
      <polyline points='3 6 5 6 21 6' />
      <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
    </svg>
  )
}

TrashIcon.defaultProps = {
  width: '15',
  height: '15',
}
