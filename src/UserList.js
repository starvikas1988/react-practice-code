import React,{useState,useEffect} from "react";

export default function UserList(){

    const [users,setUsers] = useState([]);

    // useEffect(()=>{
    //     const fetchUsers = async()=>{
    //         try {
    //             const response = await fetch('https://randomuser.me/api/?results=10');
    //             const data = await response.json();
    //             setUsers(data.results);
    //         } catch (error) {
    //             console.error('Error while fetching users',error);
    //         }
    //     }
    //     fetchUsers();
    // },[]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error('Error while fetching Users',error));
    },[]);


    return(
        <>
        <div>
        <ul>
            {users.map((user,index)=>(
                <li key={user.login.uuid}>{user.name.first} {user.name.last}</li>
            ))}
        </ul>
        </div>
        </>
    );
}