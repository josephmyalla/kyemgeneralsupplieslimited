
import {useState,useRef} from "react"
const RED      = "#DC2626";

import Logo from "./Logo";
export default function ChatBot() {
  const [open,setOpen]       = useState(false);
  const [input,setInput]     = useState("");
  const [loading,setLoading] = useState(false);
  const [messages,setMessages] = useState([
    {role:"assistant", content:"Hi! I'm the KYEM assistant. Ask me about our transportation services, construction products, pricing, or delivery options! 🚛"}
  ]);
  const bottomRef = useRef(null);

  
  async function send() {
    if (!input.trim()||loading) return;
    const userMsg = {role:"user", content:input.trim()};
    const next = [...messages, userMsg];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const res  = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1000,
          system:`You are a helpful assistant for Kyem General Supplies Limited., a professional transportation and general supplies company.
Help with: freight, last-mile delivery, warehousing, industrial supplies, customs, fleet. Be concise, friendly, professional (≤3 sentences unless asked for more).
Highlights: 12K+ monthly deliveries, 98.4% on-time, 20 destinations, 100+ vehicles.`,
          messages: next.map(m=>({role:m.role,content:m.content})),
        }),
      });
      const data = await res.json();
      setMessages(p=>[...p,{role:"assistant",content:data.content?.[0]?.text||"Sorry, try again."}]);
    } catch { setMessages(p=>[...p,{role:"assistant",content:"Something went wrong. Please try again!"}]); }
    setLoading(false);
  }

  return (
    <>
      <button onClick={()=>setOpen(o=>!o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-xl text-white transition-all duration-300 hover:scale-110"
        style={{background:RED, boxShadow:`0 0 32px rgba(220,38,38,0.55)`}}>
        {open?"✕":"💬"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
          style={{height:460, background:"linear-gradient(160deg,#1a0202,#0c0101)",
            border:"1px solid rgba(220,38,38,0.3)", boxShadow:"0 24px 60px rgba(0,0,0,0.8),0 0 40px rgba(220,38,38,0.08)"}}>
          {/* header */}
          <div className="px-4 py-3 flex items-center gap-3"
            style={{background:"rgba(220,38,38,0.1)",borderBottom:"1px solid rgba(220,38,38,0.18)"}}>
            <div className="w-20 h-10">
                <Logo/>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">KYEM GENERAL SUPPLIES LIMITED</p>
              <p className="text-red-400/60 text-xs">Powered by Company Knowldge</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
          </div>
          {/* messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{scrollbarWidth:"thin",scrollbarColor:"rgba(220,38,38,0.25) transparent"}}>
            {messages.map((m,i)=>(
              <div key={i} className={`flex ${m.role==="user"?"justify-end":"justify-start"}`}>
                <div className="max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed"
                  style={m.role==="user"
                    ?{background:RED,color:"white",fontWeight:500}
                    :{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.82)"}}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)"}}>
                  <span className="inline-flex gap-1">
                    {[0,150,300].map(d=>(
                      <span key={d} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{background:RED,animationDelay:`${d}ms`}}/>
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>
          {/* input */}
          <div className="p-3" style={{borderTop:"1px solid rgba(220,38,38,0.14)"}}>
            <div className="flex gap-2">
              <input className="flex-1 rounded-xl px-3 py-2 text-white text-sm outline-none transition-colors"
                style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(220,38,38,0.18)"}}
                placeholder="Ask anything…" value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&send()}
                onFocus={e=>e.target.style.borderColor="rgba(220,38,38,0.55)"}
                onBlur={e=>e.target.style.borderColor="rgba(220,38,38,0.18)"}/>
              <button onClick={send} disabled={loading||!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm transition-all disabled:opacity-30"
                style={{background:RED}}>↑</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}