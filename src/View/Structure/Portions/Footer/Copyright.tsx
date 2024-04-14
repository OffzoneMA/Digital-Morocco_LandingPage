import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'


/**
 * Copyright
 * 
 * @returns 
 */
const Copyright = () => {

    return (
        <Container>
            <div id="links">
                <a href='/'><Lang>Conditions Générales d'Utilisation</Lang></a>
                <a href='/'><Lang>Mentions légales</Lang></a>
                <a href='/'><Lang>Politique de Confidentialité</Lang></a>
            </div>
            <p id="copyright"><Lang>Copyright © 2023 Digital Morocco, tous droits réservés.</Lang> <Lang>Par</Lang> <a rel="noreferrer" href="https://offzone.net/" target="_blank">OFFZONE</a></p>
        </Container>
    )
}

export default Copyright


/**
 * Container
 * 
 */
const Container = styled.div`
    color: var(--color-grey);
    font-size: 12px;
    text-align: center;
    padding-top: 10px;

    > #links {
        line-height: 25px;

        > a {
            text-decoration: none;
            margin-inline-end: 15px;
        }
    }

    > #copyright > a {
        color: #2575F0;
        text-decoration: none;
    }
`;