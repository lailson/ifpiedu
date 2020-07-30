import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.ifpi.edu.br/">
        <img  style={{size: 20}} src="https://lh5.googleusercontent.com/proxy/yaAA2BZllOUZU1T19xLye3Cj1rCZfocdhr11byNH6qYIWuZL9ArP-RfImPdDVr8XQbmX8Q5CKBlqYmCRDRuOy3i_yeQ2PBhwv_XegykQ7jVIBFN0DKPiODLv8YKV4NAFT_0kdl11jiZrxit5fTXJSLsI-Bckmw" alt="IFPI" />
      </a>
      <p>
        Desenvolvido por Lailson Henrique
      </p>
    </FooterBase>
  );
}

export default Footer;
