import { IconButton, MenuItem,Menu } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../UserList';
import SubmessionList from './SubmessionList';
import UpdatedList from './UpdatedList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../../ReduxToolKit/TaskSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import SubmitFormMdel from './SubmitFormMdel';
const role="ROLE_ADMIN";
export default function Taskcard(item) 
{
  const dispatch=useDispatch()
  const location=useLocation();
  const {auth}=useSelector(store=>store);
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
};

const [openUserList, setOpenUserList] = useState(false);
const handleCloseUserList = () => {
    setOpenUserList(false);
};

const [openSubmessionList, setOpenSubmessionList] = useState(false);
const handleCloseSubmessionList = () => {
    setOpenSubmessionList(false);
};


const handleOpenSubmessionList = () => {
  const updateParams=new URLSearchParams(location.search)
   updateParams.set("taskId",item.id);
  navigate(`${location.pathname}?${updateParams.toString()}`)
   
    setOpenSubmessionList(true);
    handleMenuClose();
};

//handleOpenSubmitFormModel
const [openSubmitFormModel, setOpenSubmitFormModel] = useState(false);
const handleCloseSubmitFormModel = () => {
    setOpenSubmitFormModel(false);
};
const handleOpenSubmitFormModel = () => {
  const updateParams=new URLSearchParams(location.search)
   updateParams.set("taskId",item.id);
  navigate(`${location.pathname}?${updateParams.toString()}`)
   
    setOpenSubmitFormModel(true);
    handleMenuClose();
};

const [openUpdatedList, setOpenUpdatedList] = useState(false);
const handleOpenUserList = () => {
  const updateParams=new URLSearchParams(location.search)
   updateParams.set("taskId",item.id);
  navigate(`${location.pathname}?${updateParams.toString()}`)
   
    setOpenUserList(true);
    handleMenuClose();
};
const handleRemoveTaskIdParams=()=>
{
        const updateParams=new URLSearchParams(location.search)
  
        updateParams.delete("filter");
        const queryString=updateParams.toString();
        const updatePath=queryString?`${location.pathname}?${queryString}`:location.pathname;
        navigate(updatePath);
   
}
const handleOpenUpdateTaskModel = () => {
  const updateParams=new URLSearchParams(location.search)
   updateParams.set("taskId",item.id);
  navigate(`${location.pathname}?${updateParams.toString()}`)
   
  setOpenUpdatedList(true);
  handleMenuClose();
};


const handleDeleteTask = () => {
  dispatch(deleteTask(item.id))
    handleMenuClose();
};
  return (
    <div>
      <div className='card lg:flex justify-between'>
        <div className='lg:flex gap-5 items-center space-y-2-w-[90%] lg:w-[70%]'>
            <div className='lg:w-[7rem] lg:h-[7rem]'>
                <img src={item.image} alt=""/>
                 </div>
            <div className='space-y-5'>
                <div className="space-y-2">
                    <h1 className='font-bold text-lg'>{item.title}
                </h1>
                <p className='text-gray-500 text-sm'>{item.description}</p>
                </div>
                <div className='flex flex-wrap gap-2 item-center'>
                    {item.tags.map((item)=><span className='py-1 px-5 rounded-full techStack'>{item}</span>)}
                </div>
            </div>
        </div>
        <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={openMenu}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          {
            auth.user?.role==="ROLE_ADMIN"?<>
            
            <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                                <MenuItem onClick={handleOpenSubmessionList}>See Submession</MenuItem>
                                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
          </>
          :<>
   <MenuItem onClick={handleOpenSubmitFormModel}>Submit</MenuItem>
                             
          </>
          }
         </Menu>
      
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
            <SubmessionList open={openSubmessionList} handleClose={handleCloseSubmessionList} />
            <UpdatedList  item={item} open={openUpdatedList} handleClose={() => setOpenUpdatedList(false)} />  
         <SubmitFormMdel open={openSubmitFormModel} handleClose={SubmitFormMdel}/>
              </div>
  )
}
