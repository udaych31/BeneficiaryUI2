import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className='headsec'>   
                <ul className='containerfluid'>
                    <Button><li className="linkcolor"><Link to='/addPayee'>Add Payee</Link></li></Button>
                    <Button><li className="linkcolor"><Link to='/listPayee'>List Payee</Link></li></Button>
                </ul>
            </div>
        )
    }
}
export default Header;