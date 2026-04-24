import Logo from "./Logo";
const Footer =()=> {
    return(
          <footer className="py-12" style={{borderTop:"1px solid rgba(255,255,255,.045)"}}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo/>
            <span className="fd font-bold text-white">KYEM GENERAL SUPPLIES LIMITED.</span>
          </div>
          <p className="fb text-white/18 text-sm">© 2026 KYEM GENERAL SUPPLIES LIMITED. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy","Terms","Contact"].map(l=>(
              <a key={l} href="#" className="fb text-white/28 hover:text-red-400 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    )
}

export default Footer