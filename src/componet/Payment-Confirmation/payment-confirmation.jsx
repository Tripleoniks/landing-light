import './payment-confirmation.scss'
import CustomButton from '../Custom-Button/custom-button';
import { paymentAmount } from '../Payment-Brief/payment-brief';


const PaymentConfirmation = () => {
   
    return ( 
        <div>
            <div className="content">
                <div className="row">
                    <div className="left col-md-6 col-12">
                    <CustomButton completePayment> Complete payment </CustomButton>
                    </div>
                    <div className="right col-md-6 col-12">
                    {paymentAmount.map(({Subtotal, EstimatedTax, PromotionCode}, index) =>{
                     const totalPayment = Subtotal + EstimatedTax + PromotionCode;
                    return(
                      <div>
                        <p>TOTAL: ₦{totalPayment} </p>
                      </div>  
                    )
                })}

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentConfirmation;