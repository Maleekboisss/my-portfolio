import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { IoLogoLinkedin } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import { motion } from 'framer-motion';
import about from "../assets/Images/about.png";
import resume from "../assets/Images/resume.png";
import brain from "../assets/Images/brain.png";
import projects from "../assets/Images/projects.png";





function Home() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (


    <>
    <Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
   fpsLimit: 60,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70
        },
        zIndex: {
          value: 5000
        }
      },
      z7500: {
        number: {
          value: 30
        },
        zIndex: {
          value: 75
        }
      },
      z2500: {
        number: {
          value: 50
        },
        zIndex: {
          value: 25
        }
      },
      z1000: {
        number: {
          value: 40
        },
        zIndex: {
          value: 10
        }
      }
    },
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#fff",
      animation: {
        enable: false,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 3
    },
    links: {
      enable: false,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      angle: {
        value: 10,
        offset: 0
      },
      enable: true,
      speed: 6,
      direction: "right",
      random: false,
      straight: true,
      outModes: {
        default: "out"
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4,
        groups: ["z5000", "z7500", "z2500", "z1000"]
      },
      remove: {
        quantity: 2
      }
    }
  },
  detectRetina: true,
  background: {
    color: "",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
  },
  emitters: {
    position: {
      y: 55,
      x: -30
    },
    rate: {
      delay: 3,
      quantity: 1
    },
    size: {
      width: 0,
      height: 0
    },
    particles: {
      shape: {
        type: "images",
        options: {
          images: [
            {
              src: "https://particles.js.org/images/amongus_blue.png",
              width: 205,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_cyan.png",
              width: 207,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_green.png",
              width: 204,
              height: 266
            },
            {
              src: "https://particles.js.org/images/amongus_lime.png",
              width: 206,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_orange.png",
              width: 205,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_pink.png",
              width: 205,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_red.png",
              width: 204,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_white.png",
              width: 205,
              height: 267
            }
          ]
        }
      },
      size: {
        value: 40
      },
      move: {
        speed: 15,
        outModes: {
          default: "destroy",
          left: "none"
        },
        straight: true
      },
      zIndex: {
        value: 0
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 10,
          sync: true
        }
      }
    }
  }}} />

     <Container>
      <SocialLinks>
        <Line></Line>
          <motion.a  
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 2
        }} href="https://www.linkedin.com/in/maleek-boisseau-5b9761233/"><IoLogoLinkedin className='link' /></motion.a>
          <motion.a  
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 2
        }} href="https://github.com/Maleekboisss"><FaGithub className='git' /></motion.a>
        <motion.a  
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 2
        }} href="https://my.indeed.com/resume/editor"><img src={resume} /></motion.a>
      </SocialLinks>
      <Top>
        <motion.button
        initial={{ y:-140 }}
        animate={{ y:0 }}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 2
        }}>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
              </style>
              <li>
            <Link className='color' to='/about'><h1>About. <img src={about} /></h1></Link>
          </li>
        </motion.button>
      </Top>

      <Title>
        <motion.h1
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0.3,
         duration: 5,
         delay: 1
         }}> Hello, I'm <span> Maleek Boisseau</span></motion.h1>
          <motion.h2
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0.3,
           duration: 5,
           delay: 1
           }}>( <span>React</span> ) Front End Developer</motion.h2>
          <motion.h3
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0.3,
          duration: 5,
          delay: 1
          }}>"Passionate about coding and Designing..."</motion.h3>
        <motion.h4
        initial={{ y:0, scale: 0 }}
        animate={{ y:0, scale: 1.5}}
     
     transition={{
        type: 'spring',
        bounce: 0.3,
        duration: 5,
        delay: 1
        }}>#SelfTaught</motion.h4>
      </Title>

      <Bottom>
        <motion.button
        initial={{ y:140 }}
        animate={{ y:0 }}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 2
        }}>
          <li>
            <Link className='color' to='/skills'><h1>Skills. <img src={brain} /></h1></Link>
              </li>
                </motion.button>
                  <motion.button
                  initial={{ y:140 }}
                  animate={{ y:0 }}
               
               transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 5,
                  delay: 2
                  }}>
                <li>
              <Link className='color' to='/projects'><h1>Projects. <img src={projects} /></h1></Link>
          </li>
        </motion.button>
      </Bottom>
     </Container>
    </>
  )
}
export default Home

