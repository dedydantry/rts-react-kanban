export default function PlusIcon({ width, height }) {
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
      <line x1='12' y1='5' x2='12' y2='19' />
      <line x1='5' y1='12' x2='19' y2='12' />
    </svg>
  )
}

PlusIcon.defaultProps = {
  width: '15',
  height: '15',
}
