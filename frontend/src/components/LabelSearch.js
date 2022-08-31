import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchBox from './SearchBox';

export default function LabelSearch(){
    const [schoolone, setSchoolone] = React.useState('');
    const [schooltwo, setSchooltwo] = React.useState('');
    const [linkone, setLinkone] = React.useState('');
    const [linktwo, setLinktwo] = React.useState('');

    const navigate = useNavigate();
    const handleChangeone = (event: SelectChangeEvent) => {
        setSchoolone(event.target.value);

    };
    const handleChangetwo = (event: SelectChangeEvent) => {
        setSchooltwo(event.target.value);

    };
    const handleDropdownClickone = e => {
        e.preventDefault();
        const currentID = e.currentTarget.getAttribute('data-value');
        console.log(currentID);
        setLinkone(currentID);
    };
    const handleDropdownClicktwo = e => {
        e.preventDefault();
        const currentID = e.currentTarget.getAttribute('data-value');
        console.log(currentID);
        setLinktwo(currentID);
    };
    function slugSearch(e){
        var link=""
        if(linkone=="" && linktwo==""){
            link=""
            console.log('cond1')
        }else if( linktwo==""){
            link=linkone
            console.log('cond2')
            console.log(linkone)
            
        }else if(linkone==""){
            link=linktwo
            console.log('cond3')

        }else{
            link=linkone+'-'+linktwo
            console.log('cond4')

        }
        console.log(link);
        navigate(link ? `/search/?keys=${link}` : '/search');
    }
    return(
        <div className='border mx-auto lg:w-10/12 border-gray-300 shadow-xl rounded-lg p-4  mt-10'>
            <div className='mt-8 me-auto w-100 mt-3'>
                <div className="col-md-12 ">
                    <SearchBox/>
                </div>
            </div>
            <div className='d-flex pt-5 items-center justify-items-center'>
                <hr class="border-b border-gray-300 flex-grow"></hr>
                <span class="px-2">أو</span>
                <hr class="border-b border-gray-300 flex-grow"></hr>
            </div>
            <div>
                <Form >
                    <InputGroup className="d-flex flex-wrap justify-content-between me-auto w-100 pt-5 gap-3">
                        <FormControl className='col-md-4'>
                            <InputLabel id="demo-simple-select-label">School</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={schoolone} 
                            label="School"
                            onChange={handleChangeone}
                            >
                            <MenuItem onClick={handleDropdownClickone} value={"anas"}>Anas</MenuItem>
                            <MenuItem onClick={handleDropdownClickone} value={"anas-rud"}>Anas Rud</MenuItem>
                            <MenuItem onClick={handleDropdownClickone} value={"science"}>Science</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='col-md-4'>
                            <InputLabel id="demo-simple-select-label">Section</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={schooltwo} 
                            label="Section"
                            onChange={handleChangetwo}
                            >
                            <MenuItem onClick={handleDropdownClicktwo} value={"special"}>special</MenuItem>
                            <MenuItem onClick={handleDropdownClicktwo} value={"university"}>University</MenuItem>
                            <MenuItem onClick={handleDropdownClicktwo} value={"college"}>College</MenuItem>
                            </Select>
                        </FormControl>
                        <Button  onClick={slugSearch} id="button-search" className='col-md-3'>
                            {/* <i className="fas fa-search"></i> */}
                            <h4>Search</h4>
                        </Button>
                    </InputGroup>
                
                </Form>
            </div>
        </div>
        
    );
}