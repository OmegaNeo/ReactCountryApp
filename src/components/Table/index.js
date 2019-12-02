import React, { Component } from 'react';
import './styles.css';

class Table extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = {
          columns: props.data,
       }
     /*  this.state = { //state is by default an object
          columns: [
             { id: props.data[0].callingCode ,country: props.data[0].name, population: props.data[0].area, area: props.data[0].area },
          ]
       }*/
    }
 
      renderTableData() {
        return this.state.columns.map((column, index) => {
           const { id, name, population, area } = column //destructuring
           return (
              <tr>
                 <td>{name}</td>
                 <td>{population}</td> 
                 <td>{area}</td>
              </tr>
           )
        })
     }

     /*renderTableHeader() {
        let header = Object.keys(this.state.columns[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }*/
  /*<tr>{this.renderTableHeader()}</tr>*/ 
     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='columns'>
                 <tbody>
                    
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
 }

 export default Table