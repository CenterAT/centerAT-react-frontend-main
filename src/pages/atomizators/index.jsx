import React from 'react'
import { Header } from "../../components/header/index"
import { Products } from '../../components/products/index'
import { AtomizatorsComponent } from '../../components/atomizatorsComponent'

export const Atomizators = () => {
  return (
    <>
    <Header />
      <AtomizatorsComponent />
      <Products />
    </>
  )
}
