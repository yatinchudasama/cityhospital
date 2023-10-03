import React from 'react';
import { InputBox, InputError } from './Inputbox.style';

function Inputbox(errorText,...rest) {
    return (
        <>
        <InputBox {...rest}>
        </InputBox>

        <InputError>
            {errorText}
        </InputError>
        </>
    );
}

export default Inputbox;