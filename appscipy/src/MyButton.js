const MyButton = ({title, color}) => {
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