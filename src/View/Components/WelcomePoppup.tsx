import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
// @ts-ignore
import welcomeImg from '../Media/Images/welcomeImg.svg';
import Button from './Button';

const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(29, 41, 57, 0.76);
  }
  &-content {
    border-radius: 14px;
    border: 1px solid rgba(170, 170, 170, 0.20);
    background: #FFF;
    box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.07), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02);
  }
`;

const WelcomePopup = (props: any) => (
  <StyledPopup
    open={props?.isOpen}
    modal
    closeOnDocumentClick
    onClose={props?.onRequestClose}
  >
    <Container>
      <CloseButton>
        <span></span>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" onClick={props?.onRequestClose}>
        <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#A9ACB0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </CloseButton>
      <img src={welcomeImg} loading='lazy' style={{pointerEvents:'none'}}/>
      <div id='content'>
        <p id='title'>
        Try Digital Morocco for free!
        </p>
        <p id='text'>
        Join the top <span id='leader'>200 project leaders</span> and enjoy <span id='link'>12 months of free access</span> to our top-tier networking platform. 
        <br/>
        Sign up now and connect with the best!
        </p>
      </div>
      <Button className='animation' $background='#2575F0' $isFill>Get Started Now</Button>
    </Container>
  </StyledPopup>
);

export default WelcomePopup;

const Container = styled.div`
  display: flex;
  max-width: 640px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  
  > button {
    transition: 300ms;
    font-size: 20px;
    height: 60px;
    border-color: #2575F0;
    padding: 9px 18px;
    width: 277px;
    color: #FFF;
    text-align: center;
    font-family: DMSans-Regular;
    line-height: 26px;
    outline: none;

    &:hover {
        background-color: #235DBD;
        border-color: #235DBD;
        filter: none;
    }
}

  > #content {
    display: flex;
    max-width: 538px;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    > #title {
      margin: 0;
      color: #1E0E62;
      text-align: center;
      max-width: 460px;
      padding-inline: 50px;
      font-family: DMSans-Bold;
      font-size: 30px;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    > #text {
      margin: 0;
      color: #1D2939;
      text-align: center;
      font-family: DMSans-Regular;
      font-size: 14px;
      line-height: 26px; 

      > #leader{
        color: #1D2939;
        font-family: DMSans-Medium;
      }

      > #link{
        color: #2575F0;
        font-family: DMSans-Medium;
      }

    }
  }
`;

const CloseButton = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 20px;
  font-size: 16px;

`;