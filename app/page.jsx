"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-stone-800 dark:bg-slate-300">
        <section>
          <nav className=" opacity-90 fixed w-full items-center p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-min-10 flex justify-between">
            <h1 className="text-xl font-burtons">Rabiee</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 bg-stone-900 py-2 border-none rounded-md ml-4"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="h-20"></div>
          <div className="flex flex-col text-center p-10 items-center">
            <h2 className="text-4xl font-bold py-2 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Soroosh Rabiee
            </h2>
            <h3 className="text-xl py-2 font-bold dark:text-stone-900">
              Developer & UI/UX designer
            </h3>
            <div className="bg-white mt-10 p-5 shadow-3xl rounded-md max-w-[480px] dark:bg-slate-100 dark:shadow-black-md">
              <p className="text-md py-2 leading-8 text-gray-900 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                molestias fuga aperiam ab quisquam, nesciunt mollitia facere
                harum repellat quis atque vero dolorum iusto fugit voluptatibus
                maxime odit eveniet modi.
              </p>
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-11 py-1 text-gray-100">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full w-80 h-80 mt-10 mx-auto animate-bounce_x  ">
            <Image
              src={deved}
              layout="fill"
              objectFit="cover"
              alt="header pic"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-10 text-center dark:text-stone-900">
              My Services
            </h3>
            <p className="text-md py-2 leading-8 text-gray-300 text-center dark:text-stone-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              eos quia, blanditiis nisi quae,
            </p>
          </div>
          <div className="p-10 flex flex-col justify-start items-center gap-5 sm:flex-row md:flex-wrap lg:justify-center ">
            <div className="p-10 max-w-[300px] flex flex-col justify-center items-center align-middle shadow-black-xl bg-stone-800 mx-1 rounded-lg">
              <Image src={design} width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2 text-center">
                Lorem ipsum dolor sit, am numquam odio molestias
              </p>
              <h4 className="py-4 text-indigo-500">Desigm tools I use</h4>
              <p className="text-gray-300 py-1 ">Photoshop</p>
              <p className="text-gray-300 py-1 ">Premier</p>
              <p className="text-gray-300 py-1 ">Figma</p>
            </div>
            <div className="p-10 max-w-[300px] flex flex-col justify-center items-center align-middle shadow-black-xl bg-stone-800 mx-1 rounded-lg">
              <Image src={consulting} width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2 text-center">
                Lorem ipsum dolor sit, am numquam odio molestias
              </p>
              <h4 className="py-4 text-indigo-500">Desigm tools I use</h4>
              <p className="text-gray-300 py-1 ">Photoshop</p>
              <p className="text-gray-300 py-1 ">Premier</p>
              <p className="text-gray-300 py-1 ">Figma</p>
            </div>
            <div className="p-10 max-w-[300px] flex flex-col justify-center items-center align-middle shadow-black-xl bg-stone-800 mx-1 rounded-lg">
              <Image src={code} width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2 text-center">
                Lorem ipsum dolor sit, am numquam odio molestias
              </p>
              <h4 className="py-4 text-indigo-500">Desigm tools I use</h4>
              <p className="text-gray-300 py-1 ">Photoshop</p>
              <p className="text-gray-300 py-1 ">Premier</p>
              <p className="text-gray-300 py-1 ">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 text-center">Portfolio</h3>
            <p className="py-2 text-center">
              Lorem ipsum dolor sit, am numquam odio molestias
            </p>
          </div>
          <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web1}
                alt="web"
                className="rounded-lg  object-cover min-h-full"
                width={"100%"}
                objectFit="cover"
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web2}
                alt="web"
                className="rounded-lg object-cover min-h-full"
                width={"100%"}
                objectFit="cover"
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web3}
                alt="web"
                className="rounded-lg object-cover min-h-full"
                width={"100%"}
                objectFit="cover"
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web4}
                alt="web"
                className="rounded-lg object-cover min-h-full"
                width={"100%"}
                objectFit="cover"
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1  ">
              <Image
                src={web5}
                alt="web"
                className="rounded-lg object-cover min-h-full"
                width={"100%"}
                objectFit="cover"
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web6}
                alt="web"
                className="rounded-lg object-cover min-h-full"
                width={"100%"}
                objectFit="cover"
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
