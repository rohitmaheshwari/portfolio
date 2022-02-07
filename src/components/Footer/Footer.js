import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+923342948635'>+923342948635</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:rohitkumar.balwani@gmail.com'>rohitkumar.balwani@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Innovation you need</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/rohitmaheshwari'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://github.com/rohitmaheshwari'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://github.com/rohitmaheshwari'>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
