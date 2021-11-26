import React from 'react';
import { InfoSec } from './InfoSection.elements';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';

const InfoSection = () => {
    return (
        <>
            <InfoSec lightBg= {lightBg}>
                <Container>
                    <InfoRow imgStart= {imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine= {lightTopLine}>{topLine}</TopLine>
                                <Heading lightText= {lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc= {lightTextDesc}>{description}</Subtitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary= {primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start= {start}>
                                <Img src= {img} alt= {alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection

