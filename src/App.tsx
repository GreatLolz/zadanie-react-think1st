import "./index.css"
import WorkoutForm from "./components/WorkoutForm"

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-violet-100 w-full items-center p-5 md:p-20">
        <WorkoutForm />
      </div>
    </>
  )
}

export default App
