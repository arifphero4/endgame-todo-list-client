import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import SingleCompletedTask from "./SingleCompletedTask";

const CompletedTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(
      `https://stormy-bastion-67814.herokuapp.com/api/completedTask?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompletedTasks(data);
      });
  }, [user.email]);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="overflow-x-auto">
        <h2 className="text-center text-3xl font-semibold my-3 text-green-600">
          Completed Tasks
        </h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((completedTask, index) => (
              <SingleCompletedTask
                key={index}
                completedTask={completedTask}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompletedTask;
