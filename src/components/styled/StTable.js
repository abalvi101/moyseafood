import styled from 'styled-components';
import Table from '../Table';
import StLink from './StLink'

const StTable = styled(Table)`
    border-collapse: separate;
    border: 0.05rem solid #d1d1d1;
    border-radius: 0.5rem;
    th, td {
        border-bottom: 0.05rem solid #d1d1d1;
        padding: 0.4rem 1rem;
    }
    tr:last-child td {
        border: 0;
    }
    th {
        text-align: left;
    }
    thead td button {
        border: 0;
        background-color: white;
    }
    input {
        width: 100%;
        border: 0;
        border-bottom: 0.08rem solid #d1d1d1;
    }
    input:focus {
        outline: none;
        border-bottom: 0.08rem solid blue;
    }
    ${StLink} {
    }
`

export default StTable;
