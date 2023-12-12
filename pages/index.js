import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import peter_chen_avatar from "../public/peter_chen_avatar.png";
import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";
import projects from "@/public/projects";
import Card from "@/components/Card";
import SingleIcon from "@/components/SingleIcon";
import icons from "@/public/icons";
import KUTE from 'kute.js';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  //Router
  const router = useRouter();

  //Blob animation
  useEffect(() => {
    var tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );

    tween.start();
  }, []);


  //Intersection observer
  useEffect(() => {
    // Check if the component is mounted on the client side
    if (typeof window !== "undefined") {
      // Intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      // Find your target elements and start observing
      const hiddenElements = document.querySelectorAll(".hide");
      hiddenElements.forEach((el) => observer.observe(el));

      // Clean up the observer when the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // Formik logic

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    //validation
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .max(20, "Name must be 20 characters or less."),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
  });

  //emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53wuam9",
        "template_l3f38ku",
        form.current,
        "38tiSpfDvWmJL9aVR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // Navigate to the success page after the email is sent
          router.push("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //create icons
  function createIcon(icon) {
    return <SingleIcon key={icon.id} image={icon.image} name={icon.name} />;
  }

  //create cards
  function createCard(project) {
    return (
      <Card
        key={project.id}
        image={project.image}
        name={project.name}
        description={project.description}
        techStack={project.techStack}
        siteURL={project.siteURL}
        codeURL={project.codeURL}
      />
    );
  }

  //home page

  return (
    <div className={darkMode && "dark"}>
      <Head>
        <title>Peter Chen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white px-10 sm:px-20 md:px-30 lg:px-80 dark:bg-zinc-800"
      >
        {/* frontpage */}
        <section className="min-h-screen relative flex flex-col items-center">
          <nav
            className="py-5 mb-12 flex justify-between 
          fixed top-0 left-0 right-0 px-10
          md:px-20 lg:px-40
          z-50 bg-white dark:bg-zinc-800"
          >
            <h1 className="text-2xl font-pacifico text-gray-800 dark:text-gray-400">
              TeamPickle
            </h1>
            <ul className="flex items-center ">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-gray-800 dark:text-white"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-gray-800 dark:text-white"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-400 to bg-sky-900 px-4 py-2 ml-8 rounded"
                  href="https://drive.google.com/uc?export=download&id=15zOVdXu-9j2biJSnRWSX6rMnWPHxkOZ3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="outer-headings flex text-center py-10">
            <h2 className="text-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed py-2 px-10 mt-20 text-cyan-600 font-normal md:text-4xl lg:text-5xl">
              Hi, I&apos;m Peter! <br />
              I&apos;m a{" "}
              <span className="font-bold">
                Mechanical Engineer turned Developer
              </span>
              <br />
              <div className="flex items-center pl-8 md:pl-40 lg:pl-60">
                and
                <div className="inner-headings text-left ml-4 my-auto">
                  <span>
                    Athlete. ⛹🏻
                    <br />
                    Optimist. 🍀
                    <br />
                    Human GPS. 📍
                    <br />
                    Ramen Enthusiast. 🍜
                    <br />
                    French Bulldog Dad. 🐶
                    <br />
                  </span>
                </div>
              </div>
            </h2>
          </div>

          {/* blob animation */}
          <svg
            id="visual"
            viewBox="0 0 900 900"
            width="900"
            height="900"
            version="1.1"
            className="absolute lg:ml-48 lg:mt-80 md:mt-72 md:scale-90 sm:mt-64 sm:ml-40 sm:scale-75 blob-animation" //Add margin-top to create space between the image and SVG
          >
            <g transform="translate(332.7709972129551 385.36372064997084)">
            <path id='blob1'
              d="M216.5 -207C279.9 -153.2 329.9 -76.6 314 -15.9C298.1 44.8 216.2 89.6 152.9 141.1C89.6 192.6 44.8 250.8 -18.3 269.1C-81.3 287.3 -162.6 265.6 -198 214.1C-233.3 162.6 -222.7 81.3 -213.7 9C-204.7 -63.4 -197.5 -126.8 -162.1 -180.6C-126.8 -234.5 -63.4 -278.7 6.6 -285.3C76.6 -291.9 153.2 -260.9 216.5 -207" 
              fill="#0891b2">
             </path>
             </g>
            <g transform="translate(392.20264884720757 409.1243717437219)" style={{ visibility:'hidden' }}>
            <path id='blob2'
              d="M170.9 -199.6C205.6 -136.2 206.8 -68.1 203 -3.8C199.2 60.6 190.5 121.2 155.8 176.5C121.2 231.8 60.6 281.9 7.9 274C-44.8 266.1 -89.6 200.2 -123.7 144.9C-157.9 89.6 -181.5 44.8 -203.1 -21.7C-224.8 -88.2 -244.6 -176.3 -210.5 -239.6C-176.3 -303 -88.2 -341.5 -10 -331.5C68.1 -321.5 136.2 -262.9 170.9 -199.6" 
              fill="#0891b2">
            </path>
            </g>
          </svg>

          <div className="relative mx-auto rounded-full w-80 h-80 my-16 overflow-hidden md:h-96 md:w-96">
            <Image src={peter_chen_avatar} alt="avatar" />
          </div>

        </section>

        {/* My Tech Stacks */}
        <section className="hide">
          <div className="container mx-auto text-center my-20">
            <h3 className="text-3xl pt-1 text-gray-800 dark:text-gray-400">
              My Toolbox & Things I Can Do
            </h3>
            <div className="flex flex-wrap justify-center items-center my-20 icons">
              {icons.map(createIcon)}
            </div>
          </div>
        </section>

        {/* portfolio */}
        <section className="hide">
          <div className="text-center">
            <h3 className="text-3xl py-1 text-gray-800 dark:text-gray-400">
              A Selection Of My Recent Work
            </h3>
          </div>
          {/* card */}
          <div className="flex flex-col gap-10 py-20 lg:flex-row lg:flex-wrap projects">
            {projects.map(createCard)}
          </div>
        </section>

        {/* contact form */}
        <section className="my-20 flex items-center justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-zinc-600 flex rounded-lg  "
          >
            <div className="p-10 flex-1 text-gray-800 dark:text-gray-400">
              <h1 className="text-3xl pb-2">Let&apos;s get in touch! 👋🏻 </h1>
              <p className="text-lg ">
                Join my adventure from a Mechanical Engineer to Web Developer!
                Find out what I have to offer to boost your business.{" "}
              </p>
              <div className="mt-6">
                <div className="pb-4">
                  <div className="flex flex-wrap">
                    {/* name input field */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <label
                        className={`block text-sm pb-2 ${
                          formik.touched.name && formik.errors.name
                            ? "text-red-400"
                            : ""
                        }`}
                        htmlFor="name"
                      >
                        {formik.touched.name && formik.errors.name
                          ? formik.errors.name
                          : "name"}
                      </label>
                      <input
                        className="border-2 dark:border-zinc-700 p-2 rounded-md w-full focus: outline-none focus:border-cyan-600 focus:ring-cyan-400 dark:bg-zinc-500"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your name"
                      />
                    </div>
                    {/* email input field */}
                    <div className="w-full sm:w-1/2 pr-2 sm:pl-2">
                      <label
                        className={`block text-sm pb-2 ${
                          formik.touched.email && formik.errors.email
                            ? "text-red-400"
                            : ""
                        }`}
                        htmlFor="email"
                      >
                        {formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : "email"}
                      </label>
                      <input
                        className="border-2 dark:border-zinc-700 p-2 rounded-md w-full focus: outline-none focus:border-cyan-600 focus:ring-cyan-400 dark:bg-zinc-500"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  {/* message input field */}
                  <div className="pt-5">
                    <label
                      className={`block text-sm pb-2 ${
                        formik.touched.message && formik.errors.message
                          ? "text-red-400"
                          : ""
                      }`}
                      htmlFor="message"
                    >
                      {formik.touched.message && formik.errors.message
                        ? formik.errors.message
                        : "message"}
                    </label>
                    <textarea
                      rows="3"
                      className="border-2 dark:border-zinc-700 p-2 rounded-md w-full focus: outline-none focus:border-cyan-600 focus:ring-cyan-400 dark:bg-zinc-500"
                      type="text"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-cyan-600 text-sm text-white dark:text-gray-800 py-3 mt-6 rounded-lg w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        {/* social */}
        <div className="my-20 text-4xl flex justify-center gap-16 text-gray-800 dark:text-gray-400">
          <p className="text-3xl pb-2">Feeling social? </p>
          <a
            href="https://www.linkedin.com/in/zhiyuan-peter-chen-3b20a892/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/nonsense-bucket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>

        {/* footer */}
        <footer>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-center">
              <div className="text-gray-600 dark:text-gray-400">
                &copy; 2023 TeamPickle. All rights reserved ✨.
              </div>
            </div>
          </div>
        </footer>
      </m.main>
    </div>
  );
}
