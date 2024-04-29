import { useEffect,useState} from "react"
const DataFetchingApi = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            return setData(json);
        });
    }, []);
    return (
        <div>
            Data Fetching Api
            
        </div>
        
    );
};
export default DataFetchingApi;