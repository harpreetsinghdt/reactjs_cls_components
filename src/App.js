import UserFinder from "./components/UserFinder";
import UserContext from "./store/user-context";

const DUMMY_USERS = [
  { id: "u6", name: "money" },
  { id: "u5", name: "harp" },
  { id: "u4", name: "Harry" },
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const userContext = {
    users: DUMMY_USERS,
  };

  return (
    <UserContext.Provider value={userContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
