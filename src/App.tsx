import './App.css'
import {HomePage} from "./pages/Home.tsx";
import {ProfileComponent} from "./constants/ProfileComponent.tsx";

const App = () => {
  return (
    <>
        <ProfileComponent />
      <HomePage />
    </>
  )
}

export default App

