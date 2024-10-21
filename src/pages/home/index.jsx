import React from 'react'
import { HeaderWhite } from "../../components/header-white/index"
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
          <HeaderWhite />
            <Hero />
            <About name='about'/>
            <Advantages />
            <Products />
            <Brief />
            <News />
            <Contacts name='contacts' />
        </>
  )
}
