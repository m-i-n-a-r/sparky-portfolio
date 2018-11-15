/* Config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": ["#00D491", "#CCFF33"]
    },
    "shape": {
      "type": ["triangle", "circle", "polygon"],
      "stroke": {
        "width": 12,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "images/logo.svg",
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
      "speed": 3,
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
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 300,
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
  "config_demo": {
    "hide_card": false,
    "background_color": "#000000",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);