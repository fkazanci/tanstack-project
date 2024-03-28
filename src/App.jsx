import "./App.css";
import { useUsers } from "./services/queries";
import { useCreateUser } from "./services/mutations";

const newUser = {
  first_name: "Emre",
  last_name: "Şahiner",
};
function App() {
  /*
  const { isPending, error, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: ()=> axios.get("https://reqres.in/api/users").then((res) => res.data.data),
    staleTime: 30000,
  });
*/

  const { isPending, error, data: users } = useUsers();
  /*
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (user) => axios.post("https://reqres.in/api/users", user).then((res) => res.data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  */
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
