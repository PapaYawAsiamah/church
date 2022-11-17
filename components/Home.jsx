import React from "react";
import styles from "../styles/navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import { useRef } from "react";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";
import { textAlign } from "@mui/system";

const HomePage = () => {
  //   const navRef = useRef();

  const showNavbar = () => {
    // navRef.current.classList.toggle("responsiveNav");\

    setIsOpen(true);
  };
  const RemoveNavbar = () => {
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [More, setMore] = useState(false)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.head}>
          <img src="/logo.png" alt="logo" className={styles.logo} />
          <p className={styles.name}>
            Treasure
            <br />
            Family
            <br />
            Chapel
          </p>
        </div>
        <nav className={isOpen ? styles.responsiveNav : ""} id={styles.nav}>
          <Link href="/#" onClick={RemoveNavbar} >
            Home
          </Link>
          <Link href="/#AboutUs"   onClick={RemoveNavbar} scroll={false}>
            About Us
          </Link>
          <Link href="/#location" onClick={RemoveNavbar} scroll={false}>
            Location
          </Link>
          <Link href="/#Contact" onClick={RemoveNavbar} scroll={false}>
            Contact Us
          </Link>
          <button
            onClick={RemoveNavbar}
            className={`${styles.navBtn} 
        ${styles.navCloseBtn}`}
          >
            <MenuIcon />
          </button>
        </nav>
        <button onClick={showNavbar} className={styles.navBtn}>
          <ListIcon />
        </button>
      </header>
      <div className={styles.mainImage}>
        <div className={styles.container}>
          <h1>
            Treasure Family
            <br />
            Chapel
          </h1>
        </div>
      </div>
      <div className={styles.Aboutsection} id="AboutUs">
        <div className={styles.AboutContainer}>
          <div className={styles.AboutContentSection}>
            <div className={styles.AboutTitle}>
              <h1>About Us</h1>
            </div>
            <div className={styles.AboutContent}>
              <h3>Treasure Family Chapel</h3>
              <p>
                Treasure Family Chapel is a bible based church which emphasizes
                the Bible as its behavioral standard, and focuses on the
                inerrancy of the Bible. It is typically a type of evangelical
                Protestant church.
                </p>
                {
                  More && <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eligendi distinctio officiis, animi quia illum rerum voluptatum consequuntur maxime vel nisi voluptate. Dolorum quis alias architecto, quo adipisci sint fugit?
                  </p>
                }
             
              <div className={styles.AboutBtn}>
                <button onClick={() => setMore(true)} >Read More</button>
              </div>
            </div>
            <div className={styles.social}>
              <Link href="https://web.facebook.com/people/Treasure-Family-Chapel/100064486320113/">
                <FacebookIcon />
              </Link>
              <Link href="">
                <YouTubeIcon/>
              </Link>
              <Link href="">
                <InstagramIcon />
              </Link>

            </div>
            {/* <div className={styles.ImageSection}>
            <img src="image4.jpg" alt="image" id={styles.spec}></img>
            </div> */}
          </div>
          <div className={styles.ImageSection}>
            <img src="About.jpg" alt="image"></img>
         
        
            <img src="image1.jpg" alt="image"></img>
         
        
          </div>
        </div>
      </div>
      <div className={styles.MapContainer} id="location">
        <div className={styles.LocationHeader}>
          <h1> Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.176167817131!2d-0.3260513851486977!3d5.540874895982459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbd3df6a2bd1d%3A0x7a8f8d48e8d30447!2sTreasure%20family%20chapel!5e0!3m2!1sen!2sgh!4v1668192236825!5m2!1sen!2sgh"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          ></iframe>
        </div>
      </div>

      <section className={styles.contact} id="Contact">
        <div className={styles.ConContent}>
          <div className={styles.ConHeader}>
            <h1>Contact Us</h1>
          </div>
          <p>
            Our Services are on Sundays at 8:00am to 10:30am and on wednesdays
            and Fridays and 8;30pm to 9:30pm. Come and be blessed
          </p>
          <div className={styles.ConContainer}>
            <div className={styles.ContactInfo}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <RoomIcon />
                </div>
                <div className={styles.text}>
                  <h3>Address</h3>
                  <p>
                    New Weija-Aplaku, <br />
                    Accra-Ghana
                  </p>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <LocalPhoneIcon />
                </div>
                <div className={styles.text}>
                  <h3>Phone</h3>
                  <p>0264641128</p>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <EmailIcon />
                </div>
                <div className={styles.text}>
                  <h3>Email</h3>
                  <p>
                    treasurefamilychapel
                    <br />
                    @gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Form}>
              <form action="">
                <h2>Send Message</h2>
                <div className={styles.Input}>
                  <input
                    type="text"
                    required="required"
                    placeholder="Full Name"
                  />
                </div>
                <div className={styles.Input}>
                  <input type="text" required="required" placeholder="Email" />
                </div>
                <div className={styles.Input}>
                  <textarea
                    name=""
                    id=""
                    required="required"
                    placeholder="Type Message..."
                  ></textarea>
                </div>
                <div className={styles.Input}>
                  <input type="submit" value="send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
