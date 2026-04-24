import Footer from "./Footer"
import Header from "./Header";
import CallToAction from "./CallToAction"
import Services from "./Services";
import ChatBot from "./Chatbot";
import Hero from "./Hero"
import AboutUs from "./AboutUs";
import ContactUsPage from "./Contact";
import Stats from "./Stats"

const BG_BASE  = "#0c0101";


export default function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{background:BG_BASE,fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fd{font-family:'Barlow Condensed',sans-serif}
        .fb{font-family:'DM Sans',sans-serif}

        @keyframes floatP  {0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.04)}}
        @keyframes fadeU   {from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeR   {from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
        @keyframes shimR   {0%{background-position:200% center}100%{background-position:-200% center}}
        @keyframes cntUp   {from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

        .h-title{animation:fadeU .9s cubic-bezier(.16,1,.3,1)    forwards;opacity:0}
        .h-sub  {animation:fadeU .9s cubic-bezier(.16,1,.3,1) .2s forwards;opacity:0}
        .h-btns {animation:fadeU .9s cubic-bezier(.16,1,.3,1) .4s forwards;opacity:0}
        .h-truck{animation:fadeR 1s  cubic-bezier(.16,1,.3,1) .3s forwards;opacity:0}
        .st-item{animation:cntUp .7s ease forwards;opacity:0}

        .shimR{
          background:linear-gradient(90deg,#DC2626 0%,#FCA5A5 30%,#DC2626 60%,#F87171 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shimR 3s linear infinite;
        }
        .nav-lk{position:relative}
        .nav-lk::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:#DC2626;transition:width .3s ease}
        .nav-lk:hover::after{width:100%}

        .svc-card{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease}
        .svc-card:hover{transform:translateY(-6px);border-color:rgba(220,38,38,.48)!important;box-shadow:0 20px 60px rgba(220,38,38,.12)}

        .btn-red{background:#DC2626;transition:background .2s,box-shadow .2s,transform .2s}
        .btn-red:hover{background:#B91C1C;box-shadow:0 12px 36px rgba(220,38,38,.45);transform:translateY(-2px)}
        .btn-out{border:1px solid rgba(220,38,38,.32);color:#FCA5A5;transition:border-color .2s,color .2s}
        .btn-out:hover{border-color:rgba(220,38,38,.7);color:white}

        .dot-bg{background-image:radial-gradient(circle,rgba(220,38,38,.06) 1px,transparent 1px);background-size:44px 44px}

        @keyframes slideOutLeft  {from{transform:translateX(0);opacity:1}  to{transform:translateX(-100%);opacity:.3}}
        @keyframes slideOutRight {from{transform:translateX(0);opacity:1}  to{transform:translateX(100%);opacity:.3}}
        @keyframes slideInRight  {from{transform:translateX(100%);opacity:.3} to{transform:translateX(0);opacity:1}}
        @keyframes slideInLeft   {from{transform:translateX(-100%);opacity:.3} to{transform:translateX(0);opacity:1}}
        @keyframes captionIn     {from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)}}
        @keyframes progressBar   {from{width:0%} to{width:100%}}
      `}</style>

      {/* NAV */}
      <Header />

      {/* HERO */}
      <Hero/>
      {/* STATS */}
      <Stats/>
      {/* SERVICES */}
      <Services/>
      {/* ABOUT */}
      <AboutUs />
      {/* CTA */}
      <CallToAction/>
      <ContactUsPage/>
      {/* FOOTER */}
       <Footer/>
      <ChatBot/>
    </div>
  );
}