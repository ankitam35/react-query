import axios from "axios";
import { useQuery } from "react-query";

const fetchToDos = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos/");

const Home = () => {
  const { isLoading, data, isError, error } = useQuery(
    "select-data",
    fetchToDos
  );

  return isLoading ? (
    <p>Loading</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    data?.data.map((item) => (
      <div>
        {item.id} - {item.title}
      </div>
    ))
  );
};

export default Home;
