import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NextIcon from "public/icons/nextjs.svg";
import TailwindIcon from "public/icons/tailwindcss.svg";
import NginxIcon from "public/icons/nginx.svg";
import SpringIcon from "public/icons/spring-logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Index() {
  const [stacks, setStacks] = useState([]);
  useEffect(() => {
    const func = async () => {
      const res = await fetch(`https://api.laum.me/front/stack`);
      const data = await res.json();
      console.log(data);
      setStacks(data);
    };
    func();
  }, []);
  return (
    <>
      <div
        id="card"
        className="w-[45rem] h-[25rem] shadow-2xl mx-auto relative mt-32 rounded-lg bg-white"
      >
        <div className="grid grid-cols-4 grid-flow-row">
          <div className="col-span-3 p-10">
            <span className="text-3xl">박정민&nbsp;</span>
            <span className="text-gray-600 text-lg">Park Jung Min</span>
            <hr className="pb-3"></hr>
            <div className="pl-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-base"
              ></FontAwesomeIcon>
              <span className="text-base">
                &nbsp;
                <Link
                  href="mailto:pjm5129@naver.com"
                  className="hover:underline"
                >
                  pjm5129@naver.com
                </Link>
                &nbsp;|&nbsp;
                <Link href="mailto:laum@laum.me" className="hover:underline">
                  laum@laum.me
                </Link>
              </span>
            </div>
            <div className="pl-4">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-base"
              ></FontAwesomeIcon>
              <span className="text-base">
                &nbsp;
                <Link
                  href="https://github.com/pjm03"
                  className="hover:underline"
                >
                  GitHub
                </Link>
              </span>
              &nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-base"
              ></FontAwesomeIcon>
              <span className="text-base">
                &nbsp;
                <Link
                  href="https://www.instagram.com/baby.__.jm/"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </span>
            </div>
            <hr className="my-3" />
            <div className="pl-3">
              <div className="text-sm">
                {/* {hello} */}
                {/* {hello} */}
                {stacks.map((stack) => {
                  return (
                    <img
                      className="inline"
                      src={`https://img.shields.io/badge/${stack.name}-${
                        stack.hexColor
                      }?style=for-the-badge&logo=${
                        stack.icon !== null ? stack.icon : stack.name
                      }&logoColor=white`}
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <img src="/profile.jpg"></img>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 text-gray-400 text-xs p-1 ">
          &copy; 2023. Park Jung Min. all rights reserved.
        </div>
        <div className="absolute bottom-0 left-3 text-gray-400 text-[0.5rem] p-1">
          이 페이지에 사용된 기술 스택 <br />
          <NextIcon className="h-2 inline" />
          <TailwindIcon className="ml-2 h-2 inline" />
          <NginxIcon className="ml-2 h-3 inline" />
          <SpringIcon className="ml-2 h-3 inline" />
        </div>
      </div>
      <div className="w-32 mt-10 text-sm mx-auto text-center">
        <Link
          href="https://github.com/pjm03/laum.me-front"
          className="hover:underline"
        >
          &nbsp;FE repo&nbsp;
        </Link>
        |
        <Link
          href="https://github.com/pjm03/laum.me-back"
          className="hover:underline"
        >
          &nbsp;BE repo&nbsp;
        </Link>
      </div>
    </>
  );
}
