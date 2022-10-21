import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {Paper,IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={{
        borderRadius:20,       
        border:"1px solid blue",
        pl:2,
        mr:{sm:5}
    }}
    >
     <input className="search-bar"
        placeholder="Search"
        value=""
        onChange={()=>{}}/>
        <IconButton type="submit" sx={{p:"8px",color:"red"}}><Search/></IconButton>

    </Paper>
  )
}

export default SearchBar