import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export  const BasicCard=({desc, task,toDo,id, setToDo, setOnProgress,onProgress, complete,setComplete})=> {

    const completeFunc=(task, desc)=>{
        setComplete([...complete,{task, desc, id:complete.length+2} ])
        const val=toDo.filter((x)=>x.id!==id)
        setToDo(val)
    }

    const onProgressFunc=(task, desc)=>{
        setOnProgress([...onProgress,{task, desc,id:onProgress.length+2} ])
        const val=toDo.filter((x)=>x.id!==id)
        setToDo(val)
    }

    const delet=(id)=>{
        const val=toDo.filter((x)=>x.id!==id)
        setToDo(val)
    }
  return (
    <Card >
      <CardContent>
        <Typography sx={{fontSize:"20px"}} color="text.secondary" gutterBottom>
        Task:{task} 
        {/* id:{id} */}
        </Typography>
        <Typography >
        Description:{desc}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Button size="small" onClick={()=>completeFunc(task, desc)}>Complete</Button>
        <Button size="small" onClick={()=>onProgressFunc(task, desc)}>on Progress</Button>
        <Button size="small" onClick={()=>delet(id)}color='error'>Delete</Button>
      </CardActions>
    </Card>
  );
}


export const OnProgressBasicCard=({desc, task,toDo,id, setToDo, setOnProgress,onProgress, complete,setComplete})=> {

    const completeFunc=(task, desc)=>{
        const val=onProgress.filter((x)=>x.id!==id)
        setOnProgress(val)
        setComplete([...complete,{task, desc, id:complete.length+2} ])

    }

    const toDoFunc=(task, desc)=>{
      const value=onProgress.filter((x)=>x.id!==id)
      setOnProgress(value)
      setToDo([...toDo,{task,desc,id:toDo.length+2}])
  }


    const delet=(id)=>{
        const val=onProgress.filter((x)=>x.id!==id)
        setOnProgress(val)
    }
  return (
    <>
    <Card >
      <CardContent>
        <Typography sx={{fontSize:"20px"}} color="text.secondary" gutterBottom>
        Task:{task} 
        {/* id:{id} */}
        </Typography>
        <Typography >
        Description:{desc}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Button size="small"  onClick={()=>toDoFunc(task, desc)}>To Do</Button>
        <Button size="small"  onClick={()=>completeFunc(task, desc)}>Complete</Button>
        <Button size="small" onClick={()=>delet(id)}color='error'>Delete</Button>
      </CardActions>
    </Card>
    </>
  );
}


export const CompleteBasicCard=({desc, task,toDo,id, setToDo, setOnProgress,onProgress, complete,setComplete})=> {

    const onProgressFunc=(task, desc)=>{
        const value=complete.filter((x)=>x.id!==id)
        setComplete(value)
        setOnProgress([...onProgress,{task,desc,id:onProgress.length+2}])
    }

    const delet=(id)=>{
        const val=complete.filter((x)=>x.id!==id)
        setComplete(val)
    }
  return (
    <Card >
      <CardContent>
        <Typography sx={{fontSize:"20px"}} color="text.secondary" gutterBottom>
        Task:{task} 
        {/* id:{id} */}
        </Typography>
        <Typography >
        Description:{desc}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Button size="small" onClick={()=>onProgressFunc(task, desc)}>on Progress</Button>
        <Button size="small" sx={{alignItems:"end"}} onClick={()=>delet(id)}color='error'>Delete</Button>
      </CardActions>
    </Card>
  );
}