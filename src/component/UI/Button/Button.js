import React from 'react';
import { Basebutton } from './Button.style';

function Button({children, btntype= 'primary', ...rest}) {

    const CheckButton = () => {
        switch (btntype) {
            case 'primary':
                return primary
            case 'secondry':
            return secondry

            case 'outline':
           return outline
        }
    }

    const CustomButtom = CheckButton();
    return (
       
            <>
                <CustomButtom {...rest}>
                <children/>
                </CustomButtom>
            </>
        
    );
}

export default Button;