import { useState, useEffect } from "react";

export const Login = () => {
    const [users, setUsers] = useState([]);
    const [text, setText]= useState("");

    useEffect(()=>{
        fetch("http://localhost:8080/users").then((d)=>d.json()).then((data)=>{setUsers(data);
    //   getdata();
    });
      }, []);

    return (
      <div>
        <input onChange={(e)=>setText(e.target.value)} 
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input onChange={(e)=>setText(e.target.value)} 
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" 
        onClick={()=>{
            const payload={
              username:text,
              pass:text,
              status: false
            };
            fetch("http://localhost:8080/users",{

              method:"POST",
              headers:{
                "content-type":"application/json"
              }, body:JSON.stringify(payload)
            }).then(()=>{
            //   getData();
            });
          }}
        >Login</button>
        {users.map(t=>(<div>{t.name}</div>))}
      </div>
    );
  };
  