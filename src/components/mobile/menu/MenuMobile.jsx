import React from 'react'

const MenuMobile = ({ mobileMenu, handleMobileMenu }) => {
  const style = {
    open: "w-full h-screen absolute top-0 left-0 bg-black/70 ml-0 duration-200 ease-in-out",
    close: "w-full h-screen absolute top-0 left-0 bg-black/70 ml-[-100%] duration-200 ease-in-out"
  }
  return (
    <nav className={mobileMenu ? style.open : style.close}>
        <div>
            <p>Oi</p>
        </div>
    </nav>
  )
}

export default MenuMobile;