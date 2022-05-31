import { useEffect, useState } from "react";
import axios from "axios";
import StLink from "./styled/StLink";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Table = ({className, url}) => {

    
    /********************** VARIABLES **********************/

    const [users, setUsers] = useState(null);
    const [filteredUsers, setFilteredUsers] = useState(null);
    const [filter, setFilter] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    })

    /********************** USE EFFECT **********************/

    useEffect(() => {  
        axios.get(url).then((response) => {
            setUsers(response.data);       
        })
    }, []);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);
    
    
    /********************** FUNCTIONS **********************/

    /**
     * Set the filter values when these are changed
     * 
     * @param {event} event 
     */
    const handleOnChange = (event) => {
        let auxFilter = filter;
        auxFilter[event.target.name] = event.target.value;
        setFilter(auxFilter);
        if (users) filterUsers();
    }

    /**
     * Filter the users to be displayed
     */
    const filterUsers = () => {
        let filteredUsersAux = users;
        Object.keys(filter).map((key) => {
            filteredUsersAux = filteredUsersAux.filter((user) => user[key].toLowerCase().search(filter[key].toLowerCase()) > -1);
        })
        setFilteredUsers(filteredUsersAux);
    }

    /**
     * Reset the filter values
     */
    const resetFilter = () => {
        setFilter({
            name: '',
            username: '',
            email: '',
            phone: '',
        })
    }
    
    /********************** RETURN **********************/

    if (!filteredUsers) return <div>No registered users</div>

    return (
        <table className={className}>
            <thead>
                <tr>
                    <td>
                        {/* <button onClick={() => resetFilter()} >
                            <DeleteOutlineIcon />
                        </button> */}
                    </td>
                    <td>
                        <input
                            type={'text'}
                            name={'name'}
                            initialvalue={filter.name}
                            onChange={handleOnChange}
                        />
                    </td>
                    <td>
                        <input
                            type={'text'}
                            name={'username'}
                            initialvalue={filter.username}
                            onChange={handleOnChange}
                        />
                    </td>
                    <td>
                        <input
                            type={'text'}
                            name={'email'}
                            initialvalue={filter.email}
                            onChange={handleOnChange}
                        />
                    </td>
                    <td>
                        <input
                            type={'text'}
                            name={'phone'}
                            initialvalue={filter.phone}
                            onChange={handleOnChange}
                        />
                    </td>
                    <td><SearchIcon /></td>
                </tr>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {filteredUsers.map(((user, id) => {
                    return (
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <StLink to={'/user/'+(id+1)}>
                                    {<VisibilityIcon/>}
                                </StLink>
                            </td>
                        </tr>
                    )
                }))}
            </tbody>
            
        </table>
    )
}

export default Table;