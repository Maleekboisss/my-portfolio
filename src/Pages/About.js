import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { FaPowerOff } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import { motion } from 'framer-motion';
import maleek from "../assets/Images/maleek.png";
import vip from "../assets/Images/vip.png";





function About() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
    <Container>
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
      <Top>
        <button>
          <li>
            <Link to='/'><FaPowerOff className='btn' /></Link>
          </li>
        </button>
      </Top>
<Bottom>
<Leftbox>
  <div className= "Leftbox"> 
  <motion.h1     
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 0
        }}>Favorite: Hobbies</motion.h1>
  <motion.li          
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 1
        }}>Coding</motion.li>
  <motion.li
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 2
          }}>Fitness</motion.li>
  <motion.li
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 3
          }}>Baseball</motion.li>
  <motion.li
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 4
          }}>Shopping</motion.li>
  <motion.li
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 5
          }}>Learning</motion.li>
  <motion.li
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 5.5
          }}>Traveling</motion.li>
  </div>
</Leftbox>

<Box0>
<Box1>
  <motion.img
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 0
        }}
        src={maleek} className='photo' alt="Maleek" />
    <motion.h1          
     initial={{ y:0, scale: 0}}
     animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 1
        }}>
        Profile <img src={vip} /></motion.h1>
      <motion.h2         
          initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 2
        }}>
         Name:<br /><span>Maleek Boisseau</span></motion.h2>
        <motion.hr
                  initial={{ y:0, scale: 0}}
                  animate={{ y:0, scale: 1}}
             
             transition={{
                type: 'spring',
                bounce: 0,
                duration: 5,
                delay: 2
                }}
         />
          <motion.h3
                    initial={{ y:0, scale: 0}}
                    animate={{ y:0, scale: 1}}
               
               transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 5,
                  delay: 3
                  }}
          >Age: <span>21</span></motion.h3>
            <motion.hr           initial={{ y:0, scale: 0}}
          animate={{ y:0, scale: 1}}
     
     transition={{
        type: 'spring',
        bounce: 0,
        duration: 5,
        delay: 3
        }}/>
              <motion.h4
                        initial={{ y:0, scale: 0}}
                        animate={{ y:0, scale: 1}}
                   
                   transition={{
                      type: 'spring',
                      bounce: 0,
                      duration: 5,
                      delay: 4
                      }}
              >Birth State:<br /><span>New York</span></motion.h4>
                <motion.hr
                          initial={{ y:0, scale: 0}}
                          animate={{ y:0, scale: 1}}
                     
                     transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 5,
                        delay: 4
                        }}/>
                <motion.h5
                          initial={{ y:0, scale: 0}}
                          animate={{ y:0, scale: 1}}
                     
                     transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 5,
                        delay: 5
                        }}
                >Completed Apps:<br /><span>30 Apps</span></motion.h5>
              </Box1>
            <Box2>
          <style>
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Permanent+Marker&family=Press+Start+2P&display=swap');
      </style>  <motion.h1
                initial={{ y:0, scale: 0}}
                animate={{ y:0, scale: 1}}
           
           transition={{
              type: 'spring',
              bounce: 0,
              duration: 5,
              delay: 6
              }}>
                My name is Maleek Boisseau and I’m a Front End Developer located in Las Vegas, Nevada. I was born and raised in Manhattan, New York. I’m curently working as a freelance right now for the fun of it but i'm looking forward to work with a team that will accept my talents and my amazing personality. I’m very passionate about creating digital experiences and making my clients happy. I can bring many skills and a lot of experience in high-value development projects. I bring direct experience and expertise in languages like React.Js and Node.Js and SASS. I can also offer team leadership experience, I excel under pressure and have strong leadership skills like coaching and empathy. </motion.h1>
    </Box2>
  </Box0>
<Rightbox>
<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Permanent+Marker&family=Press+Start+2P&display=swap');
</style> 
  <div className= "Rightbox">
  <motion.h1                          
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
                     
                     transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 5,
                        delay: 6 }} >
    People say theres always something new to learn which i truly believe and that's why i'm very open to learn something new to add to my skill-set. Even tho I believe i'm very talented and very skilled in what i do, i believe i can always become better than who i was last week. It's all about motivation and dedication.
  </motion.h1>

  </div>
</Rightbox>

</Bottom>
</Container>
    </>
  )
}


export default About



const Container = Styled.div`
`

const Top = Styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: center;

button {
  z-index: 10000;
  border-radius: 1rem;
  width: 6vw;
  height: 7vh;
  transition: 0.5s;
  background-color: black;
  box-shadow: 0px 0px 20px white;
}

button:hover {
  width: 8vw;
  box-shadow: 0px 0px 40px red;
}

.btn {
  height: 4vh;
  width: 3vw;
  color: white
}
`


const Bottom = Styled.div`
margin-top: 3rem;
text-align: center;
display: flex;
justify-content: center;
flex-wrap: wrap;


`

const Box0 = Styled.div`
height: 31vw;
width: 39vw;
display: flex;
box-shadow: 0px 0px 30px white;
border-radius: 2.5rem;
padding 1.5rem;
backdrop-filter: blur(4px);


&:hover {
  transition: 0.5s;

  box-shadow: 0px 0px 30px red;
}
`


const Box1 = Styled.div`
height: 10vw;
width: 15vw;
margin-right: 3vw;
justify-items: center;
align-content: center;



.photo {
  height: 13vw;
  width: 13vw;
  margin-bottom: 1vw;
  margin-right: 9rem;
}

h1 {
  color: white;
  font-size: 2.3vw;
  margin-bottom: 1.5vw;
  letter-spacing: 0.2vw;

}

img {
  height: 2.7vw;
  width: 3.5vw;
  margin: -0.2rem;
}

h2 {
  color: white;
  font-size: 1.3vw;
  margin-bottom: 1vw;
}

h3 {
  color: white;
  font-size: 1.4vw;
  margin-bottom: 1vw;
}

h4 {
  color: white;
  font-size: 1.1vw;
  margin-bottom: 1vw;
}

h5 {
  color: white;
  font-size: 1.1vw;
  margin-bottom: 1vw;
}


span {
  color: pink;
}
`

const Leftbox = Styled.div`
.Leftbox {
  height: 31vw;
  width: 17vw;
  margin: 3rem;
  align-self: center;
  display: grid;
  flex-wrap: wrap;
  box-shadow: 0px 0px 30px white;
  border-radius: 2.5rem;
  backdrop-filter: blur(4px);
}

.Leftbox:hover {
    transition: 0.5s;
    box-shadow: 0px 0px 30px red;
  }

h1 {
  color: white;
  font-size: 1.5vw;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

li {
  color: pink;
  font-size: 1.3vw;
}
`

const Rightbox = Styled.div`
.Rightbox {
  height: 31vw;
  width: 17vw;
  margin: 3rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 30px white;
  border-radius: 2.5rem;
  backdrop-filter: blur(4px);
}

.Rightbox:hover {
    transition: 0.5s;
    box-shadow: 0px 0px 30px red;
  }

  h1 {
    color: white;
    padding: 1rem;
    align-self: center;
    font-size: 1.4vw;
    font-family: 'Amatic SC', cursive;  color: white;
  }
}
`


const Box2 = Styled.div`
width: 20vw;
font-size: 0.75vw;
font-family: 'Amatic SC', cursive;  color: white;
`


