import React, { useState } from "react";
import LayoutKom from "../pages/Layout";
import { motion, AnimatePresence } from "framer-motion";

const Test = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minima?",
      title: "Card 1",
    },
    {
      id: 2,
      subtitle: "Lorem ipsum dolor sit amet.",
      title: "Card 2",
    },
    {
      id: 3,
      subtitle: "Lorem ipsum dolor sit amet.",
      title: "Card 3",
    },
    {
      id: 4,
      subtitle: "Lorem ipsum dolor sit amet.",
      title: "Card 4",
    },
  ];

  return (
    <LayoutKom>
      <div className="pt-20 pb-20">
        <motion.div className="flex items-center justify-center pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 p-2 gap-4">
            {items.map((item) => (
              <motion.div
                className={`card bg-white bg-opacity-80 rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
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
                  <motion.h2 className="text-xl font-bold mb-2 text-black">
                    {item.title}
                  </motion.h2>
                  <motion.h5 className="text-sm font-bold mb-1 text-gray-700">
                    {item.subtitle}
                  </motion.h5>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
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
                            Close
                          </motion.button>
                          <motion.h2 className="text-xl font-bold mb-2 text-purple-600">
                            {item.title}
                          </motion.h2>
                          <motion.h5 className="text-sm font-bold mb-1 text-gray-700">
                            {item.subtitle}
                          </motion.h5>
                          <motion.p className="text-md text-gray-700 mb-4">
                            {item.description}
                          </motion.p>
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
    </LayoutKom>
  );
};

export default Test;
