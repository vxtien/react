import { useState } from "react";

const MyForm = () => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    const [userInfor, setUserInfor] = useState({
        firstName: "",
        lastName: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();

        const firstNameValue = e.target.firstName.value;
        const lasttNameValue = e.target.lastName.value;
        
        const user = {
            firstName: firstNameValue,
            lastName: lasttNameValue
        }
        setUserInfor(user);
        //call api to post data to server
    }
    
    console.log(userInfor);
    // console.log(firstName, lastName);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input placeholder="Enter your F name" 
            name="firstName"
        />
      </div>
      <div>
        <label>Last Name</label>
        <input placeholder="Enter your L name" 
            name="lastName"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
