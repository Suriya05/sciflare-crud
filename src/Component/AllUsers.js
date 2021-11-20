import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '70%',
        padding: '50px 5px 0 5px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF !important'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <div className="container">
        <Button color="info" variant="contained" style={{marginRight:10,textAlign:"center",margin:"10px 55px"}} component={Link} to={`/add`}>Add New User</Button>
        <Grid item xs={12}>
        <Table className={classes.table}>

            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Grid>
        </div>
    )
}

export default AllUsers;