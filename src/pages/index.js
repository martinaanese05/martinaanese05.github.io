import React from "react"

import { Helmet } from "react-helmet"
import headerImg from "../images/Header.webp"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import Nvidia from "../components/NVIDIA"
import Education from "../components/Education"
import Publications from "../components/Publications"

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="Martina Anese" />
    {/* Start downloading the big header photo right away */}
    <Helmet>
      <link rel="preload" as="image" href={headerImg} />
    </Helmet>
    <Header></Header>
    <About></About>
    <Nvidia></Nvidia>
    <Publications></Publications>
    <Education></Education>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage




