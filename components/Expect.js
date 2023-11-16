import { useEffect } from "react";

export default function Expect() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".circle");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          reveals[i].classList.add("scale");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div
        id="explore"
        className="min-h-screen justify-center items-center flex flex-col mt-3 mb-24"
      >
        <div className="text heading pt-[100px]">
          <h1
            className=" text-center md:text-[4vw] text-[10vw]  expect-heading text text--blocks"
            data-scroll="out"
            data-splitting=""
          >
            What To Expect?
          </h1>
        </div>
        <div className="md:mt-24 text-black  md:ml-0 justify-center  mt-0 flex-col flex  space-x-0 md:space-x-[30vw]">
          <div className="flex circle circle1 w-[85vw] h-[85vw] md:w-[29vw] md:h-[29vw] rounded-full text-center items-center justify-center  flex-col">
            <h2 className="md:text-[2.2vw]  w-[80%]  text-[5vw] text-[#DF6A50] font-[500]">
              Networking Opportunities
            </h2>
            <h3 className="text-black mt-1 w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal ">
              Network with industry professionals, mentors, and fellow
              participants, leveraging valuable connections for future
              collaborations and career opportunities at our hackathon.
            </h3>
          </div>
          <div className="flex ml-0 md:ml-16 md:mb-32 lg:mb-0 lg:ml-0 mb-0 circle circle2 md:h-[29vw] rounded-full md:mt-[-15vh] text-center items-center justify-center w-[85vw] h-[85vw] md:w-[29vw] flex-col">
            <h2 className="md:text-[2.2vw] w-[80%] text-[6vw] text-center text-[#DF6A50] font-[500]">
              Project Showcase
            </h2>
            <h3 className="text-black mt-1 w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal  ">
              Be prepared to demonstrate your project to our judges through a
              video! Furthermore, you can view other team's project
              demonstrations after the hackathon ends.
            </h3>
          </div>
        </div>
        <div className=" flex-col  md:ml-0 flex  space-x-0 md:space-x-[30vw]">
          <div className="flex circle circle3 md:h-[29vw] rounded-full md:mt-[-25vh] text-center items-center justify-center w-[85vw] h-[85vw] md:w-[29vw] flex-col">
            <h2 className="md:text-[2.2vw] w-[80%] text-[6vw] text-[#DF6A50] font-[500]">
              Fascinating Prizes{" "}
            </h2>
            <h3 className="text-black mt-1 w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal  ">
              Compete for enticing cash and digital prizes as we reward the top
              projects, highlighting exceptional skills, innovation, and
              dedication at our hackathon.
            </h3>
          </div>
          <div className="flex circle circle4 md:h-[29vw] rounded-full md:mt-[-15vh] text-center items-center justify-center w-[85vw] h-[85vw] md:w-[29vw] flex-col">
            <h2 className="md:text-[2.2vw] w-[80%] text-[6vw] text-[#DF6A50] font-[500]">
              Engaging Workshops{" "}
            </h2>
            <h3 className="text-black mt-1 w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal ">
              Industry professionals, as well as our own team, will be hosting
              workshops throughout the hackathon to help you learn new skills
              and build your project.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
