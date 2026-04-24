import {STATS} from "../../data/stats"
const RED      = "#DC2626";
const Stats =()=>{
    return(
           <section className="py-12"
        style={{background:"rgba(220,38,38,.04)",borderTop:"1px solid rgba(220,38,38,.11)",borderBottom:"1px solid rgba(220,38,38,.11)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s,i)=>(
              <div key={i} className="st-item text-center" style={{animationDelay:`${i*.1}s`}}>
                <p className="fd font-extrabold text-4xl md:text-5xl" style={{color:RED}}>{s.value}</p>
                <p className="fb text-white/38 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Stats