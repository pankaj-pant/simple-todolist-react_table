import React from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const ToDoTable = (props) => {
    const columns = [
        {
            Header: 'Date',
            accessor: 'dates'
        },
        {
            Header: 'Description',
            accessor: 'description'
        },
        {
            Header: '',
            Cell : ({index}) => (
                <button onClick={props.deleteButton} id={index}>Delete</button>
            ),
            filterable: false,
            sortable: false
        }
    ]

    return (
        <div>
              <ReactTable data={props.todos}
                columns={columns}
                filterable={true}
                defaultPageSize='10'
            />
        </div>
    );
}

export default ToDoTable;