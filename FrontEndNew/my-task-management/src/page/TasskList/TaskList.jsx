import React, { useEffect } from 'react'
import Taskcard from '../Task/TaskCard/Taskcard'
import {useDispatch, useSelector} from "react-redux";
import {fetchTask, fetchUserTasks} from "../../ReduxToolKit/TaskSlice"
import { useLocation } from 'react-router-dom';

export default function TaskList() {
  const dispatch=useDispatch();
  const {task,auth}=useSelector(store=>store)
  const location=useLocation();
  const queryParams=new URLSearchParams(location.search);
  const filterValue=queryParams.get("filter");
  
  useEffect(() => {
    if (auth.user?.role === "ROLE_ADMIN") {
      dispatch(fetchTask({ status: filterValue }));
    } else {
      dispatch(fetchUserTasks({ status: filterValue }));
    }
  }, [filterValue, auth.user?.role, dispatch]);
  

  
  return (
    <div className='w-[67vw]'>
        <div className='spacey-y-3'>
        
        {
          auth.user?.role==="ROLE_ADMIN"? task.tasks.map((item)=>
          (<Taskcard item={item}/>)):task.usersTask.map((item)=>
          {
            <Taskcard item={item}/>
          })

        }
        
      </div>
    </div>
  )
}
