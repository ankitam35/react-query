import axios from "axios";
import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, data, isError, error } = useQuery("select-data", () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/");
  });

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
