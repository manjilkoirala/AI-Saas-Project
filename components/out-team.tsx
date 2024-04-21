import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { BlackSection } from "./blank-section";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const socials = [
  {
    title: "Facebook",
    icon: <FaFacebook className="w-6 h-6" />,
  },
  {
    title: "Twitter",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    name: "Manjil Koirala",
    avatar: "/teams/manjil.png",
    title: "Developer",
    description: "This is the best application I've ever used!",
    socials: {
      facebook: "https://www.facebook.com/manjil.koirala.98/" ,
     twitter: "https://twitter.com/manjilhere" ,
      linkedin: "https://www.linkedin.com/in/manjil-koirala" ,
     instagram: "https://www.instagram.com/techlearnhere/" ,
   },
  },
  {
    name: "Nishan Baniya",
    avatar: "/teams/baniya.jpg",
    title: "Developer",
    description: "I use this daily for generating new photos!",
    socials: {
      facebook: "https://www.facebook.com/nishan.baniya.88/" ,
     twitter: "https://twitter.com/nishanbaniya88" ,
      linkedin: "https://www.linkedin.com/in/nishanbaniya88/" ,
     instagram: "https://www.instagram.com/nishan_baniya/" ,
   },
  },
  {
    name: "Pratima Dhakal",
    avatar: "/teams/pratima.jpg",
    title: "Developer",
    description:
      "This app has changed my life, cannot imagine working without it!",
      socials: {
         facebook: "https://www.facebook.com/prateema.dhakal.18" ,
        twitter: "https://twitter.com/PrateemaDh65489" ,
         linkedin: "https://www.linkedin.com/in/pratima-dhakal-586a6124b" ,
        instagram: "https://www.instagram.com/prateema_dhakal/" ,
      },
  },
];

const Teams = () => {
  return (
    <BlackSection title="Meet Our" highlightedTitle="Team">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonials.map((item,index) => (
          <Card
            key={index}
            className="bg-[#192339] border-none text-white rounded-2xl items-center flex flex-col"
          >
            <CardHeader className="flex flex-col gap-6">
              <div className=" rounded-full bg-slate-600 overflow-hidden p-1">
                <Image
                  src={item.avatar}
                  alt="icon"
                  height={200}
                  width={200}
                  className="rounded-full"
                />
              </div>
              <CardTitle className="flex flex-col gap-2 justify-center items-center gap-x-2">
                <div className="flex flex-col items-center">
                  <p className="text-2xl">{item.name}</p>
                  <p className="text-zinc-400 text-lg">{item.title}</p>
                </div>
                <div className="flex gap-4 items-center ">
              
               
                <Link href={item.socials.facebook} target="_">
                <FaFacebook className="w-6 h-6" />
                </Link>
                <Link href={item.socials.instagram} target="_" >
                <FaInstagram className="w-6 h-6" />
                </Link>
                <Link href={item.socials.linkedin} target="_" >
                <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link href={item.socials.twitter} target="_" >
                <FaXTwitter className="w-6 h-6" />
                </Link>
              </div>
              </CardTitle>
              
            </CardHeader>
          </Card>
        ))}
      </div>
    </BlackSection>
  );
};

export default Teams;
