import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LayoutKom from "../pages/Layout";
import Gambar from "../assets/logo_baju.png";

// Bagian gambar disini
import Gambar1 from "../assets/logo_baju.png";
// Bagian gambar penutup

import { BiUndo } from "react-icons/bi";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
  const [selectedId3, setSelectedId3] = useState(null);

  const items = [
    {
      id: 1,
      subtitle: "Siapa sih saya sebenarnya ?",
      warna: "bg-yellow-200",
      isi: "Saya adalah seorang Website developer , yang bekerja dalam bidang ",
      title: "Tentang Saya",
      image: Gambar,
    },
    {
      id: 2,
      title: "Pendidikan",
      subtitle: "Lorem ipsum dolor sit amet.",
      warna: "bg-blue-200",
    },
    {
      id: 3,
      subtitle: "Lorem ipsum dolor sit amet.",
      title: "Hobi",
      warna: "bg-yellow-200",
    },
    {
      id: 4,
      subtitle: "Lorem ipsum dolor sit amet.",
      title: "Skill",
      warna: "bg-blue-200",
    },
  ];

  const items2 = [
    {
      id: 1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minima?",
      title: "Card 3",
    },
    {
      id: 2,
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      title: "Card 3",
    },
    {
      id: 3,
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      title: "Card 3",
    },
    {
      id: 4,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minima?",
      title: "Card 3",
    },
    {
      id: 5,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minima?",
      title: "Card 3",
    },
  ];

  const items3 = [
    {
      id: 1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minima?",
      title: "Card 3",
    },
  ];

  return (
    <LayoutKom>
      <div>
        <div className="">
          <div className="">
            <div className="pt-20">
              <motion.div className="flex items-center justify-center pt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4">
                  {items.map((item) => (
                    <motion.div
                      className={`card ${
                        item.warna
                      } bg-opacity-80 rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                        selectedId === item.id ? "card-selected" : ""
                      }`}
                      layoutId={`card-container-${item.id}`}
                      onClick={() => setSelectedId(item.id)}
                      key={item.id}
                      initial={{ scale: 1 }}
                      animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-content p-4">
                        <motion.h2 className="text-xl font-bold mb-2 text-black font-tema3">
                          {item.title}
                        </motion.h2>
                        <motion.h5 className="text-sm font-bold mb-1 text-gray-700 font-tema2">
                          {item.subtitle}
                        </motion.h5>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedId && (
                    <motion.div
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {items.map(
                        (item) =>
                          item.id === selectedId && (
                            <motion.div
                              className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                              layoutId={`card-container-${item.id}`}
                              key={item.id}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                            >
                              <motion.div className="relative">
                                <motion.button
                                  className="absolute right-2 py-1 px-2 text-center text-white bg-red-500 rounded-xl mb-2"
                                  onClick={() => setSelectedId("")}
                                >
                                  <BiUndo />
                                </motion.button>
                                <motion.h2 className="text-xl font-tema3 font-bold mb-2 text-black">
                                  {item.title}
                                </motion.h2>
                                <motion.h5 className="text-sm font-bold font-tema2 mb-1 text-gray-700">
                                  {item.subtitle}
                                </motion.h5>
                                <img
                                  src={item.image}
                                  className="card-image w-20"
                                />
                                <motion.p
                                  className="text-md text-gray-700"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  {item.isi}
                                </motion.p>
                              </motion.div>
                            </motion.div>
                          )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="">
              <motion.div className="flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 gap-4">
                  {items2.map((item2) => (
                    <motion.div
                      className={`card bg-white bg-opacity-80 rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                        selectedId2 === item2.id ? "card-selected" : ""
                      }`}
                      layoutId={`card2-container-${item2.id}`}
                      onClick={() => setSelectedId2(item2.id)}
                      key={item2.id}
                      initial={{ scale: 1 }}
                      animate={{ scale: selectedId2 === item2.id ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-content p-4">
                        <motion.h5 className="text-sm font-bold mb-1 text-gray-700">
                          {item2.subtitle}
                        </motion.h5>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedId2 && (
                    <motion.div
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {items2.map(
                        (item2) =>
                          item2.id === selectedId2 && (
                            <motion.div
                              className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                              layoutId={`card2-container-${item2.id}`}
                              key={item2.id}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                            >
                              <motion.div className="relative">
                                <motion.button
                                  className="absolute right-2 py-1 px-2 text-center text-white bg-red-500 rounded-xl mb-2"
                                  onClick={() => setSelectedId2(null)}
                                >
                                  <BiUndo />
                                </motion.button>
                                <motion.h5 className="text-sm font-bold mb-1 text-gray-700">
                                  {item2.subtitle}
                                </motion.h5>
                                <motion.p
                                  className="text-md text-gray-700"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  Additional content can go here!
                                </motion.p>
                              </motion.div>
                            </motion.div>
                          )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="grid grid-cols-2">
              <div className="grid grid-cols-2 p-5 ">
                <div className="bg-white rounded-xl bg-opacity-25 grid grid-cols-2 p-2 gap-1">
                  <div className="rounded-xl bg-white">
                    <img src={Gambar} alt="" />
                  </div>
                  <div className="rounded-xl bg-white">
                    <img src={Gambar} alt="" />
                  </div>{" "}
                  <div className="rounded-xl bg-white">
                    <img src={Gambar} alt="" />
                  </div>{" "}
                  <div className="rounded-xl bg-white">
                    <img src={Gambar} alt="" />
                  </div>
                </div>
                <img src={Gambar} alt="" />
                <img src={Gambar} alt="" />
                <img src={Gambar} alt="" />
              </div>
              <div className="div2">
                {" "}
                <img src={Gambar} alt="" />
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="div7">
                {" "}
                <img src={Gambar} alt="" />
              </div>
              <div className="div8">
                {" "}
                <img src={Gambar} alt="" />
              </div>
              <div className="div9">
                {" "}
                <img src={Gambar} alt="" />
              </div>
              <div className="div10">
                {" "}
                <img src={Gambar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutKom>
  );
};

export default About;
