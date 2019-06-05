import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './App.css';

class AddPayee extends Component{
    constructor(props){
        super(props);
        this.state={
            payeeData:{
                accountNo:'',
                ifscCode:'',
                nickName:'',
                emailId:''
            },
            notification:''
        }
    }

    handleChange=(event)=>{
        console.log(event.target.name);
        const{payeeData}=this.state;
        payeeData[event.target.name]=event.target.value;
        this.setState({payeeData});
        console.log(this.state.payeeData);
    }

    addPayee=()=>{
        const{payeeData}=this.state;
        const{notification}=this.state;
        console.log(payeeData);
        var global = this;
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/addPayee',payeeData).then(function(response){
            console.log(response,'///////////////');
            global.props.history.push('./otpForm')
        }).catch(function(err){
            //this.setState({notification:err.data.message});
            alert(err);
        })
    }

    render(){
        return(
            <div className="tablesize">
                <table className="table table-striped">
                <tbody>
                    <tr>
                        <td><label>Account No:</label></td>
                        <td><input type="number" name="accountNo" onChange={this.handleChange} required/></td>
                    </tr>
                    <tr>
                        <td><label>IFSC code:</label></td>
                        <td><input type="text" name="ifscCode" required="yes" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>Nick Name:</label></td>
                        <td><input type="text" name="nickName" required="yes" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>EmailId:</label></td>
                        <td><input type="email" name="emailId" required="yes" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><Button onClick={this.addPayee}>Add Payee</Button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default AddPayee;