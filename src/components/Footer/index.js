import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLink,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLinksWrapper,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>

            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>

                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Test</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>

                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Test</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>

                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>

                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Test</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>

                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>

                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Test</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>

                            </FooterLinkItems>

                        </FooterLinksWrapper>

                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                Dylus
                            </SocialLogo>
                            <WebsiteRights>Dylus Dawid ╬ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/www.youtube.com" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>

        </>
    );
};
