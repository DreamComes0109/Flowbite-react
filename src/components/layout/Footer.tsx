import React from "react";
import { Footer as FooterNav } from "flowbite-react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterNav bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterNav.Title title="Company" />
            <FooterNav.LinkGroup col>
              <FooterNav.Link href="/#">About</FooterNav.Link>
              <FooterNav.Link href="#">Careers</FooterNav.Link>
              <FooterNav.Link href="#">Brand Center</FooterNav.Link>
              <FooterNav.Link href="#">Blog</FooterNav.Link>
            </FooterNav.LinkGroup>
          </div>
          <div>
            <FooterNav.Title title="help center" />
            <FooterNav.LinkGroup col>
              <FooterNav.Link href="#">Discord Server</FooterNav.Link>
              <FooterNav.Link href="#">Twitter</FooterNav.Link>
              <FooterNav.Link href="#">Facebook</FooterNav.Link>
              <FooterNav.Link href="#">Contact Us</FooterNav.Link>
            </FooterNav.LinkGroup>
          </div>
          <div>
            <FooterNav.Title title="legal" />
            <FooterNav.LinkGroup col>
              <FooterNav.Link href="#">Privacy Policy</FooterNav.Link>
              <FooterNav.Link href="#">Licensing</FooterNav.Link>
              <FooterNav.Link href="#">Terms & Conditions</FooterNav.Link>
            </FooterNav.LinkGroup>
          </div>
          <div>
            <FooterNav.Title title="download" />
            <FooterNav.LinkGroup col>
              <FooterNav.Link href="#">iOS</FooterNav.Link>
              <FooterNav.Link href="#">Android</FooterNav.Link>
              <FooterNav.Link href="#">Windows</FooterNav.Link>
              <FooterNav.Link href="#">MacOS</FooterNav.Link>
            </FooterNav.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterNav.Copyright by="Flowbite™" href="#" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <AiFillFacebook
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillInstagram
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillTwitterCircle
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillGithub
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillDribbbleCircle
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
          </div>
        </div>
      </div>
    </FooterNav>
  );
};

export default Footer;
