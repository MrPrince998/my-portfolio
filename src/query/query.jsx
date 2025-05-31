import { useQuery } from "@tanstack/react-query";
import axios from "axios";


// export const { data, isLoading, isError, error } = useQuery({
//   queryKey: ["BioData"],
//   queryFn: () => axios.get("http://localhost:8000/api/eph-get"),
// });

// if (isLoading) {
//   return <p>Loading...</p>;
// }
// if (error) {
//   console.log(error);
// }

export const {data} = useQuery({
  queryKey: ["BioData"],
  queryFn: fetchBioData
})

 const fetchBioData = () => {
  try{
    const response = axios.get("http://localhost:8000/api/eph-get");
    console.log(response.data)
    return response.data;
  }catch(error){
    console.log("error: ", error)
  }
}