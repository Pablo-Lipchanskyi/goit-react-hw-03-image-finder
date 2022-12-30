import React, { Component } from 'react';
import { createPortal } from 'react-dom';
 const modalRoot = document.querySelector('#modal-root');
 import { BackdropStyled, ModalStyled } from './Modal.styled';

 class Modal extends Component {
   componentDidMount() {
     window.addEventListener('keydown', this.handleKeyDown);
   }

   componentWillUnmount() {
     window.removeEventListener('keydown', this.handleKeyDown);
   }

   handleKeyDown = event => event.code === 'Escape' && this.props.onClose();

   handleBackdropClick = event =>
     event.currentTarget === event.target && this.props.onClose();

   render() {
     return createPortal(

         <BackdropStyled onClick={onClick}>
         <ModalStyled>
           <img src="" alt="" />
         </ModalStyled>
       </BackdropStyled>,
       modalRoot
     );
   }
 }