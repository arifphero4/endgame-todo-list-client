import React from 'react';

const SingleCompletedTask = ({ completedTask, index }) => {

    const {date, taskInput} = completedTask

    return (
        <>
            <tr className="hover">
                <th>{index + 1}</th>
                <td>{date}</td>
                <td>{taskInput}</td>
                <td>
                    <p className='bg-green-600 font-semibold px-3 py-1 text-white'>Completed</p>
                </td>
            </tr>
        </>
    );
};

export default SingleCompletedTask;