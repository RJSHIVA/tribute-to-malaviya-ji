import React, { useState } from 'react';
import './App.css';
import malviyaImage from './assets/malaviya.jpg';
import { Transition } from '@headlessui/react';

const Header = () => (
  <header className="bg-purple-700 text-white p-4 text-center">
    <h1 className="text-3xl font-bold">Madan Mohan Malaviya Tribute</h1>
  </header>
);

const Footer = () => (
  <footer className="bg-purple-700 text-white p-4 text-center">
    <p>&copy; 2024 Rahul Choudhary. All rights reserved.</p>
  </footer>
);

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="max-w-5xl w-full mx-6 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={malviyaImage} alt="Madan Mohan Malviya" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Madan Mohan Malaviya</h1>
            <Transition
              as="div"
              show={show}
              appear={true}
              enter="transition-opacity duration-1000 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-cursive">
                Madan Mohan Malaviya (pronunciationⓘ) (25 December 1861 — 12 November 1946) was an Indian scholar, educational reformer and politician notable for his role in the Indian independence movement. He was president of the Indian National Congress two times and the founder of Akhil Bharat Hindu Mahasabha. He was addressed as Pandit, a title of respect.
              </p>
            </Transition>
            <Transition
              as="div"
              show={show}
              appear={true}
              enter="transition-opacity duration-1000 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-cursive">
                Malaviya strove to promote modern education among Indians and co-founded the Banaras Hindu University (BHU) at Varanasi in 1916, which was created under the 1915 BHU Act. It is the largest residential university in Asia and one of the largest in the world, with over 40,000 students across arts, commerce, sciences, engineering, linguistic, ritual, medicine, agriculture, performing arts, law, management, and technology disciplines from all over the world. He was the vice chancellor of the Banaras Hindu University from 1919 to 1938.
              </p>
            </Transition>
            <Transition
              as="div"
              show={show}
              appear={true}
              enter="transition-opacity duration-1000 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-cursive">
                Malaviya was one of the founders of The Bharat Scouts and Guides. He founded a highly influential English newspaper, The Leader, in 1919, published from Allahabad. He was also the Chairman of Hindustan Times from 1924 to 1946. His efforts resulted in the launch of its Hindi edition named Hindustan Dainik in 1936.
              </p>
            </Transition>
            <Transition
              as="div"
              show={show}
              appear={true}
              enter="transition-opacity duration-1000 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-cursive">
                Malaviya was posthumously awarded the Bharat Ratna, India's highest civilian distinction, on 24 December 2014, a day before what would have been his 153rd birthday.
              </p>
            </Transition>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
