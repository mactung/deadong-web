import React from "react"
import MainLayout from "../layouts/Main"
import Banner from "../components/Banner"
import Products from "../components/Products"
import ServiceCards from "../components/Services"

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <ServiceCards />
      <Products />
    </MainLayout>
  )
}
