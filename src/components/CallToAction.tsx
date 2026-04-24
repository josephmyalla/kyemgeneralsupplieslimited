const CallToAction =()=>{
    return(
        <section className="py-20 relative overflow-hidden dot-bg"
        style={{background:`linear-gradient(135deg,rgba(220,38,38,.16) 0%,rgba(220,38,38,.03) 100%)`,borderTop:"1px solid rgba(220,38,38,.18)"}}>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="fd font-extrabold text-5xl md:text-6xl text-white mb-6">
            READY TO <span className="shimR">SHIP?</span>
          </h2>
          <p className="fb text-white/38 text-lg mb-10">
            Get a custom freight or supply quote in under 5 minutes. No commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="fb font-bold px-8 py-4 rounded-full text-white text-lg btn-red">Get Free Quote →</a>
            <a href="#" className="fb font-medium px-8 py-4 rounded-full btn-out">📞 Call Us Now</a>
          </div>
        </div>
      </section>
    )
}

export default CallToAction