import { useState } from "react";
import { useGetAllUsersQuery, useGetSingleUserQuery } from "../slice/userSlice";

{
  /* get single user based onuser inpout */
}
export const SingleUserByInput = () => {
  const [userInput, setUserInput] = useState<number>(0);
  const { data: singleUserData, isLoading: singleUserLoading } =
    useGetSingleUserQuery(userInput);
  return (
    <>
      <h3>Single User details</h3>
      <input
        type="number"
        value={userInput}
        onInputCapture={(e) => {
          setUserInput(parseInt(e?.currentTarget?.value));
          //   console.log("data", e?.currentTarget?.value);
        }}
      />
      <button type="submit">click</button>
      {singleUserLoading ? <h4>Loading</h4> : <h5>{singleUserData?.name}</h5>}
    </>
  );
};

{
  /* get multiple user */
}
export const MultipleUsers = () => {
  const { data: allUsersData, isLoading: allusersLoading } =
    useGetAllUsersQuery(0);
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <h3>All users</h3>
      <button onClick={() => setShow(!show)}>
        {show ? <h5>Close view</h5> : <h5>Open view</h5>}
      </button>
      {show ? (
        allusersLoading ? (
          <h4>Loading All Users</h4>
        ) : (
          allUsersData.map((item: any) => <h5>{item.name}</h5>)
        )
      ) : (
        ""
      )}
      <br />
    </>
  );
};
