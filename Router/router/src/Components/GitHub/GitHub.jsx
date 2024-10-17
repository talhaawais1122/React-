import React from 'react';
import { useLoaderData } from 'react-router-dom';

export function GitHub() {
  // let [data, setData] = useState(null); 

  let data = useLoaderData()

  // useEffect(() => {
  //   fetch("https://api.github.com/users/talhaawais1122")
  //     .then((response) => response.json()) 
  //     .then((data) => setData(data)) 
  //     .catch((error) => {
  //       console.error("Error fetching data:", error); 
  //     });
  // }, []);

  console.log(data);

  return (
    <>
      <h1>This is GitHub</h1>


  
   
      {data ? (
            
        <div className='m-5 p-5 bg-slate-800 text-center whitespace-normal text-slate-100'>
            <div>
           <img src={data.avatar_url} alt={data.name} className="mx-auto rounded-full" style={{ width: '150px', height: '150px' }} />
           </div>
          <p>Name: {data.name}</p>
          <p>Bio: {data.bio}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}



export const apiLoader = async ()=>{
  const response = await fetch("https://api.github.com/users/talhaawais1122")
  const data = await response.json();
  return data;
} 
