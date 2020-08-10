import React from "react"
import Navbar from "../components/Navbar"
export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}
