import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../ReduxToolKit/AuthSlice';
import { assignTaskToUser } from '../../ReduxToolKit/TaskSlice';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  p: 2,
}
const tasks = [1, 1, 1, 1]
export default function UserListModal({ handleClose, open }) { // Rename the component here
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);
  const location=useLocation();
  const queryParams=new URLSearchParams(location.search);
  const taskId=queryParams.get("taskId");
  
  useEffect(() => {
    dispatch(getUserList(localStorage.getItem("jwt")))
  }, [dispatch])
  const handleAssignedTask = (user) => {
    dispatch(assignTaskToUser({ userId: user.id, taskId: taskId }));
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            auth.users.map((item, index) =>
              <>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src=""></Avatar>
                      </ListItemAvatar>
                      <ListItemText secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`} primary={item.fullName} />
                    </ListItem>
                  </div>
                  <div>
                    <Button bonClick ={()=>handleAssignedTask(item)}className='customeButton'>Select</Button>
                  </div>

                </div>
                {index !== tasks.length - 1 && <Divider variant='inset' />}
              </>)
          }
        </Box>
      </Modal>
    </div>
  );
}
