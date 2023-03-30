import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NextIcon from "public/icons/nextjs.svg";
import TailwindIcon from "public/icons/tailwindcss.svg";
import NginxIcon from "public/icons/nginx.svg";
import JavaBadge from "public/icons/java.svg";
import SpringbootBadge from "public/icons/springboot.svg";
import JavascriptBadge from "public/icons/javascript.svg";
import ReactBadge from "public/icons/react.svg";
import NextBadge from "public/icons/nextjs-badge.svg";
import TailwindBadge from "public/icons/tailwindcss-badge.svg";
import PythonBadge from "public/icons/python.svg";
import CBadge from "public/icons/c.svg";
import MariaDBBadge from "public/icons/mariadb.svg";
import GitBadge from "public/icons/git.svg";
import GithubBadge from "public/icons/github.svg";
import LinuxBadge from "public/icons/linux.svg";
import IJIdeaBadge from "public/icons/ijidea.svg";
import VSCBadge from "public/icons/vsc.svg";
import NginxBadge from "public/icons/nginx-badge.svg";
import SoonBadge from "public/icons/soon.svg";
import Link from "next/link";
export default function Index() {
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
                <JavaBadge className="inline" />
                <SpringbootBadge className="inline" />
                <JavascriptBadge className="inline" />
                <ReactBadge className="inline" />
                <NextBadge className="inline" />
                <TailwindBadge className="inline" />
                <PythonBadge className="inline" />
                <MariaDBBadge className="inline" />
                <CBadge className="inline" />
                <GitBadge className="inline" />
                <GithubBadge className="inline" />
                <LinuxBadge className="inline" />
                <IJIdeaBadge className="inline" />
                <VSCBadge className="inline" />
                <NginxBadge className="inline" />
                <SoonBadge className="inline" />
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
        </div>
      </div>
      <div className="w-32 mt-10 text-sm mx-auto text-center hover:underline">
        <Link href="https://github.com/pjm03/laum.me-front">
          &nbsp;FE repo&nbsp;
        </Link>
        |
        <Link href="https://github.com/pjm03/laum.me-back">
          &nbsp;BE repo&nbsp;
        </Link>
      </div>
    </>
  );
}
