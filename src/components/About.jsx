import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-10">
        Hi! My name is Jaymar N. Calising from Marihatag Surigao Del Sur, studied at North Eastern Mindanao State University in Lianga Campus. I studied
          Bachelor Sicence in Computer Science 4rth year college in this school year 2022-2023.  This is my project in Human Interaction which we make a website portfolio using reactjs and nodejs.
        </p>
    <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            My Hobby
          </p>
     <p className="text-xl mt-10">
       ul class="list-group">
  <li class="list-group-item">Dancing</li>
  <li class="list-group-item">Editing</li>
  <li class="list-group-item">Coding</li>
</ul>
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
