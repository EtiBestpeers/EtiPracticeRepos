import React, { Component } from 'react'

import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const App = () => {
   const rowData = [
       {make: "test1", model: "test@gmail.com", price: 35000},
       {make: "test2", model: "test@gmail.com", price: 32000},
       {make: test@gmail.com", model: "test@gmail.com", price: 72000}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="id"></AgGridColumn>
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

render(<App />, document.getElementById('root'));