import { Link } from "react-router-dom";
import mauimeeLogo from "../../../assets/icons/Mauimee_logo.svg";
import instagram from "../../../assets/footer_assets/icons/sm-1.png";
import youtube from "../../../assets/footer_assets/icons/sm-2.png";
import twitter from "../../../assets/footer_assets/icons/sm-4.png";
import tiktok from "../../../assets/footer_assets/icons/sm-5.png";
import snapchat from "../../../assets/footer_assets/icons/sm-6.png";
import pinterest from "../../../assets/footer_assets/icons/sm-7.png";
import visa from "../../../assets/footer_assets/pay/visa.png";
import mastercard from "../../../assets/footer_assets/pay/mastercard.png";
import amex from "../../../assets/footer_assets/pay/american-express.png";
import applepay from "../../../assets/footer_assets/pay/apple-pay.png";
import googleplay from "../../../assets/footer_assets/pay/google-play.png";
import stripe from "../../../assets/footer_assets/pay/stripe.png";

const Footer = () => {
  return (
    <footer className='relative  w-full bg-customFooterBackground px-4 py-8 lg:px-8 mt-auto'>
      <div className='mx-auto max-w-7xl'>
        {/* Logo */}
        <div className='flex justify-center mb-3'>
          <img className='h-12 md:h-14 w-auto ' src={mauimeeLogo} alt='logo' />
        </div>

        {/* Main Footer content */}
        <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-1 lg:grid-cols-4 lg:text-left my-6 lg:items-start'>
          {/* Contact and SM Icons */}
          <div className='flex flex-col items-center space-y-3 lg:items-start'>
            <h4>Contact</h4>
            <p>
              Address:
              <br />
              562 Lewers St, Honolulu, HI
            </p>
            <p>
              Phone:
              <br />
              (+81) 01 2456 7894
            </p>
            <p>
              Email:
              <br />
              mauishirts@mauimee.com
            </p>

            <div className='py-4 flex flex-col gap-0 '>
              <h4>Follow us</h4>
              <div className='flex justify-center md:justify-start gap-2'>
                <img
                  className='w-[25px] h-[25px] cursor-pointer'
                  src={instagram}
                  alt='instagram'
                />
                <img
                  className='w-[25px] h-[25px] cursor-pointer'
                  src={youtube}
                  alt='instagram'
                />
                <img
                  className='w-[25px] h-[25px] cursor-pointer'
                  src={twitter}
                  alt='twitter'
                />
                <img
                  className='w-[25px] h-[25px] cursor-pointer'
                  src={tiktok}
                  alt='tiktok'
                />
                <img
                  className='w-[25px] h-[25px] cursor-pointer'
                  src={snapchat}
                  alt='snapchat'
                />
                <img
                  className='w-[25px] h-[25px] cursor-pointer'
                  src={pinterest}
                  alt='pinterest'
                />
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className='space-y-3  px-3'>
            <h4 className='lg:mb-8'>Company</h4>
            <p>About us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Delivery Information</p>
          </div>

          {/* My Account Column */}
          <div className='space-y-3  px-3 '>
            <h4 className='lg:mb-8'>My Account</h4>
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Help</p>
          </div>

          {/* Donwload App Column */}
          <div className='space-y-3  px-3'>
            <h4 className='lg:mb-6'>Download Our App</h4>
            <p className='pt-2'>From the App store or Google Play</p>
            <div className='flex justify-center items-center gap-2 lg:justify-start'>
              <img
                className='w-[60px] h-[auto]'
                src={applepay}
                alt='applepay logo'
              />
              <img src={googleplay} alt='googleplay logo' />
            </div>
            <p className='pt-2'>Secure Payments</p>
            <div className='flex justify-center items-center lg:justify-start gap-2 '>
              <img src={visa} alt='visa logo' />
              <img src={mastercard} alt='mastercard logo' />
              <img src={amex} alt='amex logo' />
              <img src={stripe} alt='stripe logo' />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mx-auto mt-10'>
          <p className='footer-p'>&#169; 2024 MauiMee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
