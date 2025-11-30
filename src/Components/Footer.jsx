import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='px-3 py-10 border bg-black text-white rounded-lg'>
            <div className="space-y-5">
                <div className="flex mx-auto gap-5">

                    {/* Brand / About */}
                    <div className='w-1/3'>
                        <h1 className="text-3xl font-bold mb-3">Export Import Hub</h1>
                        <p className="text-sm font-thin pr-20">
                            Connecting global markets with fast, safe, and reliable trade services.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className='w-1/3 flex flex-col items-center'>
                        <h3 className="font-semibold text-lg">Contact Info</h3>
                        <p>Email: support@exporthub.com</p>
                        <p>Phone: +880 123 456 789</p>
                        <p>Address: Dhaka, Bangladesh</p>
                    </div>

                    {/* Social Links */}
                    <div className='w-1/3 flex flex-col items-end'>
                        <h3 className="font-semibold text-lg">Follow Us</h3>
                        <div className="flex gap-5 text-2xl">
                            <a className="hover:text-primary"><FaFacebook /></a>
                            <a className="hover:text-primary"><FaInstagram /></a>
                            <a className="hover:text-primary"><FaXTwitter /></a>
                            <a className="hover:text-primary"><FaLinkedin /></a>
                        </div>
                    </div>

                </div>
                <div className='border-b border-neutral-300'></div>

                {/* Copyright */}
                <div className="text-center text-sm">
                    © {new Date().getFullYear()} Export Import Hub — All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;