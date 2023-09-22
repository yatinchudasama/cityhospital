import React, { useState } from 'react';
import styled from 'styled-components';
import { Basebutton } from '../../component/UI/Button/Button.style';
import Button from '../../component/UI/Button/Button';
import { InputBox } from '../../component/UI/Inpurbox/Inputbox.style';

function Auth(props) {

    const [type, setType] = useState('login')
    // const [forget, setForget] = useState('forget')

    const StyledButton = styled.button`
        display: block;
        padding: 8px 15px;
        background-color: red; 
        color: white;                                                                                 
    `;
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {

                            type === 'login' ? <h2>Login</h2> : type === 'signup' ? <h2>Signup</h2> : <h2>Forget</h2>
                            // forget === 'forget' ? <h2>Login</h2> : <h2>Forget Password</h2> 
                        }



                    </div>
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row  justify-content-center">
                            {
                                type === 'signup' ? <div className="col-md-8 form-group">
                                    <InputBox type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                                </div>
                                    : ''
                            }

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <InputBox type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />

                            </div>

                            {
                                type === 'login' || type === 'signup' ? <div className="col-md-8 form-group mt-3 mt-md-0">

                                    <InputBox type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                                </div>
                                    : null
                            }


                        </div>
                        <div className="text-center">
                            {
                                type === 'login' ? <Button type="submit" disabled={true}>Login</Button> :
                                    type === 'signup' ? <Button btntype='secondry' type="submit" btndisabled={true}>Signup</Button> : <Button btntype='outline' type="submit">Submit</Button>
                                    

                            }

                        </div>
                        {/* <StyledButton>Forget</StyledButton> */}
                    </form>
                    {
                        type === 'login' ?
                            <span>creat an account:<a href='#' onClick={() => setType('signup')}>Signup</a></span> :
                            <span>creat an account:<a href='#' onClick={() => setType('login')}>Login</a></span>
                    }

                    <br></br>
                    {
                        type === 'login' ? <a href='#' onClick={() => setType('forget')}>Forget</a> : null
                    }

                </div>

            </section>
        </main>
    );
}

export default Auth;