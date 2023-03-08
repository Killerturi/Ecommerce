import React from "react";
import "./footer.css";
import FooterCard1 from "./FooterCard1";
import FooterCard2 from "./FooterCard2";
import { ProductCategories, SiteInfo, Know_us, Policies } from "./FooterDetail";

const Footer = () => {
  return (
    <>
      <footer className="footer text-white ">
        <div className="footer flex justify-around  text-white pt-8">
          <FooterCard1 type={ProductCategories} heading="PRODUCT CATEGORIES" />
          <FooterCard1 type={SiteInfo} heading="SITE INFO" />
          <FooterCard1 type={Know_us} heading="	Connect with Us" />
          <FooterCard1 type={Policies} heading="POLICIES" />
        </div>
        <hr />
        <FooterCard2 />
      </footer>
    </>
  );
};

export default Footer;
