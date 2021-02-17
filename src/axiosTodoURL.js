import axios from "axios";

const axiosTodoURL = axios.create({
  baseURL: "https://blog-mirafal-default-rtdb.firebaseio.com/posts",
});

export default axiosTodoURL;
