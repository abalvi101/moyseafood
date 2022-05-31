import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StLink from "../components/styled/StLink";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockIcon from '@mui/icons-material/Lock';

const UserProfile = ({className, url}) => {
    
    /********************** VARIABLES **********************/
    
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const email = useRef(null);
    const phone = useRef(null);

    let { id } = useParams();
    
    
    /********************** USE EFFECT **********************/

    useEffect(() => {  
        axios.get(url + '/' + id).then((response) => {
            setUser(response.data);        
        })
    }, []);
    
    /********************** FUNCTIONS **********************/

    /**
     * Send the request to update the user profile
     * 
     * @param {event} event
     */
    const updateUser = (event) => {
        event.preventDefault();
        let userAux = user;
        userAux.email = email.current.value;
        userAux.phone = phone.current.value;
        axios.put(url + '/' + id, userAux)
            .then(response => {
                setUser(response.data)
                setSuccess('Updated user')
            })
            .catch(error => setError(error))
    }
    
    /********************** RETURN **********************/

    if (!user) return "Loading..."

    return (
        <form className={className}>
            <StLink to={'/'}><ArrowBackIosNewIcon /></StLink>

            {error ? <span className={'error'}>{error}</span> : success ? <span className={'success'}>{success}</span> : null}

            <label>
                Id
                <div>
                    <input type={'text'} defaultValue={user.id} disabled />
                    <LockIcon />
                </div>
            </label>
            <label>
                Name
                <div>
                    <input type={'text'} defaultValue={user.name} disabled />
                    <LockIcon />
                </div>
            </label>
            <label>
                Username
                <div>
                    <input type={'text'} defaultValue={user.username} disabled />
                    <LockIcon />
                </div>
            </label>
            <label>
                Email
                <div>
                    <input ref={email} type={'text'} defaultValue={user.email} name={'email'} />
                    <LockOpenOutlinedIcon />
                </div>
            </label>
            <label>
                Website
                <div>
                    <input type={'text'} defaultValue={user.website} disabled />
                    <LockIcon />
                </div>
            </label>
            <label>
                Phone
                <div>
                    <input ref={phone} type={'text'} defaultValue={user.phone}  name={'phone'} />
                    <LockOpenOutlinedIcon />
                </div>
            </label>
            <fieldset>
                <legend>Address</legend>
                <label>
                    City
                    <div>
                        <input type={'text'} defaultValue={user.address.city} disabled />
                        <LockIcon />
                    </div>
                </label>
                <label>
                    Street
                    <div>
                        <input type={'text'} defaultValue={user.address.street} disabled />
                        <LockIcon />
                    </div>
                </label>
                <label>
                    Suite
                    <div>
                        <input type={'text'} defaultValue={user.address.suite} disabled />
                        <LockIcon />
                    </div>
                </label>
                <label>
                    Zipcode
                    <div>
                        <input type={'text'} defaultValue={user.address.zipcode} disabled />
                        <LockIcon />
                    </div>
                </label>
                <fieldset>
                    <legend>Geo</legend>
                    <label>
                        Latitude
                        <div>
                            <input type={'text'} defaultValue={user.address.geo.lat} disabled />
                            <LockIcon />
                        </div>
                    </label>
                    <label>
                        Longitude
                        <div>
                            <input type={'text'} defaultValue={user.address.geo.lng} disabled />
                            <LockIcon />
                        </div>
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <legend>Company</legend>
                <label>
                    Name
                    <div>
                        <input type={'text'} defaultValue={user.company.name} disabled />
                        <LockIcon />
                    </div>
                </label>
                <label>
                    Bs
                    <div>
                        <input type={'text'} defaultValue={user.company.bs} disabled />
                        <LockIcon />
                    </div>
                </label>
                <label>
                    Catch phrase
                    <div>
                        <input type={'text'} defaultValue={user.company.catchPhrase} disabled />
                        <LockIcon />
                    </div>
                </label>
            </fieldset>

            <button onClick={updateUser}>Update</button>
        </form>
    )
}

export default UserProfile;