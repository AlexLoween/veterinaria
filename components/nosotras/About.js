import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Banner from "@/components/Banner";
import Mandatos from "../comunidad/Mandatos";
import Herdaospain from "./Herdaospain";

export default function About() {
  return (
    <>
      <Herdaospain />
      <div className="flex items-center justify-center bg-white shadow-2xl">
        <Mandatos />
      </div>
    </>
  );
}
