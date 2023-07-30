export const ParticlesConfig = {
    particles: {
      number: {
        value: 592,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#202b33'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.25,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: true
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.6,
        direction: 'bottom',
        random: true,
        straight: true,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 100,
          rotateY: 200
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: false,
          mode: 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 170,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
            distance: 986,
            size: 74,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 150,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
      }
    },
    retina_detect: true
 };