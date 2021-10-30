import React from 'react';
import { ServicesContainer, ServicesCard, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/car.svg';

export const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>Card 1 kkkkk sseewewe olafhnwoifahw ajobnfwoawinfa</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>Card 2 kkkkk sseewewe olafhnwoifahw ajobnfwoawinfa</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>Card 3 kkkkk sseewewe olafhnwoifahw ajobnfwoawinfa</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};


