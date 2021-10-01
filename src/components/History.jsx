import React,{ useState, useEffect }  from 'react'
import '../views/complaint.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ApiService from '../ApiService';
import { useHistory } from "react-router";
import createHistory from 'history/createBrowserHistory'
import '../views/MetroImage.css'

// import bookForm from './bookForm'

export default function Histroy() {
  const [Table, setTable] = useState(true);
    const [Data, setHistory] = useState([]);
   
   
    let history = useHistory();
    const history1 = createHistory();
    useEffect(() => {
      

        if(!(localStorage.getItem("user")))
                history.push("/login");

      
      let loggedInUser = {email:localStorage.getItem("user")}
        ApiService.fetchAllHistory(loggedInUser).
        then( (response) => {
          setHistory(response.data)
           console.log(response.data);
                 } )
      }, []);

    
    
    return (
        <div className='empty bg-img'>
            {Data.length === 0 ? <p>no complaints here</p> : null}
            {Table ? <div>
              <div className="d-grid gap-2 col-6 mx-auto">
            <table id="customers" className="css-serial text-center">
                    <tr >
                        <th>Sr No</th>
                        <th>Payment ID</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Amount</th>
                        <th>Time Stamp</th>
                        <th>Transaction Type</th>
                        <th>Status</th>
                    </tr> 
                    {Data.map((item) => {
                            return(
                                <tr key= {item.payment_id}>
                                    <td>&nbsp;</td>
                                    <td>{item.payment_id}</td>
                                    <td>{item.source}</td>
                                    <td>{item.destination}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.timeStamp}</td>
                                    <td>{item.transactionType}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )
                        })}
                </table>
                </div>
            </div> : null}
           

    </div>
    );
    
  }

 
//   function ComplaintTable (props){
//       var complaints = props.complaints
//     return(
//         <div>
//             <table id="customers">
//                     <tr>
//                         <th>id</th>
//                         <th>Discription</th>
//                         <th>Status</th>
//                         <th>Response</th>
//                     </tr>
//                     {ComplaintData.map((item:any) => {
//                             return(
//                                 <tr>
//                                     <td>{item.id}</td>
//                                     <td>{item.msg}</td>
//                                     <td>{item.status}</td>
//                                     <td>{item.response}</td>
//                                 </tr>
//                             )
//                         })}
//                 </table>
//         </div>
//     );
//   }