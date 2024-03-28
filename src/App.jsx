import "./App.css";
import { useUsers } from "./services/queries";
import { useCreateUser } from "./services/mutations";

const newUser = {
  first_name: "Emre",
  last_name: "Şahiner",
};
function App() {
  const { isPending, error, data: users } = useUsers();
  const mutation = useCreateUser();

  const handleClick = () => {
    mutation.mutate(newUser);
  };

  if (isPending) return "Loading...";

  if (error) return "error is" + error.message;

  return (
    <>
      {users.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
      <button onClick={handleClick}>Yeni kullanıcı ekle</button>
    </>
  );
}

export default App;
