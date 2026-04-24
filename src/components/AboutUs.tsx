import { SectionHighlighter } from "./ui/SectionHighLiter";
const BG_BASE  = "#0c0101";

const AboutUs =()=>{
    return(
   <section className="py-24 relative overflow-hidden" id="ABOUTUS"
        style={{background:`linear-gradient(135deg,rgba(127,29,29,.22) 0%,${BG_BASE} 100%)`,borderTop:"1px solid rgba(220,38,38,.11)"}}>
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          style={{background:"radial-gradient(ellipse at right center,rgba(220,38,38,.055) 0%,transparent 70%)"}}/>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
           <SectionHighlighter title="About us" spinElement={true}/>
            <h2 className="fd font-extrabold text-5xl text-white mb-6 leading-none">
              BUILT ON<br/><span className="shimR">RELIABILITY</span>
            </h2>
            <p className="fb text-white/45 text-lg leading-relaxed mb-5">
              Kyem General Supplies Limited has been the trusted backbone of Tanzania's logistics ecosystem.
              From urban last-mile delivery to international freight, we move what matters — precisely and safely.
            </p>
            <p className="fb text-white/28 leading-relaxed">
              Our vertically integrated model means one partner for freight, supplies, and warehousing — saving you time, cost, and complexity.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              {[{c:"#DC2626",l:"ISO 9001:2015 Certified"},{c:"#22c55e",l:"24/7 Operations"},{c:"#38bdf8",l:"GPS Tracked Fleet"}].map((b,i)=>(
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{background:b.c}}/>
                  <span className="fb text-white/55 text-sm">{b.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {icon:"🌍",title:"East Africa Coverage",val:"5 cities"},
              {icon:"⚡",title:"Express Options",     val:"Same-day"},
              {icon:"🔒",title:"Cargo Insurance",     val:"Full coverage"},
              {icon:"📞",title:"Dedicated Support",   val:"24 / 7"},
            ].map((item,i)=>(
              <div key={i} className="rounded-2xl p-5"
                style={{background:"rgba(255,255,255,.018)",border:"1px solid rgba(220,38,38,.11)"}}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="fb text-white/28 text-xs mb-1">{item.title}</p>
                <p className="fd font-bold text-white text-xl">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default AboutUs