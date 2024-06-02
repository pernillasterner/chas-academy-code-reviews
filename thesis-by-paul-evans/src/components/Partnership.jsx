import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from "styled-components";
import partnershipImg from '../assets/physioImg.png';

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledPartnershipMain = styled.section`
    max-width: 100%;
    min-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    display: Grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
    "Context Image";

    @media screen and (max-width: 960px) {
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
        grid-template-areas:
        "Context"
        "Image";
    }
    `;

const StyledPartnershipContents = styled.div`
    grid-area: Context;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 80px; 
    color: #2c2c2c;

    @media screen and (max-width: 478px) {
        padding-top: 30px;
        padding-left: 40px;
    } 

    @media screen and (max-width: 360px) {
        width: 90%;
        padding-top: 15px;
        padding-left: 20px;
    } 
    `;

const StyledImageContainer = styled.div`
    grid-area: Image;
    display: flex;
    flex-direction: column;
    height: 100%;
    `;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${({ isInView }) =>
    isInView &&
    css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
    `; 


const Partnership = () => {

    const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);

    return (
        
        <StyledPartnershipMain > 
    
                <StyledPartnershipContents>

                    <h5>
                        BATTLING EVERYDAY PAIN IN SPORTS
                    </h5>

                    <h2>
                        Hammarby Handball and LipusPlus® Forge Alliance for Expedited Recovery 
                    </h2>

                    <p>
                        In a sport marked by frequent injuries due to high-impact movements, 
                        such as ligament tears and patellar dislocations, effective diagnosis and treatment are crucial.
                    </p>

                    <p>
                       In 2023-2024, Hammarby Handball and LipusPlus® joined forces during a season-long partnership to follow 
                    specific players to discover optimal injury treatments, closely monitoring progress and outcomes over time.
                    </p>

                </StyledPartnershipContents>

                <StyledImageContainer>
                     <StyledImg ref={imgRef} src={partnershipImg} alt="Anne Hopfgarten, Hammarby handball physiotherapist leads a player off the court."
                     isInView={isInView} />
                </StyledImageContainer>
                 
        </StyledPartnershipMain>
        

    );

}
export default Partnership;