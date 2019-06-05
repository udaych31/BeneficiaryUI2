import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import edit from './assets/edit.png';
import del from './assets/delete.png';

class ListPayee extends Component{
    constructor(props){
        super(props);
        this.state={
            list: []
        }
    }

    componentDidMount(){
        const{payeeList}=this.state;
        var global = this;
        axios.get('http://10.117.189.89:9090/beneficiaryapp/beneficiary/getPayeeList').then(function(response){
             console.log(response.data);
             global.setState({list: response.data.payeeList})
         }).catch(function(err){
             console.log(err.response)
         })
    }

    deletePayee=(itm)=>{
        let payeeId=itm.payeeId;
        console.log(payeeId);
        var global=this;
        axios.delete('http://10.117.189.89:9090/beneficiaryapp/beneficiary/deletePayee/?payeeeId='+payeeId).then(function(response){
             global.props.history.push('./deleteOtp/'+payeeId)
             console.log(response);
        }).catch(function(err){
            console.log(err.response);
        })
    }

    editPayee=(info)=>{
        this.props.history.push('/updatePayee/'+info.payeeId)
    }

    render(){
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr><th><b>Nick name</b></th>
                    <th><b>Payee Account No</b></th>
                    <th><b>IFSC Code</b></th>
                    <th><b>Email Id</b></th></tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map((item, i)=> {
                            return ( 
                                <tr  key={i}>
                                    <td>{item.nickName}</td>
                                    <td>{item.payeeAccountNo}</td>
                                    <td>{item.ifscCode}</td>
                                    <td>{item.emailId}</td>
                                    <td><Button onClick={()=>{this.editPayee(item)}}><img src={edit} width="20px" height="20px"/></Button><span/>
                                        <Button onClick={()=>{this.deletePayee(item)}}><img src={del} width="20px" height="20px"/></Button></td>
                                </tr>
                                )
                        })
                    }
                       
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListPayee;