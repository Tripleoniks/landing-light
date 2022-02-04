import './payment.scss';
import PaymentBrief from '../../componet/Payment-Brief/payment-brief';
import PaymentConfirmation from '../../componet/Payment-Confirmation/payment-confirmation';
import PaymentInfo from '../../componet/Payment-Info/payment-info';
import { ReactComponent as VisaLogo} from "../../asset/Images/VisaLogo.svg"
import { ReactComponent as DiscoverLogo} from "../../asset/Images/DiscoverCardLogo.svg"
import { ReactComponent as MastercardLogo} from "../../asset/Images/mastercard.svg"
import { ReactComponent as PaypalLogo} from "../../asset/Images/PayPal.svg"






const PaymentPage = () => {
    return(
       <div className='payment-page'>
        <div className="line"></div>
        <div className="payment-page-row">
            <div className="text">
            <h4>Payment Information</h4>
             <p>Choose your method of payment</p>
            </div>
            <div className="payment-method-icon">
                <VisaLogo/>
                <DiscoverLogo/>
                <MastercardLogo/>
                <PaypalLogo/>
            </div>
        </div>
        <PaymentInfo />
        <div className="line"></div>
        <PaymentBrief/>
        <div className="line"></div>
        <PaymentConfirmation/>
       </div>
    );
}
  

export default PaymentPage;