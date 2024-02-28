import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SubmessionCard from './SubmessionCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubmissionByTaskId } from '../../../ReduxToolKit/SubmessionSlice';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Corrected boxShadow value
  p: 4,
};
const submession=[1,1,1]
export default function SubmessionList({ handleClose, open }) { // Corrected props destructuring
  const dispatch=useDispatch()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const{submession}=useSelector(store=>store);
  useEffect(()=>
  {
    if(taskId)
    {
      dispatch(fetchSubmissionByTaskId(taskId))
 
    }
     },[taskId])
  console.log("submessions",submession)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {submession.submessions.length>0?<div className='space-y-2'>
              {submession.submessions.map((item)=><SubmessionCard item={item}/>)}
              </div>:
          <div className="">
        <div className='text-center'>
          No Submession Found
        </div>
         </div>}
         </div>
           </Box>
      </Modal>
    </div>
  );
}
