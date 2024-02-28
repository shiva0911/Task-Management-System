import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { acceptDeclineSubmission } from '../../../ReduxToolKit/SubmessionSlice';
export default function SubmessionCard({item}) {
    const dispatch=useDispatch();
    const handleAcceptDecline=(status)=>
    {
        dispatch(acceptDeclineSubmission({id:item.id,status}))
        console.log(status)
    }
  return (
    <div className='rounded-md bg-black p-5 flex items-center justify-between'>
        <div className='space-y-2'>
            <div className='flex items-center gap-2'>
                <span>Git hub:</span>
                <div className='flex items-center gap-2 text-[#c24dd0]'>
                    <OpenInNewIcon/>
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">Go to Link</a>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
                <p>Submession Time: </p>
                <p className="text-gray-400">{item.submessionTime}</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
                <p>Submession Time:</p>
                <p className="text-gray-400">2024-01-18t22:15:39.517</p>
            </div>
        </div>
    <div>
        
        {
            item.status==="PENDING" ?(<div className="flex gap-5">
                <div className="text-green-500">
                    <IconButton color="success" onClick={()=>handleAcceptDecline("ACCEPTED")}>
                        <CheckIcon/>
                    </IconButton>
                </div>
                <div className="text-green-500">
                <IconButton color="error" onClick={()=>handleAcceptDecline("DECLINED")}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                
            </div>):<Button color={item.status==="ACCEPTED" ?"success":"error"} size="small" variant="outlined">
                {item.status}
                
                Accepte</Button>

        }
    </div>
    </div>
  )
}
