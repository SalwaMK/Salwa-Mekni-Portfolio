import React from "react";
import { FaPhoneAlt, FaLinkedin, FaGithub, FaKaggle, FaMicrosoft } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { BsStackOverflow } from 'react-icons/bs'
import { SiCodeforces } from 'react-icons/si'
const Contact = (props) =>
{
    return (
        <div className="contact">
            <a href={props.email}><MdEmail className="email" /></a>
            <a href={props.linkedin}><FaLinkedin className="linkedin" /></a>
            <a href={props.github}><FaGithub className="github" /></a>
            <a href={props.stack}><BsStackOverflow className="stack" /></a>
            <a href={props.kaggle}><FaKaggle className="kaggle" /></a>
            <a href={props.code}><SiCodeforces className="code" /></a>
            <a href={props.mic}><FaMicrosoft className="mic" /></a>
        </div>
    );
}

export default Contact;