import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Loading from "./Loading";
import SingleToDo from "./SingleToDo";

const ToDo = () => {
  const [user] = useAuthState(auth);
  const url = `https://stormy-bastion-67814.herokuapp.com/api/gettingTodo?email=${user?.email}`;

  const {
    isLoading,
    error,
    data: tasks,
    refetch,
  } = useQuery("tasks", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error.message);
  }

  if (tasks === []) {
    return refetch();
  }

  // console.log(tasks);

  return (
    <section className="h-screen mt-8">
      <div className="overflow-x-auto mx-8">
        {/* <h2 className='text-center text-3xl font-semibold my-3 text-blue-600'>To-Do List</h2> */}
        <table className="table w-full">
          <thead className="bg-green-600">
            <tr>
              <th>SL</th>
              <th>Check Box</th>
              <th>Date</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <SingleToDo
                key={task._id}
                task={task}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ToDo;
