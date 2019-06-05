import React,{Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Header from './Header';

class UpdateOtp extends Component{
    constructor(props){
        super(props);
        this.state={
            otpData:{
                referenceNo:'',
                otp:''
            }
        }
    }

    handleOtp=(event)=>{
        const{otpData}=this.state;
        otpData[event.target.name]=event.target.value;
        this.setState({otpData});
        console.log(otpData);
    }

    validateOtp=()=>{
        const{otpData}=this.state;
        console.log(otpData);
        var global=this;
        //this.props.history.push('./addPayee');
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/confirmUpdatePayee',otpData).then(function(response){
            alert('updated successfully');
            global.props.history.push('/listPayee');
        }).catch(function(err){
            console.log(err.response);
        })
    }

    render(){
        return(
            <div className="otptablesize">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td><label>Account/Reference.No:</label></td>
                            <td><input type="number" name="referenceNo" onChange={this.handleOtp}/></td>
                        </tr>
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number" name="otp" onChange={this.handleOtp}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button onClick={this.validateOtp}>OK</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UpdateOtp;