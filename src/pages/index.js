import React from "react"

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




