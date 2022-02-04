import { useState } from 'react';
import './payment-info.scss'
import chip from "../../asset/Images/chip.png"
import CustomButton from '../Custom-Button/custom-button';


const PaymentInfo = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [postaleCode, setPostalCode] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    return ( 
        <div className='contain'>
            <div className="row">
                <div className="left col-md-4 col-12">
                <div className="payment-card">
                <div className="content">
                    <i class="fas fa-wifi"></i>
                    <div className="card-details">
                        <p>CARD NUMBER</p>
                        <p id='card-num'>4324 5433 9382 1030</p>
                        <img src={chip} alt="" srcset="" />
                        <p id='exp-date'>EXPIRATION DATE</p>
                        <p>03 / 24</p>
                        <p>John Doe</p>
                    </div>
                    <div className="card-logo">
                    <h1>
                    <i class="mastercard-icon"></i>
                    </h1>
                    </div>
                </div>
            </div>
                </div>
                <div className="col-md-2">
                    
                </div>
                <div className="right col-md-6 col-12">
                <div className='Form-input'>
                 <form action="#">
                <div className="row">
                    <div className='col-md-6'>
                     <p>Credit card number</p>
                     <input className=' card-deets'type='tel' value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder='4324 5433 9382 1030' />
                    </div>
                    <div className=' col-md-6'>
                    <p>Expiration date</p>
                     <input className='card-deets'type='tel' value={expirationDate} onChange={e => setExpirationDate(e.target.value)} placeholder='03/24' />
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-6'>
                     <p>Security code</p>
                     <input className=' card-deets'type='tel' value={securityCode} onChange={e => setSecurityCode(e.target.value)} placeholder='420' />
                    </div>
                    <div className=' col-md-6'>
                    <p>Postal code</p>
                     <input className='card-deets'type='tel' value={postaleCode} onChange={e => setPostalCode(e.target.value)} placeholder='10119' />
                    </div>
                </div>
                <div className="checkbox">
                <input id="consent-check" className="" type="checkbox" value="check" checked={isChecked} onChange={handleOnChange}></input>
                <label for="consent-check" className="no-select"> Use this card for next time purchase</label>
                </div>
                <CustomButton addCard>Add card</CustomButton>
            </form>

        </div>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentInfo;