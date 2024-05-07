import axios from "axios";
import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, data } = useQuery("select-data", () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/");
  });

console.log(data)
  return isLoading ? (
    <p>Loading</p>
  ) : (
    data?.data.map((item) => (
      <div>
        {item.id} - {item.title}
      </div>
    ))
  );
};

export default Home;
