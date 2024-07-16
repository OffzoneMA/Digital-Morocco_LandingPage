import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Hero_section from '../../../Media/Images/Hero_Section.png';
// @ts-ignore
import text_not_found from '../../../Media/Images/text_PAGE_NOT_FOUND.png';
// @ts-ignore
import notfout404 from '../../../Media/Images/not_found_page.png';

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer back={Hero_section}>
      <ContentWrapper>
        <img className='text_img' src={text_not_found} alt="Page not found text" />
        <img className='image_img' src={notfout404} alt="Not found" />
      </ContentWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div<{ back: string }>`
  background: url(${props => props.back}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column; /* Ajusté à column pour aligner correctement */
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 80px 15px;
  min-height: 100vh;

  @media (min-width: 640px) {
    padding: 100px 30px;
  }

  @media (min-width: 768px) {
    background-position: right top;
  }

  @media (min-width: 1024px) {
    padding: 100px 108px;
  }

  @media (min-width: 1280px) {
    background-size: cover, auto;
  }

  @media (min-width: 1536px) {
    background-size: cover, contain;
    background-position: right top;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px; 
  align-items: center;
  justify-content: center;
  // max-width: 100%; 

  .text_img,
  .image_img {
    max-width: 50%; 
    height: auto; 
  }


  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;

  .text_img,
  .image_img {
    max-width: 90%; 
    height: auto; 
  }
  }
`;
