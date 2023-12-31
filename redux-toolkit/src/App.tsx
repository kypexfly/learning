import "@/styles/globals.css"
import Login from "@/components/Login"
import { useAppSelector } from "./redux/store"

function App() {
  const username = useAppSelector((state) => state.authReducer.value.username)
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  )

  const auth = useAppSelector((state) => state.authReducer.value)

  return (
    <div className="m-10 rounded border bg-blue-100 p-10">
      <Login />

      <h1>Username: {username}</h1>
      {isModerator && (
        <p className="font-bold text-red-500">You are a moderator!</p>
      )}

      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </div>
  )
}

export default App
