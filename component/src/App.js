import React, { Component } from "react";
import './App.css';
import Customer from './components/Customer';

const customer = [{
  'id' : 1,
  'image' : "https://th.bing.com/th/id/OIP.H4KGxRvrzW8hlXtW0ZrOpgHaMn?w=115&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  'name' : '아무개',
  'birthday' : '180305',
  'gender' : '여',
  'job' : 'shiran'

},
{
  'id' : 2,
  'image' : 'https://th.bing.com/th/id/OIP.o5svIJjW8dURpJcR7XnDQQHaE6?w=284&h=188&c=7&r=0&o=5&dpr=1.4&pid=1.7',
   'name' : '面倒',
  'birthday' : '010605',
  'gender' : '남',
  'job' : 'shiran'

},
{
  'id' : 3,
  'image' : 'https://th.bing.com/th/id/OIP.o5svIJjW8dURpJcR7XnDQQHaE6?w=284&h=188&c=7&r=0&o=5&dpr=1.4&pid=1.7',
   'name' : '面倒くせえ',
  'birthday' : '110605',
  'gender' : '남',
  'job' : 'shiran'

}
]

class App extends Component{
  render(){
    return (
       /* <div>
        <Customer
            id = {customer[0].id}
            image = {customer[0].image}
            name = {customer[0].name}
            birthday = {customer[0].birthday}
            gender = {customer[0].gender}
            job = {customer[0].job}
          />
          <Customer
          id = {customer[1].id}
          image = {customer[1].image}
          name = {customer[1].name}
          birthday = {customer[1].birthday}
          gender = {customer[1].gender}
          job = {customer[1].job}
        />
        <Customer
        id = {customer[2].id}
        image = {customer[2].image}
        name = {customer[2].name}
        birthday = {customer[2].birthday}
        gender = {customer[2].gender}
        job = {customer[2].job}
      />
    </div>
      */
       <div>{
        customer.map (c => {
          return (
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          )
        })}
       </div>
    );
  }
}

export default App;
