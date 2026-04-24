const RED      = "#DC2626";
const SectionHighlighter =({title,spinElement}:{title:string,spinElement:boolean})=>{

    return(
       <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{background:"rgba(220,38,38,.07)",border:"1px solid rgba(220,38,38,.18)"}}>
               { spinElement && <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:RED}}/>}
              <span className="fb text-red-500/65 text-xs tracking-widest uppercase">{title}</span>
            </div>
    )
}

export {SectionHighlighter}