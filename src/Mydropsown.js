import react, {useState} from 'react'
import { Data } from './Data'
const Mydropdown = () =>{

const[state, setState] =useState("");
const[district, setDistrict] =useState("")
const[myfinal, setFinal] =useState([])



const[showdata, setShowData] =useState(false)

const[showerror, setShowerror] =useState(false)


const changeState = (e) =>{
   setState(e.target.value)
   setFinal(Data.find(ctr=>ctr.state===e.target.value).districts)
}

console.log(state)
console.log(district)

const OnClick = () =>{
    if(state!=="" && district!==""){
    setShowData(true)
    }
    else{
        setShowData(false)
    }



    if (state=="" && district==""){
        setShowerror(true);
    }
        else{
            setShowerror(false)
        }
    

}
    return(
<div>
    
<select className='form-control' value={state} onChange={changeState}>
    <option>select State</option>

    {
        Data.map(X=>(
            <option key={X.state}>{X.state}</option>
        ))
    }
</select>



<br/>
<select className='form-control' value={district} onChange={e=>setDistrict(e.target.value)}>
    <option>Select District</option>
    {
        myfinal.map(Y=>(
                <option key={Y.city}>{Y.city}</option>
        
        ))
    }
</select>
<br/>
{ showerror &&
<p className='text-danger' style={{marginLeft:"40%"}}>Please select state and distrcit</p>

}



<div style={{marginLeft:"40%"}}>
    { showdata &&
    <>
<p>You have selected {state} state. </p>
<p>You have selected {district} district. </p>
</>
}

</div>




<div>
    <button className='btn btn-success' style={{width:"100%"}} onClick={OnClick}>Submit</button>
</div>


</div>
    )

    
}

export default Mydropdown
