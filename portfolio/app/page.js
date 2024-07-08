"use client";

import { BsFillMoonStarsFill } from 'react-icons/bs';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">DevelopedbyJ</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Joze-RESUME.pdf"
                  download={true}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Jozè Simao</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer and Designer</h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              I am a developer and designer with a passion for creating beautiful
              and functional user experiences. I have experience working with
              both front-end and back-end technologies, and I am always looking
              for new challenges to tackle.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        {/* Section 2 */}

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a range of services to help you bring your <span className="text-teal-500">ideas to life.</span>
              Whether you need a new website, a mobile app, or a custom software
              solution, I can help you <span className="text-teal-500">build it</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services including programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image className="mx-auto" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium dark:text-white">Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">
                I create beautiful and functional designs that are tailored to your needs.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium dark:text-white">Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">
                I create beautiful and functional designs that are tailored to your needs.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image className="mx-auto" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium dark:text-white">Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">
                I create beautiful and functional designs that are tailored to your needs.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
            </div>
          </div>
        </section>
        {/* SECTION 3 */}

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Check out some of my recent projects below. If you like what you see, feel free to get in touch. I am always looking for new opportunities to collaborate with other creatives.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ut impedit! Aliquam earum vel quae iusto facilis ratione fuga! Earum dignissimos inventore perspiciatis ipsum ut vero debitis reiciendis nisi neque.
              Beatae harum magni optio suscipit, similique inventore ea impedit nostrum earum maiores culpa necessitatibus vel. Molestias aut consectetur velit culpa, vero, sit maxime sapiente libero dolorum, necessitatibus aspernatur blanditiis impedit!
              Quos odio maiores quidem, sint aliquid accusamus aut ea id in eum esse a, similique totam nesciunt sit ipsum ut iure mollitia deserunt vel quos quas hic voluptatum. Numquam, omnis iste?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
