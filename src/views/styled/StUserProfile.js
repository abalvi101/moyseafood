import styled from "styled-components";
import UserProfile from "../UserProfile";

const StUserProfile = styled(UserProfile)`
    display: flex;
    flex-wrap: wrap;
    span {
        width: 100%;
        margin: 1rem 2rem; 
    }
    .error {
        color: red;
    }
    .success {
        color: green;
    }
    label, fieldset {
        width: 30%;
        min-width: 15rem;
        max-width: 20rem;
        margin: 1rem 2rem;
        padding-left: 0.6rem;
    }
    label > div {
        width: 100%;
        display: flex;
        padding-top: 0.5rem;
        margin-left: -0.6rem;
    }
    label div input {
        padding: 0.3rem 0.6rem;
        width: 100%;
    }
    label div svg {
        margin-left: 0.5rem;
    }
    button {
        margin: 1rem 2rem;
        padding-left: 0.6rem;
        height: fit-content;
    }
    button:hover {
        cursor: pointer;
    }
    fieldset {
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        border: 0;
        border-left: 0.05rem solid grey;
    }
    fieldset label {
        margin: 0.5rem 0;
    }
    fieldset label div {
        margin-left: 0;
        padding-top: 0.5rem;
    }
    fieldset fieldset {
        display: flex;
        flex-wrap: wrap;
        width:  !important;
        margin: 0.5rem 0 0 0;
        padding: 0.5rem 1rem;
    }
`

export default StUserProfile;