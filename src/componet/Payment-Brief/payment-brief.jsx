import './payment-brief.scss';

export const paymentAmount =[
    {
        Subtotal: 2497.01,
        EstimatedTax: 119.64,
        PromotionCode: -60.01
    },

];


const PaymentBrief = () => {
    return ( 
       <div className="container">
           <div className="row">
               <div className="left col-md-6 col-8">
                   <p>Subtotal</p>
                   <p>Estimated TAX</p>
                   <p>Promotion code: <span>Z4KXLM9A</span></p>
               </div>
               <div className="right col-md-6 col-4">
                {paymentAmount.map(({Subtotal, EstimatedTax, PromotionCode}, index) =>{
                    return(
                      <div>
                        <p> ₦{Subtotal.toLocaleString()} </p>
                        <p> ₦{EstimatedTax.toLocaleString()} </p>
                        <p> ₦{PromotionCode.toLocaleString()} </p>
                      </div>  
                    )
                })}
               </div>
           </div>
       </div>
     );
}
 
export default PaymentBrief;
