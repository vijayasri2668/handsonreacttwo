import React, { Component } from 'react'
import './style.css'

class App extends Component {
        state={
        name:"",
        department:"",
        rating:"",
        user:[],
    }
    ButtonChange=(element)=>{
        this.setState({
        [element.target.name]:element.target.value
    })
    }

    ButtonSubmit=(element)=>{
        element.preventDefault()
        console.log(this.state);

        var temporaryArr=[]
        console.log(temporaryArr);

        var tempObj={
        name: this.state.name,
        deptt: this.state.department,
        rating: this.state.rating
        }
        temporaryArr=this.state.user
        temporaryArr.push(tempObj)
        this.setState({user:temporaryArr})
        this.setState({name:'',dept:'',rating:''})

        console.log(this.state.user);
    }

  render() {
    return (
      <>    
        <div className="Containerbody">
            <div className="Header">Employe Feedback Form</div>
            <form  onSubmit={this.ButtonSubmit} className='form_part'>
                <label>Name:</label>
                <input type="text" name="name" autoComplete='off'   className='inpt_forms' value={this.state.name} onChange={this.ButtonChange} /><br />
                <label>Department:</label>
                <input type="text" name="dept" autoComplete='off' className='inpt_forms'  value={this.state.department} onChange={this.ButtonChange} /><br />
                <label>Rating:</label>
                <input type="text" name="rating" autoComplete='off' className='inpt_forms'  value={this.state.rating} onChange={this.ButtonChange} /><br />
                <button className='button' onClick={this.ButtonSubmit}>submit</button>
            </form>
            <div className="box">
            {this.state.user.map((item,index)=>{
                return(
                    <div key={index} className='item' >
                    Name :    {item.name} | Department :  {item.dept} | Rating:    {item.rating}
                    </div>
                    )
               
            })}
            </div>
          </div>

      </>
    )
  }
}

export default App