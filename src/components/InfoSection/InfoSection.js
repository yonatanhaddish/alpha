import React from 'react'
import { Button, Container } from '../../globalStyles'

const InfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine></TopLine>
                                <Heading></Heading>
                                <Subtitle></Subtitle>
                                <Link to="/sign-up">
                                    <Button></Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection

