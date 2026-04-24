import {useState,useEffect } from "react"
import {NAV_LINKS} from "../../data/navlinks"
import Logo from "./Logo";

const Header =()=>{
    const [scrolled,setScrolled]       = useState(false);
    const [mobileMenu,setMobileMenu]   = useState(false);
   
      useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);
    return(
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled?"py-3":"py-5"}`}
        style={{background:scrolled?"rgba(12,1,1,.96)":"transparent",backdropFilter:scrolled?"blur(18px)":"none",borderBottom:scrolled?"1px solid rgba(220,38,38,.14)":"none"}}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo/>
            <span className="fd font-bold text-lg text-white tracking-wide">KYEM GENERAL SUPPLIES LIMITED</span>
            <span className="hidden sm:block text-red-600/50 text-xs fb font-light tracking-widest uppercase mt-0.5">& Supplies</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l=>(
              <a key={l.link} href={l.url} className="nav-lk fb text-sm text-white/55 hover:text-white transition-colors">{l.link}</a>
            ))}
          </div>
          <a href="#CONTACTUS" className="hidden md:block fb font-semibold text-sm text-white px-5 py-2 rounded-full btn-red">Get in touch</a>
          <button className="md:hidden text-white text-xl" onClick={()=>setMobileMenu(o=>!o)}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 p-4 space-y-3"
            style={{background:"rgba(12,1,1,.98)",borderTop:"1px solid rgba(220,38,38,.1)"}}>
            {NAV_LINKS.map(l=>(
              <a key={l.link} href={l.url} className="block fb text-white/55 hover:text-white py-2 transition-colors">{l.link}</a>
            ))}
          </div>
        )}
      </nav>
    )
}

export default Header