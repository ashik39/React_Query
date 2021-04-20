import axios from 'axios'
import {QueryClient, QueryClientProvider,useQuery} from 'react-query'
import './App.css';

// function App() {

  const queryClient = new QueryClient();
  const getData = async () =>{
  
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  // .then((res) => res.data)
  console.log(res)
  console.log(res.data)
  }

  const Items = () => {
    const {isLoading, error, data} = useQuery("users", getData)

  if(isLoading) return 'LOADING..'
  if(error) return 'An error occured :' + error.message

  console.log(data)

  return (
    <div className="App">
      <h2>REACT QUERY</h2>      
    </div>
  );
  }

  // Higher order function
const hof = (WrappedComponent) => {
  // Its job is to return a react component warpping the baby component
  return (props) => (
      <QueryClientProvider client={queryClient}>
          <WrappedComponent {...props} />
      </QueryClientProvider>
  );
};


export default hof(Items);
