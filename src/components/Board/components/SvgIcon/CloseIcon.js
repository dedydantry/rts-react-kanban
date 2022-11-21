export default function CloseIcon({ width, height }) {
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
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </svg>
  )
}

CloseIcon.defaultProps = {
  width: '15',
  height: '15',
}
