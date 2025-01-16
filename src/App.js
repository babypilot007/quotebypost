import './App.css';
import logo from './images/logo.png'
import { supabase } from './supabaseClient'
import { useState,useEffect} from 'react'

function App() {


  const[news, getNews] = useState('')

  const[firstName, getFirstName] = useState('')
  const[Address, getAddress] = useState('')
  const[Email, getEmail] = useState('')

  // const[dets, getDets] = useState('Add me to the Mailing List')
  // const[detsDiv, getDetsDiv] = useState(false)


  const mail = async (event) =>{


    if(!firstName || !Address || !Email){
        // getDetsDiv(true)

        // getDets("Please enter valid Details")
    }

    else {
        // getDets("Welcome to the club")

    try {
      const {data: {u}} = await supabase.from('details').insert([
        {
          name : [firstName],
          email : [Email],
          address : [Address]
        }
      ])
        console.log(u)
    } catch (error) {

    }

}

  }


  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await supabase.from('details').select('*')

            if(response.data !== null){

            getNews(response.data)
        } 
      } catch (error) {
      
    }}
    fetchData()
  }, [])


  
  console.log(news)


  return (
    <div className="App">
      <header className="App-header">

       <div className='logoImg'>
            <img src={logo} alt='Logo'></img>
         </div>

<div>

         <form className='mail_form'>
          
        <input className='formInput' type='text' placeholder='Name'
              value={firstName}
              onChange={(e) => getFirstName(e.target.value)}
                required
        ></input>

        
        
        <input className='formInput' type='text' placeholder='Email'
        value={Email}
         onChange={(e) => getEmail(e.target.value)} required></input>

<input className='formInput' type='text' placeholder='Full Address'
        value={Address}
         onChange={(e) => getAddress(e.target.value)} 
        required></input>


<div className='formSubmit'>
        <input className='submitbtn' type='submit' value={'Add me'} onClick={()=>{mail()}} ></input>
        </div>


         {/* {detsDiv ? <div className='noInfo'>{dets}</div>:<div className='yesInfo'><p>{dets}</p>
</div>} */}
        
        </form >
         </div>
      </header>
    </div>
  );
}

export default App;
