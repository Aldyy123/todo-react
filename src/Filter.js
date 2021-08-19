import React from 'react'

class Filter extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   selectValue: ''
  }
 }

 handleChangeSelection(e) {
  this.setState({ selectValue: e.target.value })
  this.props.sortingTodos(e.target.value)
 }

 render() {
  return (
   <div className='filter'>
    <select
     value={this.state.selectValue}
     onChange={(e) => this.handleChangeSelection(e)}
    >
     <option value=''>Select</option>
     <option value='ASC'>Belum Selesai</option>
     <option value='DESC'>Selesai</option>
    </select>
   </div>
  )
 }
}

export default Filter
