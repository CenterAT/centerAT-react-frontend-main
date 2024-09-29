import React from 'react'
import { Hero } from "../../components/hero";
import { About } from "../../components/about";
import { Advantages } from "../../components/advantages";
import { Products } from "../../components/products";
import { News } from "../../components/news";
import { Brief } from "../../components/brief";
import { Contacts } from "../../components/contacts/index";

export const Home = () => {
  return (
        <>
            <Hero />
            <About />
            <Advantages />
            <Products />
            <Brief />
            <News />
            <Contacts />
        </>
  )
}
