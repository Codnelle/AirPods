
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
    const airpods = document.getElementById('airpods');
    
    if (airpods) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#airpods",  // Start animation when #airpods enters viewport
          start: "top top",     // Start animation precisely when top of #airpods reaches viewport top
          end: "+=220%",      // Adjust end to cover both animations and section-3
          scrub: true,          
                     
        }
      });

      tl.to("#airpods", {
        rotate: "22deg",
        x: 200,
        y: 800,
      })
      .to("#airpods", {
        rotate: "0deg",
        x: 0,
        y: 1600,
      })
      

    } 
    else {
      console.error("Element with ID 'airpods' not found");
    }






    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#side",  // Start animation when #airpods enters viewport
        start: "1%",     // Start animation precisely when top of #airpods reaches viewport top
        end: "+=120%",      // Adjust end to cover both animations and section-3
        scrub: true,          
                   
      }
    });

    tl2.to("#side", {
      rotate: "-25deg",
      x: "70%",
      y: 500,
    })

    tl2.to("#side", {

      x: "-4%",
      y: 1375,
    })

  });