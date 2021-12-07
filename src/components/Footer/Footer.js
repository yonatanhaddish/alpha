import React from 'react'

const FooterContainer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>Join our exclusive membership to recieve the latest news and trends</FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"></FormInput>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default FooterContainer
