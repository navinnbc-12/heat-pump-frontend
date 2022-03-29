import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import "./BusinessUser.css"
import { adminFirstPageAction } from '../../../Redux/AdminFirstPage/adminFirstPage.action';

function BusinessUser({adminFirstPageAction}) {
  const [businessUser, setBusinessUser] = useState([{
    business_admin_email:"sandeshadmin1@gmail.com",
    business_admin_mobile:"7123471234",
    business_admin_fullName:"Sandesh",
    business_admin_status:true
  },{
    business_admin_email:"navinadmin2@gmail.com",
    business_admin_mobile:"8123481234",
    business_admin_fullName:"Navin",
    business_admin_status:false
  }]);
  useEffect(()=>{
    adminFirstPageAction(true)
 },[]);
  return (
    <div className='bucontainer' >
      <h1 className='butitle' >Business Users</h1>
        <hr className=' bucontainerhr' />
        <div style={{marginTop:"50px"}} >
        
  
           <table className='butable' >
               <thead className='buhead'>
             
                 <td className='buiemail' >Email</td> <td  className='buname' >Full Name</td> <td  className='bunumber' >Mobile Number</td> <td  className='bustatus' >Status</td>
            
               </thead>
              { <tbody>
               {businessUser&&businessUser.map((item) => {
                 return(
               <tr className='butr' >
                 <td className='buadminemailData' >{item.business_admin_email}</td> <td className='bunameData' >{item.business_admin_fullName}</td><td className='bunumberData' >{item.business_admin_mobile}</td>
                 <td className='bustatusdata' ><select className='buselecttag' >
                   <option className='buoption1' selected={item.business_admin_status==true?true:false}  value="">Active</option>
                   <option className='buoption2' selected={item.business_admin_status==false?true:false}  value="">Inactive</option>
                   </select>  <img className='budropdownimg' src={require("../../../Img/adminDropdown.png")}   />
                 </td>
               </tr>
               )})}
               </tbody>}
           </table>
         
        
        </div>
        <button className='bubtn' >Create Business User</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  adminFirstPageAction:(value) => dispatch(adminFirstPageAction(value))
})

export default connect(null,mapDispatchToProps)(BusinessUser);