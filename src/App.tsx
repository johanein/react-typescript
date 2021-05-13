import './styles.css'
import image from './normal.png'
import logo from './logo.svg'
import ClickCounter from './Components/ClickCounter'

const App = () => {
  return (
    <>
      <h1>
        EditedAgain React Typescript Webpack Starter Template -
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={image} alt="Normal size" width={300} height={200} />
      <img src={logo} alt="svg logo" width={300} height={200} />
      <ClickCounter />
    </>
  )
}

export { App }
