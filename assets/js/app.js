// Config content (json): this configuration is applied to the particles
// Refer to https://github.com/VincentGarreau/particles.js/ to customize this file
// Background color and other properties are in main.css

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      // Avoid high values, they cause lags
      "value": 90, 
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": ["#00D491", "#FFFFFF"]
    },
    "shape": {
      "type": ["polygon"],
      "stroke": {
        "width": 12,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      // Not used since it's not in the "type" array above
      "image": { 
        "src": "images/sitelogo.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.4,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 4,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00D491",
      "opacity": 0.5,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        // Avoid "push": if the user repeatedly clicks, the frame rate starts dropping
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 250,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 300,
        "size": 8,
        "duration": 0.5,
        "opacity": 6,
        "speed": 6
      },
      "repulse": {
        "distance": 250
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
}

);