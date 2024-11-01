// Import modules
import React from "react";
import CardMember from "../components/CardMember";

// Donation Page
const page = () => {
  const committees = [
    {
      image: "./avatar.jpg",
      name: "Rev. Hembang Tambunm, M.Th",
      position: "Pastor In Charge",
    },
    {
      image: "./avatar.jpg",
      name: "GI. Paramitha Shara Rajagukguk, S.Th",
      position: "Pastor In Charge",
    },
    {
      image: "./avatar.jpg",
      name: "Mrs. Mariaty Yananto, M.Div",
      position: "Pastor In Charge",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Andjurkan Tarigan",
      position: "Board Advisory",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Benny Sirait",
      position: "Board Advisory",
    },
    {
      image: "./avatar.jpg",
      name: "dr. Hendra Djuang",
      position: "Board Advisory",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Donald Siahaan",
      position: "Lay Leader",
    },
    {
      image: "./committee/StevenLie.jpeg",
      name: "Mr. Steven Lie",
      position: "Associate Lay Leader",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Sunaryo Sitopu",
      position: "Secretary",
    },{
      image: "./avatar.jpg",
      name: "Mrs. Juliana Himawan",
      position: "Vice Secretary",
    },
    {
      image: "./committee/Erlisa.png",
      name: "Ms. Erlisa",
      position: "Treasurer ",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Bob Manullang",
      position: "Membership & Evangelism Committee ",
    },
    {
      image: "./avatar.jpg",
      name: "Ms. Debbie Silitonga",
      position: "Christian Education ",
    },
    {
      image: "./committee/EkunSiregar.jpeg",
      name: "Mr. Ekun Siregar",
      position: "Finance & Stewardship Committee",
    },
    {
      image: "./committee/Hermansyah.jpeg",
      name: "Mr. Hermansyah",
      position: "Missions & Outreach",
    },
    {
      image: "./avatar.jpg",
      name: "Ms. Oclim Silitonga",
      position: "Social Concern",
    },
    {
      image: "./committee/JefriSirait.jpeg",
      name: "Mr. Jefri Sirait",
      position: "Pastor-Parish Relations Committee (PPRC)",
    },
    {
      image: "./avatar.jpg",
      name: "Ms. Joyce Tobing",
      position: "Worship & Music",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Yacub",
      position: "Property & Maintenance",
    },
    {
      image: "./committee/ErlinaTeguh.jpeg",
      name: "Mrs. Erlina Teguh",
      position: "Sunday School Superintendent",
    },
    {
      image: "./avatar.jpg",
      name: "Mr. Hubert H. Hutabarat",
      position: "Men Fellowship",
    },
    {
      image: "./committee/ElviSolitaSiahaan.jpeg",
      name: "Ms. Elvi Solita Siahaan",
      position: "Women Fellowship",
    },
    {
      image: "./avatar.jpg",
      name: "Ms. Miranda Elizabeth Marpaung",
      position: "Methodist Youth Fellowship (MYF)",
    },
    {
      image: "./avatar.jpg",
      name: " Mr. Marvel Diovan Siahaan",
      position: "Teenagers Fellowship",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center gap-20 my-32">
        <h2 className="text-5xl font-bold text-center">
          Pastoral and Board Members
        </h2>
        <div className="grid w-3/4 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {committees.map((committee) => (
            <CardMember
              image={committee.image}
              name={committee.name}
              position={committee.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
