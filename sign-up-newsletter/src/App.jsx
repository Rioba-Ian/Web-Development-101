import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: true
  })

  function handleChange(event) {
    const { name, type, checked, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword){
      console.log("passwords do not match.");
    }else if(formData.password === formData.confirmPassword && formData.okayToEmail){
      console.log("Thanks for signing up for our newsletter!");
    }else{
      console.log("Successfully signed up.")    
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name='password'
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name='confirmPassword'
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name='okayToEmail'
            onChange={handleChange}
            checked={formData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default App

// export default function Form() {
//   const [formData, setFormData] = React.useState({
//       firstName: "",lastName: "", email: "", comments:"", isFriendly:true, employed:"", favColor:""
//   })
//   /**
//    * Challenge: Track the applicant's last name as well
//    */
//   function handleChange(event) {
//       const {name, type, checked, value} = event.target
//       setFormData(prevFormData=>{
//           return {
//               ...prevFormData,
//               [name] : type=="checkbox"? checked: value
//           }
//       })
//   }
  
//   function handleSubmit(event){
//       event.preventDefault()
//       // submitToApi(formData)
//       console.log(formData)
//   }
  
//   // console.log(formData.favColor)
//   return (
//       <form onSubmit={handleSubmit}>
//           <input
//               type="text"
//               placeholder="First Name"
//               onChange={handleChange}
//               name="firstName"
//               value={formData.firstName}
//           />
//           <input
//               type="text"
//               placeholder="Last Name"
//               onChange={handleChange}
//               name="lastName"
//               value={formData.lastName}
//           />
//           <input
//               type="email"
//               placeholder="Email"
//               onChange={handleChange}
//               name="email"
//               value={formData.email}
//           />
//           <textarea 
//           placeholder="Comments"  
//           onChange={handleChange} 
//           name="comments" 
//           value ={formData.comments}
//           />
//           <input
//           type="checkbox"
//           id="isFriendly"
//           checked={formData.isFriendly}
//           onChange={handleChange}
//           name="isFriendly"
//           />
//           <label htmlFor="isFriendly">Are you friendly?</label>
//           <br/>
//           <br/>
          
//           <fieldset>
//           <legend>Current employment status</legend>
          
//           <input
//           type="radio"
//           id="uemployed"
//           checked={formData.employed == "unemployed"}
//           onChange={handleChange}
//           name="employed"
//           value="unemployed"
//           />
//           <label htmlFor="isFriendly">Unemployed</label>
//           <br/>
//           <input
//           type="radio"
//           id="part-time"
//           checked={formData.employed == "part-time"}
//           onChange={handleChange}
//           name="employed"
//           value="part-time"
//           />
//           <label htmlFor="isFriendly">Part-time</label>
//           <br/>
//           <input
//           type="radio"
//           id="full-time"
//           checked={formData.employed == "full-time"}
//           onChange={handleChange}
//           name="employed"
//           value="full-time"
//           />
//           <label htmlFor="isFriendly">Full-time</label>
//           <br/>
//           </fieldset>
          
//           <label htmlFor="favColor">What is your favorite color?</label>
//           <br />
//           <select 
//           id="favColor"
//           value={formData.favColor}
//           onChange={handleChange}
//           name="favColor"
//           >
//           <option value="">-- Choose --</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//           <option value="green">Green</option>
//           <option value="blue">Blue</option>
//           <option value="indigo">Indigo</option>
//           <option value="violet">Violet</option>
//           </select>
//           <br />
//           <br />            
//           <button>
//           Submit
//           </button>
//       </form>
//   )
// }