const Container = Styled.div`
`

const Top = Styled.div`
      text-align: center;
      z-index: 10000;
      display: flex;
      justify-content: center;

  button {
      z-index: 10000;
      margin: 3rem;
      list-style: none;
      text-decoration: none;
      background-color: black;
      box-shadow: 0px 0px 20px white;
      font-family: 'Permanent Marker', cursive;
      height: 5vh;
      width: 15vw;
      font-size: 0.86vw;
      border-radius: 3rem;
      transition: 0.5s;

}

  img {
      height: 1.7vw;
}

  button:hover {
      box-shadow: 0px 0px 40px red;
      width: 22vw;
}

.color {
      text-decoration: none;
      color: black;
}

.color:hover {
      color: red;
}

h1 {
      color: white;
}

h1:hover {
      color: pink;
}
`

const Title = Styled.div`
      text-align: center;
      margin: 6rem;
      margin-top: 3rem;
      margin-bottom: 14rem;
      color: white;
      text-shadow: 0px 0px 10px white;
      font-family: 'Permanent Marker', cursive;

  h1{
      font-size: 1.8vw;
      letter-spacing: 2px;
}

  h2{
      font-size: 1.7vw;
      letter-spacing: 2px;

  }

  h3{
    font-size: 1.1vw;
    letter-spacing: 2px;
  }

  h4{
    margin-top: 2rem;
    font-size: 1.5vw;
    letter-spacing: 2px;

  }

  span{
    color:red;
    font-size: 3.3vw;
  }
`

const SocialLinks = Styled.div`
    display: grid;
    position: absolute;
    margin: 1rem;
    justify-items: center;

  a{
    font-size: 2rem;
    color: red;
  }

  .link{
    font-size: 3.5vw;
    color: royalblue;
    margin: 0.4rem;
    transition: 2s;
  }

.link:hover {
    color: white;
    margin-bottom: 2rem;
    font-size: 6vw;
    transition: 2s;
    animation: spin infinite 1s;
}

  .git{
    color: blueviolet;
    transition: 2s;
    font-size: 3vw;
  }

  .git:hover {
    color: white;
    transition: 2s;
    margin-bottom: 2rem;
    font-size: 6vw;
    animation: spin infinite 1s;
  }

  .resume{
    transition: 2s;
    font-size: 3vw;
  }

  .resume:hover {
    transition: 2s;
    margin-top: 2rem;
    font-size: 6vw;
    animation: spin infinite 1s;
  }

  img {
    transition: 2s;
    height 3.5vw;
    margin: 0.4rem;
  }

  img:hover {
    margin-top: 2rem;
    height 5vw;
    transition: 2s;
    animation: spin infinite 1s;
  }

  @keyframes spin {
    from { transform: rotate(-360deg) 
    }
      to { transform: rotate(360deg)
       }
  }
`

const Line = Styled.div`
    height: 25vh;
    width: 8px;
    background-color: white;
    border-radius: 2rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 20px white;
`

const Bottom = Styled.div`
    text-align: center;
    justify-content: space-between;
    display: flex;
    margin: 5rem;
    padding: 1rem;

  .icons {
    color: blue;
  }

button {
    z-index: 1000;
    margin-top: 1rem;
    list-style: none;
    text-decoration: none;
    background-color: black;
    box-shadow: 0px 0px 20px white;
    font-family: 'Permanent Marker', cursive;
    height: 5vh;
    width: 15vw;
    transition:0.5s;
    font-size: 0.86vw;
    border-radius: 3rem;
}

button:hover {
    box-shadow: 0px 0px 40px red;
    width: 20vw;
}

.color {
    text-decoration: none;
    color: black;
}

h1 {
    color: white;
}

h1:hover {
    color: pink;
}

img {
    height: 1.7vw;
}
`