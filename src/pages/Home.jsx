import React, { useState } from "react";
import LayoutKom from "../pages/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Orang1 from "../assets/Logo2.png";
import Gambar from "../assets/logo_baju.png";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { BiUndo } from "react-icons/bi";

import Image1 from "../assets/logo_baju.png";

const KomHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const [CounterOn, setCounterOn] = useState(false);

  const items = [
    {
      id: 1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minima?",
      title: "Card 1",
      image: Gambar,
    },
    {
      id: 2,
      subtitle: "Lorem ipsum dolor sit amet.",
      title: "Card 2",
    },
  ];
  return (
    <section className="">
      <LayoutKom>
        <div className="px-4 z-10 relative w-full">
          <div className="z-10">
            <div className="pb-20"></div>

            <div className="grid lg:grid-cols-2  grid-cols-1 gap-3 md:p-10 ">
              <div>
                <blockquote className="text-white ">
                  <h1 className="pt-16 md:text-6xl text-2xl self-center font-tema1 font-semibold ">
                    <span className="pl-2 bg-gray-100 rounded-xl bg-opacity-60 text-black ">
                      Hallo!{" "}
                    </span>
                    Selamat datang di profil saya!{" "}
                  </h1>

                  <div className="lg:text-xl text-sm">
                    <p className="pt-3 self-center font-tema3 ">
                      "Sebagai seorang Website Developer yang mencintai bidang
                      Desain Website. Di sini Anda akan menemukan cerita di
                      balik setiap karya. Terima kasih sudah berkunjung, dan
                      saya berharap Anda mendapatkan sesuatu pada profile saya"
                    </p>
                    <div className="flex items-center">
                      <img src={Orang1} alt="" className="h-20 p-4" />
                      <NavLink to="/about">
                        <button
                          style={{ backdropFilter: "blur(20px)" }}
                          className="text-black bg-white hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 
     font-medium rounded-lg text-sm px-5 py-2.5 text-center border font-tema3"
                        >
                          <motion.div
                            className="inline-block" // Tambahkan class inline-block di sini
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <p>
                              {" "}
                              -
                              <TypeAnimation
                                sequence={[
                                  "Cek Tentang Saya",
                                  1000,
                                  "Check About Me",
                                  1000,
                                  "تحقق عني",
                                  1000,
                                  "Mira Sobre Mi",
                                  1000,
                                  "检查我的情况",
                                  1000,
                                ]}
                                wrapper="span"
                                speed={30}
                                repeat={Infinity}
                              />
                            </p>
                          </motion.div>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>

            <div className="flex items-center justify-center min-h-screen container mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {/*Bagian pertama disini*/}
                <div className="bg-gray-400 bg-opacity-30 rounded-xl shadow-lg">
                  <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                      <img src={Image1} alt="" />
                    </div>
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <h5 className="text-white text-center font-tema3 text-2xl">
                        Project Sedang Dikerjakan
                      </h5>
                      <h5 className="text-white text-center font-tema3 text-2xl">
                        +
                        {CounterOn && (
                          <CountUp start={0} end={14} duration={2} delay={0} />
                        )}
                      </h5>
                    </ScrollTrigger>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="div1">
                        <motion.div
                          layout
                          onClick={() => setIsOpen(!isOpen)}
                          className="bg-white rounded-xl p-3 pb-5"
                        >
                          <motion.h2 layout className="font-tema3">
                            Website
                          </motion.h2>
                          {isOpen && (
                            <motion.div className="font-tema2">
                              <p className="pt-1 ">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      <div className="div2">
                        <motion.div
                          layout
                          onClick={() => setIsOpen2(!isOpen2)}
                          className="bg-white rounded-xl p-3 pb-5"
                        >
                          <motion.h2 layout className="font-tema3">
                            Lainnya
                          </motion.h2>

                          {isOpen2 && (
                            <motion.div className="font-tema2">
                              <p className="pt-1">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Penutup pertama disini*/}

                {/*Bagian kedua disini*/}
                <div className="bg-gray-500 bg-opacity-30 rounded-xl shadow-lg">
                  <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                      <img src={Image1} alt="" />
                    </div>
                    <h5 className="text-white text-center font-tema3 text-2xl">
                      Project Sedang Dikerjakan
                    </h5>
                    <h5 className="text-white text-center font-tema3 text-2xl">
                      +
                      {CounterOn && (
                        <CountUp start={0} end={3} duration={2} delay={0} />
                      )}
                    </h5>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="div1">
                        <motion.div
                          layout
                          onClick={() => setIsOpen3(!isOpen3)}
                          className="bg-white rounded-xl p-3 pb-5"
                        >
                          <motion.h2 layout className="font-tema3">
                            Website
                          </motion.h2>
                          {isOpen3 && (
                            <motion.div className="font-tema2">
                              <p className="pt-1 ">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      <div className="div2">
                        <motion.div
                          layout
                          onClick={() => setIsOpen4(!isOpen4)}
                          className="bg-white rounded-xl p-3 pb-5"
                        >
                          <motion.h2 layout className="font-tema3">
                            Lainnya
                          </motion.h2>

                          {isOpen4 && (
                            <motion.div className="font-tema2">
                              <p className="pt-1">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Penutup kedua disini*/}

                {/*Bagian ketiga disini*/}
                <div className="bg-gray-600 bg-opacity-30 rounded-xl shadow-lg">
                  <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                      <img src={Image1} alt="" />
                    </div>
                    <h5 className="text-white text-center font-tema3 text-2xl">
                      Akan Dikerjakan
                    </h5>
                    <h5 className="text-white text-center font-tema3 text-2xl">
                      +
                      {CounterOn && (
                        <CountUp start={0} end={2} duration={2} delay={0} />
                      )}
                    </h5>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="div1">
                        <motion.div
                          layout
                          onClick={() => setIsOpen5(!isOpen5)}
                          className="bg-white rounded-xl p-3 pb-5"
                        >
                          <motion.h2 layout className="font-tema3">
                            Website
                          </motion.h2>
                          {isOpen5 && (
                            <motion.div className="font-tema2">
                              <p className="pt-1 ">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      <div className="div2">
                        <motion.div
                          layout
                          onClick={() => setIsOpen6(!isOpen6)}
                          className="bg-white rounded-xl p-3 pb-5"
                        >
                          <motion.h2 layout className="font-tema3">
                            Lainnya
                          </motion.h2>

                          {isOpen6 && (
                            <motion.div className="font-tema2">
                              <p className="pt-1">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius beatae at esse veniam
                                nisi voluptatibus praesentium expedita iusto
                                veritatis. Quisquam.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Penutup ketiga disini*/}
              </div>
            </div>
            <div className="pb-5" />
          </div>
        </div>
      </LayoutKom>
    </section>
  );
};

export default KomHome;
