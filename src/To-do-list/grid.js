import * as React from 'react';
import {useState}from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {BasicCard  } from "./card";
import {CompleteBasicCard  } from "./card";
import {OnProgressBasicCard  } from "./card";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({toDo, setToDo, complete, onProgress,setOnProgress, setComplete}) {

  return (
    <div>
    <Box sx={{ flexGrow: 1, marginTop:3, padding:5}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <Typography variant='h5' sx={{marginBottom:3}} color={"#2196f3"}>TO-DO
            </Typography>
        {toDo?.map((item,ind)=>(
            <div style={{marginBottom:5}}>
           <BasicCard key={ind} task={item.task} 
            setOnProgress={setOnProgress} 
            onProgress={onProgress} setToDo={setToDo}
            toDo={toDo}
            id={item.id}
            desc={item.desc} setComplete={setComplete} complete={complete}/>
            </div>

        ))}
        </Grid>
        <Grid item xs={4}>
        <Typography variant='h5' sx={{marginBottom:3}}  color={"#2196f3"}>ON PROGRESS
            </Typography>
        {onProgress?.map((item,ind)=>(
            <div style={{marginBottom:5}}>
           <OnProgressBasicCard key={ind} task={item.task} 
            setOnProgress={setOnProgress} 
            onProgress={onProgress} setToDo={setToDo}
            toDo={toDo}
            id={item.id}
            desc={item.desc} setComplete={setComplete} complete={complete}/>
            </div>

        ))}
        </Grid>
        <Grid item xs={4}>
        <Typography variant='h5' sx={{marginBottom:3}}  color={"#2196f3"}>{complete?"CLOSED":""}
            </Typography>
        {complete?.map((item, ind)=>(
            <div style={{marginBottom:5}}>
            <CompleteBasicCard key={ind} task={item.task} 
            setOnProgress={setOnProgress} 
            onProgress={onProgress} setToDo={setToDo}
            toDo={toDo}
            id={item.id}
            desc={item.desc} setComplete={setComplete} complete={complete}/>
            </div>
        ))}
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}