import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { Button } from "../ButtonElement";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHoverToggle = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>This is an example words in H1</HeroH1>
                    <HeroP>
                        Sign up to check out more!
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={onHoverToggle} onMouseLeave={onHoverToggle} primary="true" dark="true">
                            Get Started! {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>


        </>
    )
}

export default HeroSection;
