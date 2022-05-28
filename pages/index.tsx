import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Field from "../components/Field";

const Home: NextPage = () => {
  return (
    <form method="post">
      <Field label="email" />
      <Field label="password" />
      <button>Login</button>
    </form>
  );
};

export default Home;
