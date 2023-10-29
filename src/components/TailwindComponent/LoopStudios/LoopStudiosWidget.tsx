import React from 'react';
import { HeroSection } from './SectionComponents';
import { FeatureSection } from './SectionComponents';
import { CreationSection } from './SectionComponents';
import { FooterSection } from './SectionComponents';

export const LoopStudioWidget:React.FC = () => {
    return <>
        <HeroSection/>
        <FeatureSection/>
        <CreationSection/>
        <FooterSection/>
    </>
}