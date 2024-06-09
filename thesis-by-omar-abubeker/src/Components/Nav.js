import styled from "styled-components";
import Plick from "../Assets/plick_rf_black.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import Modal from "./Modal";
import "./../Fonts.css";

const Navwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #ebebeb;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 50px 0px 50px;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const InnerBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledLogo = styled.img`
  height: 4em;
  cursor: pointer;

  @media (max-width: 800px) {
    height: 3em;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 30px;
  border: 2px solid #0d0d0d;
  background: #fff;
  width: 35%;
  max-width: 600px;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const SecSearchBox = styled(SearchBox)`
  width: 100%;
  @media (min-width: 800px) {
    display: none;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

const SearchBar = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  margin-left: 10px;
`;

const SecSearchBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  border-radius: 6px;
  background: #0d0d0d;
  padding: 8px 18px;
  width: 8rem;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;
  border: 2px solid #010101;
  font-family: inter;

  &:hover {
    background-color: #2b2b2b;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Secondbutton = styled(StyledButton)`
  color: #0d0d0d;
  background-color: #fff;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const HamBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
`;

const HamLogButton = styled(Secondbutton)`
  @media (max-width: 800px) {
    display: block;
  }
`;

const HamButton = styled(StyledButton)`
  @media (max-width: 800px) {
    display: block;
  }
`;

const LowerBox = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropdownIcon = styled(IoIosArrowDown)`
  margin-left: 5px;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  text-align: left;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 20vw;

  a {
    padding: 10px 20px;
    display: block;
    text-decoration: none;
    color: #000;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const HamburgerMenu = styled(FaBars)`
  display: none;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
    font-size: 2rem;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: fit-content;
  position: fixed;
  z-index: 999;
  background-color: #fff;
  top: 20%;
  left: 0;
  height: 100%;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform .5s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuItems = [
    { text: "Herr", hasDropdown: true, links: ["T-shirts", "Byxor", "Skor"] },
    { text: "Dam", hasDropdown: true, links: ["Kjolar", "Blusar", "Skor"] },
    { text: "Unisex", hasDropdown: true, links: ["Jackor", "T-shirts", "Skor"] },
    { text: "Kategorier", hasDropdown: true, links: ["Nyheter", "Bästsäljare", "Rea"] },
    { text: "Varumärken", hasDropdown: true, links: ["Nike", "Adidas", "Puma"] },
    { text: "Skapa annons", hasDropdown: false },
    { text: "Karriär", hasDropdown: false },
    { text: "Om oss", hasDropdown: false },
  ];

  return (
    <Navwrap>
      <InnerBox>
        <StyledLogo src={Plick} alt="Plick logo" />
        <SearchBox>
          <FaSearch />
          <SearchBar placeholder="Sök vara eller användare" />
        </SearchBox>
        <div>
          <HamburgerMenu onClick={toggleMobileMenu} />
          <Secondbutton onClick={handleOpenModal}>Logga in</Secondbutton>
          <StyledButton>Registrera</StyledButton>
        </div>
      </InnerBox>
      <SecSearchBlock>
        <SecSearchBox>
          <FaSearch />
          <SearchBar placeholder="Sök vara eller användare" />
        </SecSearchBox>
      </SecSearchBlock>
      <LowerBox>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => toggleDropdown(index)}>
            {item.text}
            {item.hasDropdown && <DropdownIcon />}
            {item.hasDropdown && (
              <DropdownMenu show={openDropdowns[index]}>
                {item.links.map((link, idx) => (
                  <a key={idx} href="#">
                    {link}
                  </a>
                ))}
              </DropdownMenu>
            )}
          </MenuItem>
        ))}
      </LowerBox>
      <MobileMenu className={mobileMenuOpen ? "open" : ""}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => toggleDropdown(index)}>
            {item.text}
            {item.hasDropdown && <IoIosArrowForward />}
            {item.hasDropdown && (
              <DropdownMenu show={openDropdowns[index]}>
                {item.links.map((link, idx) => (
                  <a key={idx} href="#">
                    {link}
                  </a>
                ))}
              </DropdownMenu>
            )}
          </MenuItem>
        ))}
        <HamBtnBox>
          <HamLogButton onClick={handleOpenModal}>Logga in</HamLogButton>
          <HamButton>Registrera</HamButton>
        </HamBtnBox>
      </MobileMenu>
      <Modal show={showModal} handleClose={handleCloseModal} />
    </Navwrap>
  );
};

export default Nav;
