import React from "react";
import BlurText from "../cool/BlurText";


const Hero = () => {
  return (
    <div>
      <div className="hero-section relative w-full h-[540px] mt-8">
        <div className="hero-content mt-40 absolute mx-auto right-0 left-0">
          <h1
            className="outfit text-white p-3 text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            <center>
              <span className="hidden md:block" data-aos="fade-up"  data-aos-duration="700">
                Own Property. Build Wealth. <br />
                Secure Your Future.
              </span>
              <span className="block md:hidden" data-aos="fade-up"  data-aos-duration="700">
                Own Property. <br />
                Build Wealth. <br /> Secure Your Future.
              </span>
            </center>
          </h1>
          <center>
            <p
              class="text-white p-3 text-md mt-4 mb-5 max-w-3xl mx-auto opacity-80"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              data-aos="fade-up"
              
              data-aos-duration="900"
            >
              Discover premium real estate investments that deliver long-term
              growth and security.
            </p>

            <div class="flex flex-col gap-6 w-55 h-15 max-w-sm mx-auto relative z-10" data-aos="fade-up"  data-aos-duration="700">
              <button class="group p-0 relative rounded-2xl backdrop-blur-xl border-2 border-green-500/30 bg-gradient-to-br from-green-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-green-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-green-400/60 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div class="relative z-10 flex items-center gap-4">
                  <div class="flex-1 text-left p-2">
                    
                    <p class="text-green-400 font-bold text-sm p-1 mx-2 group-hover:text-green-300 transition-colors duration-300 drop-shadow-sm">
                      <svg className="inline pr-2" width={25} height={25} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Send a Message
                    </p>
                  </div>
                  <div class="opacity-40 p-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      class="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Hero;
