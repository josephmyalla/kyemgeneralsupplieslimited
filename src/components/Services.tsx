import { SERVICES } from "../../data/services"
import {SectionHighlighter} from "./ui/SectionHighLiter"
const BG_MID   = "#130202";
const Services =()=>{
    return(
        <section id="SERVICES" className="py-24 relative" style={{background:BG_MID}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
           <SectionHighlighter  title="What We Do" spinElement={false}/>
            <h2 className="fd font-extrabold text-5xl md:text-6xl text-white mb-4">
              OUR <span className="shimR">SERVICES</span>
            </h2>
            <p className="fb text-white/38 max-w-xl mx-auto text-lg">
              End-to-end supply chain and transportation solutions designed for businesses of every scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s,i)=>(
              <div key={i} className="svc-card rounded-2xl p-6 cursor-pointer"
                style={{background:`linear-gradient(135deg,${s.glow} 0%,rgba(255,255,255,.01) 100%)`,border:"1px solid rgba(255,255,255,.055)"}}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="fd font-bold text-xl text-white mb-2">{s.title}</h3>
                <p className="fb text-white/38 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-red-400 text-sm fb font-medium">
                 <a href="/#UNDERCONSTRUTION"><span>Learn more</span><span>→</span></a> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Services