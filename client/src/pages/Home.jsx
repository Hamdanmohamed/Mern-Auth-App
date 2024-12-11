import { useSelector } from "react-redux"

export default function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Welcome, {user?.username || "Guest"}!</h1>
      <p>Email: {user?.email}</p>
    </div>
  )
}
