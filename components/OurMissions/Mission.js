import React, { Fragment } from "react";
import NewsItem from "../News/NewsItem";
import NewsLists from "../News/NewsLists";
import Link from "next/link";
const Mission = () => {
  return (
    <Fragment>
      <section id="mission" className="scroll-effect">
        <div className="section-container">
          <div className="container flex max-w-6xl flex-col md:flex-row  justify-between mx-auto space-x-0  px-2  md:px-14 py-0  md:mt-2 md:pt-0  ">
            <div className="flex-col p-0 md:p-2 h-full  w-full max-w-lg h-[100vh] md:h-auto">
              <div className="h-[40%]">
                <img
                  className=" select-none rounded-xl  w-full h-[100%]  shadow-xl bg-cover bg-gradient-to-tr bg-neutral-700 bg-gradient-to-br bg-slate-500 "
                  src="/images/mission-img.jpg"
                  alt="img"
                ></img>
              </div>
              <div className="flex flex-col space-y-5  mt-10 md:space-y-5 justify-center shadow-sm md:mt-2 md:py-5 ">
                <h1 className="font-bold tracking-tight text-3xl text-left">
                  OUR MISSION
                </h1>
                <p className="leading-6 text-2xs md:text-3xs ">
                  Proident tempor nisi{" "}
                  <span className="text-orange-300">
                    nostrud occaecat duis{" "}
                  </span>
                  pariatur laboris officia non minim nisi anim. Officia est quis
                  reprehenderit Aliqua adipisicing aliquip nulla officia minim
                  velit qui irure ut amet velit. Pariatur dolor Lorem ut nostrud
                  ipsum eiusmod minim velit. Occaecat mollit{" "}
                  <span className="underline underline-offset-1 text-gray-900">
                    eiusmod anim ipsum tempor proident do fugiat quis fugiat{" "}
                  </span>
                  in incididunt. Qui laborum proident sint ipsum elit
                  exercitation ex ut deserunt elit.
                </p>
                <p className="mt-2 text-gray-400">
                  qui exercitation. Magna tempor elit tempor cupidatat duis
                  ipsum. Officia eu consequat in Lorem est ea sunt mollit
                  exercitation ullamco mollit.
                </p>
              </div>
            </div>
            <NewsLists />

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Mission;
