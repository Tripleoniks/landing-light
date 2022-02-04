import './custom-button.scss';


const CustomButton = ({children, addCard, completePayment,  ...otherProps}) => {
    return ( 
        <button className={`${ addCard? 'addCard' : ''}  ${completePayment ? "completePayment" : ""} custom-button `} {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButton;