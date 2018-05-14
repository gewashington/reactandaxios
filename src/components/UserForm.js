import React from 'react';

/*
Notes:
- Name is used in the input in order to be able to grab its values

*/


//statelessfunction
const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input style={{ margin: "20px auto", display: "block"}} type="text" name="username" />
      <button>Submit</button>
    </form>
  );

}

export default UserForm;
