import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'


/**
 * Links
 * 
 * @returns 
 */
const Links = () => {

    return (
        <Container>
            <section>
                <h4><Lang>About</Lang></h4>
                <a href='/'><Lang>Who We Are?</Lang></a>
                <a href='/'><Lang>Why Join Us?</Lang></a>
                <a href='/'><Lang>Our Goals</Lang></a>
                <a href='/'><Lang>Our Activity</Lang></a>
            </section>
            <section>
                <h4><Lang>Solutions</Lang></h4>
                <a href='/'><Lang>Startup</Lang></a>
                <a href='/'><Lang>Investor</Lang></a>
                <a href='/'><Lang>Company</Lang></a>
                <a href='/events'><Lang>Events</Lang></a>
            </section>
            <section>
                <h4><Lang>Resources</Lang></h4>
                <a href='/'><Lang>Careers</Lang></a>
                <a href='/blog'><Lang>Blog</Lang></a>
                <a href='/terms'><Lang>Terms and Conditions</Lang></a>
            </section>
            <section>
                <h4><Lang>Help</Lang></h4>
                <a href='/faq'><Lang>Support</Lang></a>
                <a href='/contact'><Lang>Contact Us</Lang></a>
                <a href='/faq'><Lang>FAQ</Lang></a>
            </section>
            <section>
                <h4><Lang>Stay Tuned</Lang></h4>
                <div id="social">
                    <a href='/'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9 0H1.1C0.808262 0 0.528473 0.115893 0.322183 0.322183C0.115893 0.528473 0 0.808262 0 1.1V18.9C0 19.1917 0.115893 19.4715 0.322183 19.6778C0.528473 19.8841 0.808262 20 1.1 20H10.68V12.25H8.08V9.25H10.68V7C10.6261 6.47176 10.6885 5.93813 10.8627 5.43654C11.0369 4.93495 11.3188 4.47755 11.6885 4.09641C12.0582 3.71528 12.5068 3.41964 13.0028 3.23024C13.4989 3.04083 14.0304 2.96225 14.56 3C15.3383 2.99521 16.1163 3.03528 16.89 3.12V5.82H15.3C14.04 5.82 13.8 6.42 13.8 7.29V9.22H16.8L16.41 12.22H13.8V20H18.9C19.0445 20 19.1875 19.9715 19.321 19.9163C19.4544 19.861 19.5757 19.78 19.6778 19.6778C19.78 19.5757 19.861 19.4544 19.9163 19.321C19.9715 19.1875 20 19.0445 20 18.9V1.1C20 0.955546 19.9715 0.812506 19.9163 0.679048C19.861 0.54559 19.78 0.424327 19.6778 0.322183C19.5757 0.220038 19.4544 0.139013 19.321 0.0837326C19.1875 0.0284524 19.0445 0 18.9 0Z" fill="#1E0E62" />
                        </svg>
                    </a>
                    <a href='/'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4701 0.000139831H1.53006C1.33964 -0.00250479 1.15056 0.0323873 0.973624 0.102824C0.796689 0.17326 0.635362 0.27786 0.498856 0.410652C0.36235 0.543443 0.25334 0.701824 0.178051 0.876749C0.102761 1.05167 0.062667 1.23972 0.0600586 1.43014V18.5701C0.062667 18.7606 0.102761 18.9486 0.178051 19.1235C0.25334 19.2985 0.36235 19.4568 0.498856 19.5896C0.635362 19.7224 0.796689 19.827 0.973624 19.8975C1.15056 19.9679 1.33964 20.0028 1.53006 20.0001H18.4701C18.6605 20.0028 18.8496 19.9679 19.0265 19.8975C19.2034 19.827 19.3648 19.7224 19.5013 19.5896C19.6378 19.4568 19.7468 19.2985 19.8221 19.1235C19.8974 18.9486 19.9375 18.7606 19.9401 18.5701V1.43014C19.9375 1.23972 19.8974 1.05167 19.8221 0.876749C19.7468 0.701824 19.6378 0.543443 19.5013 0.410652C19.3648 0.27786 19.2034 0.17326 19.0265 0.102824C18.8496 0.0323873 18.6605 -0.00250479 18.4701 0.000139831ZM6.09006 16.7401H3.09006V7.74014H6.09006V16.7401ZM4.59006 6.48014C4.17632 6.48014 3.77953 6.31578 3.48697 6.02323C3.19442 5.73067 3.03006 5.33388 3.03006 4.92014C3.03006 4.5064 3.19442 4.10961 3.48697 3.81705C3.77953 3.5245 4.17632 3.36014 4.59006 3.36014C4.80975 3.33522 5.03224 3.35699 5.24293 3.42402C5.45363 3.49105 5.6478 3.60183 5.81272 3.7491C5.97763 3.89637 6.10958 4.07682 6.19993 4.27862C6.29028 4.48043 6.33698 4.69904 6.33698 4.92014C6.33698 5.14124 6.29028 5.35985 6.19993 5.56166C6.10958 5.76346 5.97763 5.94391 5.81272 6.09118C5.6478 6.23845 5.45363 6.34923 5.24293 6.41626C5.03224 6.48329 4.80975 6.50505 4.59006 6.48014ZM16.9101 16.7401H13.9101V11.9101C13.9101 10.7001 13.4801 9.91014 12.3901 9.91014C12.0527 9.91261 11.7242 10.0184 11.4489 10.2133C11.1735 10.4082 10.9645 10.6828 10.8501 11.0001C10.7718 11.2352 10.7379 11.4827 10.7501 11.7301V16.7301H7.75006V7.73014H10.7501V9.00014C11.0226 8.52725 11.419 8.13766 11.8965 7.87334C12.374 7.60902 12.9146 7.47999 13.4601 7.50014C15.4601 7.50014 16.9101 8.79014 16.9101 11.5601V16.7401Z" fill="#1E0E62" />
                        </svg>
                    </a>
                    <a href='/'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46ZM19.94 5.88C19.9206 5.0503 19.7652 4.2294 19.48 3.45C19.2257 2.78313 18.83 2.17928 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78168 0.776649 2.17693 1.16956 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17693 18.8304 2.78168 19.2234 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.7652 15.7706 19.9206 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.1327 14.6348 18.0178 15.2637 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7256 17.3405 16.3332 17.5964 15.9 17.76C15.3037 17.9778 14.6748 18.0927 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38089 18.1123 4.72459 18.0109 4.1 17.8C3.68578 17.6281 3.31136 17.3728 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01586 15.2952 1.88044 14.6519 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86448 5.35106 1.98295 4.70795 2.21 4.1C2.38605 3.67791 2.65627 3.30166 3 3C3.30381 2.65617 3.67929 2.3831 4.1 2.2C4.70955 1.98004 5.352 1.86508 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86728 15.2637 1.98225 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3777 3.30718 17.6338 3.68273 17.8 4.1C18.0223 4.70893 18.1373 5.35178 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33Z" fill="#1E0E62" />
                        </svg>
                    </a>
                </div>
            </section>
        </Container>
    )
}

export default Links


/**
 * Container
 * 
 */
const Container = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding-block: 30px;

    > section {
        display: flex;
        gap: 25px;
        flex-direction: column;

        > h4 {
            margin: 0;
        }

        > a {
            text-decoration: none;

            &:hover {
                color: var(--color-green);
            }
        }

        > #social {
            display: flex;
            align-items: center;
            gap: 30px;
            justify-content: flex-start;
            margin-top: 10px;

            > a {

                > svg > path {
                    fill: var(--text-color);
                }

                &:hover > svg > path {
                    fill: var(--color-green);
                }
            }
        }
    }
`;