import React from "react"
import MainLayout from "../layouts/Main"
import Banner from "../components/Banner"
import Products from "../components/Products"

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Products />
    </MainLayout>
  )
}
