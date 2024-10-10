const Button = props => {
  const {className, buttonText} = props
  return <button className={`Button ${className}`}>{buttonText}</button>
}

const element = (
  <div className='bg-container'>
    <div className='set-heading d-flex flex-column justify-content-center'>
      <h1 className='h1'>Social Buttons</h1>

      <div className='set'>
        <Button buttonText='Like' className='like-button' />
        <Button buttonText='Comment' className='comment-button' />
        <Button buttonText='Share' className='share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
