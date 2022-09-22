const MyButton = ({ title, color }) => {
  // destructuring coming through as an object
  const buttonStyle = {
    font: color,
    backgroundColor: color,
    fontSize: '20px',
  }
  return (
    <button style={buttonStyle}>{title}</button>
  )
}

export default MyButton