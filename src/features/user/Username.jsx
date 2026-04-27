import { useSelector } from "react-redux"
import { getUser } from "./userSlice";

export default function Username() {
  const { username } = useSelector(getUser);

  if (!username) return null;

  return (
    <p className="text-sm font-semibold hidden md:block">
      {username}
    </p>
  )
}
