import React, { Fragment } from 'react';
import {Label, Help, Button, Input, Control } from 'rbx';
import '../../styles/contact.scss'

function ContactPage() {
    return (
        <div className='Formulario'>
            <Help>Ensira seu email e uma mensagem abaixo</Help>
            <form action="https://formsubmit.co/femacedogomes@gmail.com" method="POST">
                <Label for="email">Email:</Label>
                <Input type='email' name='email' id='email' required/>
                <Label for='message'>Mensagem:</Label>
                <Input required type='text' name='message' id='message'/>
                <Button type='submit'>Send</Button>
                <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
            </form>
            
                
        </div>
        
    )
};

export default ContactPage;

{/* <Field>
  <Control iconLeft iconRight>
    <Input type="email" size="small" placeholder="Email" />
    <Icon align="left" size="small">
      <FontAwesomeIcon icon={faEnvelope} />
    </Icon>
    <Icon align="right" size="small">
      <FontAwesomeIcon icon={faCheck} />
    </Icon>
  </Control>
</Field>
<Field>
  <Control iconLeft iconRight>
    <Input type="email" placeholder="Email" />
    <Icon align="left">
      <FontAwesomeIcon icon={faEnvelope} />
    </Icon>
    <Icon align="right">
      <FontAwesomeIcon icon={faCheck} />
    </Icon>
  </Control>
</Field>
<Field>
  <Control iconLeft iconRight>
    <Input type="email" size="medium" placeholder="Email" />
    <Icon align="left">
      <FontAwesomeIcon icon={faEnvelope} />
    </Icon>
    <Icon align="right">
      <FontAwesomeIcon icon={faCheck} />
    </Icon>
  </Control>
</Field>
<Field>
  <Control iconLeft iconRight>
    <Input type="email" size="large" placeholder="Email" />
    <Icon align="left" size="medium">
      <FontAwesomeIcon icon={faEnvelope} />
    </Icon>
    <Icon align="right" size="medium">
      <FontAwesomeIcon icon={faCheck} />
    </Icon>
  </Control>
</Field> */}