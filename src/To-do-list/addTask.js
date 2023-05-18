import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { toast } from 'react-toastify';

export default function AddTask({ setToDo, toDo }) {
  let [task, setTask] = useState();
  let [desc, setDesc] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    if (task==="" || desc==="") {
        toast("Fields are empty")
    } else if(task,desc){
        setToDo([...toDo, { task:task, desc:desc, id:toDo.length+1 }]);
        setDesc("")
        setTask("")
    }
   
  };

  
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        marginTop: 5,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        size="small"
        label="Task Name"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        size="small"
        label="Description"
        value={desc}
        variant="outlined"
        onChange={(e) => setDesc(e.target.value)}
      />
      <Button
        size="small"
        onClick={handleChange}
        sx={{ height: 40 }}
        variant="contained"
      >
        {" "}
        + Add Task
      </Button>
    </Box>
  );
}
