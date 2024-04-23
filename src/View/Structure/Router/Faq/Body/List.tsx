import React from 'react';
import styled from 'styled-components';
import Topic from './Topic';
import { useLang } from '../../../../../Controller/Tools/Interface/Lang';
import faqsData from '../list.json';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';

/**
 * List
 * 
 * @returns 
 */
const List = () => {
    /**
     * Lang
     */
    const lang = useLang();

    return (
        <Container>
            <div id="topics">
                <Topic
                    topicId={1}
                    id={1}
                    question={lang("What is Digital Morocco?")}
                    answer={
                    <>
                        <p><Lang>Digital Morocco is a dynamic professional networking platform that connects startups, businesses, project holders, and investors from around the world. Our platform provides a collaborative space to foster mutual growth and innovation. We also organize virtual and physical events, such as conferences, workshops, and networking meetings, enabling our members to expand their networks and exchange ideas with key players in the global entrepreneurial ecosystem. By bringing together individuals and organizations from across the globe, Digital Morocco helps create an environment conducive to business development and the emergence of new opportunities.</Lang></p>
                    </>
                    }
                />
                <Topic
                    topicId={2}
                    id={2}
                    question={lang("How to create an account?")}
                    answer={
                    <>
                        <p><Lang>To create an account on Digital Morocco, follow these simple steps:</Lang></p>
                        <ul style={{listStyleType: 'decimal' }}>
                            <li><Lang>Go to the Digital Morocco website.</Lang></li>
                            <li><Lang>Click on the "Get Started" button at the top right of your screen.</Lang></li>
                            <li><Lang>Fill out the registration form with the required information such as your name, surname, email address, password, and follow the instructions.</Lang></li>
                            <li><Lang>Submit the form by clicking on the registration or account creation button.</Lang></li>
                        </ul>
                        <p><Lang>Once these steps are completed, you should receive a confirmation email or be redirected to a confirmation page, indicating that your account has been successfully created. You can then log in to your new account using your email address and password.</Lang></p>
                    </>
                    }
                />
                <Topic
                    topicId={3}
                    id={3}
                    question={lang("What profiles are available?")}
                    answer={
                    <>
                        <p><Lang>On Digital Morocco, we offer three types of profiles from which you can choose the one that best suits your needs:</Lang></p>
                            <p><span><Lang>Startup Profile : </Lang></span><Lang>If you're an entrepreneur or startup founder, this profile is tailored for you. It offers features suited to the specific needs of startups, allowing you to connect with other entrepreneurs, access resources for developing your startup, and present your projects to potential investors.</Lang></p>
                            <p><span><Lang>Investor Profile: </Lang></span><Lang>If you're interested in investing in startups and innovative projects, this profile is for you. It enables you to discover and follow promising startups, participate in pitch events and networking, and find investment opportunities.</Lang></p>
                            <p><span><Lang>Enterprise/Partner Profile : </Lang></span><Lang>If you represent an established company, organization, incubator, or accelerator, this profile is designed for you. As a partner of Digital Morocco, you benefit from various advantages, including : </Lang>
                                <ul>
                                    <li><Lang>Opportunity to establish partnerships with startups and other players in the entrepreneurial ecosystem.</Lang></li>
                                    <li><Lang>Support innovation by collaborating with startups and participating in entrepreneurial development initiatives.</Lang></li>
                                    <li><Lang>Access exclusive events organized by Digital Morocco such as conferences, workshops, and networking meetings.</Lang></li>
                                    <li><Lang>Increased visibility for your company through our platform and events, providing an opportunity to enhance your brand and reach a qualified audience.</Lang></li>
                                    <li><Lang>Ppossibility of becoming a sponsor of our events, allowing you to promote your company and strengthen your presence in the entrepreneurial ecosystem.</Lang></li>
                                </ul>
                            </p>
                        <p><Lang>Join us as a partner of Digital Morocco to play an active role in supporting and developing innovation in Morocco, while benefiting from unique visibility and collaboration opportunities.</Lang></p>
                    </>
                    }
                />
                <Topic
                    topicId={4}
                    id={4}
                    question={lang("How can I connect with other members?")}
                    answer={
                    <>
                        <p><Lang>To connect with other members on Digital Morocco, follow these simple steps:</Lang></p>
                        <ul style={{listStyleType: 'decimal' }}>
                            <li><Lang>Log in to your account on Digital Morocco using your email address and password.</Lang></li>
                            <li><Lang>Once logged in, explore the platform's features to find members you'd like to connect with. You can use the search function to find specific profiles or browse through recommended profiles.</Lang></li>
                            <li><Lang>Check out the profiles of members to learn more about their activities, interests, and projects. You can also check the events they've attended or the groups they belong to for a better understanding of their expertise areas and interests.</Lang></li>
                            <li><Lang>Join our community on Slack and choose the group that best suits you to engage in discussions on the topics you're interested in.</Lang></li>
                            <li><Lang>You can also participate in networking events organized by Digital Morocco to meet other members in person and establish more meaningful connections.</Lang></li>
                        </ul>
                        <p><Lang>By following these steps, you'll be able to connect with other members on Digital Morocco and start building your professional network in the entrepreneurial ecosystem.</Lang></p>
                    </>
                    
                    }
                />
                <Topic
                    topicId={5}
                    id={5}
                    question={lang("Can I attend events without creating an account?")}
                    answer={
                    <>
                        <p><Lang>Yes, you can generally attend events on Digital Morocco without creating an account. However, some features may be limited for users without an account, such as pre-event registration or access to certain additional resources. It's recommended to create an account to fully enjoy all the features and benefits offered by the platform</Lang></p>
                    </>
                    }
                />
                <Topic
                    topicId={6}
                    id={6}
                    question={lang("Are there fees for using Digital Morocco?")}
                    answer={
                    <>
                        <p><Lang>Yes, using Digital Morocco may involve fees depending on the subscription plan you choose. We offer different subscription levels with varied features and benefits. Some plans may be free, while others may require payment to access premium features. We encourage you to explore our different subscription plans to find the one that best suits your needs and budget.</Lang></p>
                    </>
                    }
                />
                <Topic
                    topicId={7}
                    id={7}
                    question={lang("How do I upgrade my profile or subscription?")}
                    answer={
                    <>
                        <p><Lang>To upgrade your profile or subscription on Digital Morocco, follow these simple steps:</Lang></p>
                        <ul style={{listStyleType: 'decimal' }}>
                            <li><Lang>Log in to your account on Digital Morocco using your login credentials.</Lang></li>
                            <li><Lang>Go to the "Settings" or "Account" section of your profile. You should find this option in the navigation menu or in the top right corner of the page.</Lang></li>
                            <li><Lang>Look for the option or link to upgrade your profile or subscription. It might be labeled as "Upgrade," "Change plan," or something similar.</Lang></li>
                            <li><Lang>Select the subscription plan you want to upgrade to. Make sure to carefully review the features and pricing of each plan to choose the one that best suits your needs.</Lang></li>
                            <li><Lang>Follow the instructions to complete the upgrade process. This may involve providing payment information or confirming the changes to your account.</Lang></li>
                            <li><Lang>Once your profile or subscription is upgraded, you should have access to additional features or benefits included in the new plan.</Lang></li>
                        </ul>
                        <p><Lang>If you encounter any issues or have any questions during the upgrade process, feel free to contact Digital Morocco's customer support for assistance.</Lang></p>
                    </>
                    
                    }
                />
                <Topic
                    topicId={8}
                    id={8}
                    question={lang("How can I become an investing partner?")}
                    answer={
                    <>
                        <p><Lang>To become a partner investor, please follow these steps:</Lang></p>
                        <ul style={{listStyleType: 'decimal' }}>
                            <li><Lang>Log in to your account: If you don't have an account on Digital Morocco yet, you'll need to create one. If you already have one, log in using your credentials.</Lang></li>
                            <li><Lang>Access the subscription section: Explore your profile and look for the subscription or upgrade section. This section will allow you to view the different available plans.</Lang></li>
                            <li><Lang>Choose the partner investor plan: Select the plan that best fits your needs as a partner investor. Note that some plans may require a paid subscription to access specific features tailored to partner investors.</Lang></li>
                            <li><Lang>Follow the instructions to upgrade your subscription: Once you've chosen the plan that suits you, follow the instructions to upgrade your subscription. This may involve providing payment information and confirming your choice.</Lang></li>
                            <li><Lang>Explore additional features: After successfully upgrading your subscription, explore the additional features available to partner investors. This may include exclusive access to investment opportunities, market reports, private events, and more.</Lang></li>
                        </ul>
                        <p><Lang>If you have any questions or encounter any issues during the upgrade process, don't hesitate to contact Digital Morocco's customer support for assistance.</Lang></p>
                    </> 
                    }
                />
                <Topic
                    topicId={9}
                    id={9}
                    question={lang("How can I become a partner or sponsor?")}
                    answer={
                        <>
                        <p><Lang>To become an investor partner on Digital Morocco, you can follow one of these two methods:</Lang></p>
                        <ol>
                            <li>
                                <p><Lang>Log in to the account:</Lang></p>
                                <ul>
                                    <li><Lang>Log in to your account on Digital Morocco using your login credentials.</Lang></li>
                                    <li><Lang>Go to the "Settings" or "Account" section of your profile.</Lang></li>
                                    <li><Lang>Find the option or link to become a partner or sponsor. It could be labeled as "Become a partner" or "Join as a sponsor."</Lang></li>
                                    <li><Lang>Follow the instructions to submit your application and provide the required information. This may include details about your company or organization, your areas of interest, and any other relevant information.</Lang></li>
                                </ul>
                            </li>
                            <li>
                                <p><Lang>Contact support:</Lang></p>
                                <ul>
                                    <li><Lang>If you prefer personalized assistance or have questions about the process, you can contact Digital Morocco's customer support.</Lang></li>
                                    <li><Lang>Send an email to the support team stating your interest in becoming a partner or sponsor. They will be able to guide you through the process and answer any questions you may have.</Lang></li>
                                </ul>
                            </li>
                        </ol>
                        <p><Lang>Once your partnership or sponsorship application is submitted and approved, you'll be able to enjoy the benefits and opportunities offered to partners and sponsors on the Digital Morocco platform.</Lang></p>
                    </>                    
                    }
                />
                <Topic
                    topicId={10}
                    id={10}
                    question={lang("What if I have technical issues?")}
                    answer={
                    <>
                        <p><Lang>In case of technical problems on Digital Morocco, please follow these steps:</Lang></p>
                        <ul style={{listStyleType: 'decimal' }}>
                            <li><Lang>Check the FAQ: First, check our Frequently Asked Questions (FAQ) section to see if your issue has already been addressed and if there are any suggested solutions.</Lang></li>
                            <li><Lang>Contact support: If you don't find a solution in the FAQ, contact our technical support team. You can send an email to </Lang> <a href="mailto:support@digitalmorocco.net">support@digitalmorocco.net</a> <Lang>or fill out the contact form on our website. Describe your problem as clearly as possible so that our team can assist you effectively.</Lang></li>
                            <li><Lang>Report the problem: If you encounter a specific bug or technical issue on the site, report it to our technical team. You can do this by clicking on the "Report a problem" button (or similar) available on the page where you're experiencing the issue.</Lang></li>
                            <li><Lang>Wait for a response: After contacting support or reporting the problem, please wait while our team reviews your request and works to resolve the issue. We'll do our best to provide you with a response or solution as soon as possible.</Lang></li>
                            <li><Lang>Try the proposed solutions: Once you've received a response from the technical support team, try the proposed solutions to resolve your issue. Follow the instructions carefully and don't hesitate to contact support again if you need further assistance.</Lang></li>
                        </ul>
                        <p><Lang>We're here to help you overcome any technical issues you may encounter on Digital Morocco. Feel free to contact us if you need assistance.</Lang></p>
                    </>
                    
                    }
                />
            </div>
        </Container>
    );
};

export default List;

/**
 * Container
 */
const Container = styled.div`
    > #topics {
        margin-top: 10px;
    }
`;
