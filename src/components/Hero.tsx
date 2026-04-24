import {useState,useEffect} from "react"
import ImageSlider from "./ImageSlider";
import {SectionHighlighter} from "./ui/SectionHighLiter"
const BG_BASE  = "#0c0101";
const Hero =()=>{

const [heroVisible,setHeroVisible] = useState(false);

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn);
    setTimeout(()=>setHeroVisible(true),100);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

    return(
        <section className="relative min-h-screen flex items-center overflow-hidden dot-bg"
                style={{background:`radial-gradient(ellipse at 65% 45%,rgba(127,29,29,.32) 0%,transparent 65%),radial-gradient(ellipse at 20% 80%,rgba(220,38,38,.06) 0%,transparent 55%),${BG_BASE}`}}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full" style={{background:"radial-gradient(circle,rgba(220,38,38,.1) 0%,transparent 70%)"}}/>
                  <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full" style={{background:"radial-gradient(circle,rgba(127,29,29,.18) 0%,transparent 70%)"}}/>
                  {[
                    {w:70 ,h:70 ,top:"14%"  ,left:"7%"   ,dur:"6s",del:"0s"  },
                    {w:45 ,h:45 ,top:"28%"  ,right:"10%"  ,dur:"8s",del:"1s"  },
                    {w:100,h:100,bottom:"32%",left:"18%"  ,dur:"7s",del:"2s"  },
                    {w:36 ,h:36 ,top:"58%"  ,right:"22%"  ,dur:"5s",del:".5s" },
                    {w:55 ,h:55 ,top:"42%"  ,left:"48%"   ,dur:"9s",del:"3s"  },
                  ].map((p,i)=>(
                    <div key={i} className="absolute rounded-full blur-md pointer-events-none"
                      style={{width:p.w,height:p.h,top:p.top,left:p.left,right:p.right,bottom:p.bottom,
                        background:"rgba(220,38,38,.1)",animation:`floatP ${p.dur} ease-in-out ${p.del} infinite`}}/>
                  ))}
                </div>
        
                <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className={heroVisible?"":"invisible"}>
                    <div className="h-title">
                    <SectionHighlighter title="Delivering Excellence Nationwide" spinElement={true}/>
                      <h1 className="fd font-extrabold leading-none mb-4" style={{fontSize:"clamp(3rem,7vw,5.5rem)"}}>
                        MOVE GOODS.<br/>
                        <span className="shimR">MOVE FASTER.</span><br/>
                        MOVE SMARTER.
                      </h1>
                    </div>
                    <p className="h-sub fb text-white/45 text-lg leading-relaxed mb-8 max-w-md">
                      KYEM connects businesses with world-class freight, warehousing, and supply chain solutions — on time, every time.
                    </p>
                    <div className="h-btns flex flex-wrap gap-4">
                      <a href="#" className="fb font-semibold px-7 py-3.5 rounded-full text-white btn-red">Get in touch →</a>
                      <a href="#SERVICES" className="fb font-medium  px-7 py-3.5 rounded-full btn-out">View Services</a>
                    </div>
                  </div>
        
                  <div className={`h-truck w-full ${heroVisible?"":"invisible"}`}>
                    <div className="relative">
                      {/* Floating stat badges */}
                      <div className="absolute -top-5 -left-4 z-30 rounded-2xl px-3 py-2 backdrop-blur-sm"
                        style={{background:"rgba(12,1,1,.75)",border:"1px solid rgba(220,38,38,.35)",animation:"floatP 4s ease-in-out 1s infinite"}}>
                        <p className="fb text-red-400 text-xs font-semibold">✓ On-Time Delivery</p>
                        <p className="fd text-white text-xl font-bold">98.4%</p>
                      </div>
                      <div className="absolute -bottom-2 -right-4 z-30 rounded-2xl px-3 py-2 backdrop-blur-sm"
                        style={{background:"rgba(12,1,1,.75)",border:"1px solid rgba(220,38,38,.35)",animation:"floatP 5s ease-in-out .5s infinite"}}>
                        <p className="fb text-red-400 text-xs font-semibold">🚛 Active Fleet</p>
                        <p className="fd text-white text-xl font-bold">100+ Vehicles</p>
                      </div>
                      <ImageSlider/>
                    </div>
                  </div>
                </div>
        
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35">
                  <span className="fb text-white/35 text-xs tracking-widest uppercase">Scroll</span>
                  <div className="w-px h-8" style={{background:"linear-gradient(to bottom,rgba(220,38,38,.55),transparent)"}}/>
                </div>
              </section>
    )
}

export default Hero