import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { FaPowerOff } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import { motion } from 'framer-motion';
import netflix from "../assets/Images/netflix.png";
import nftsmarketplace from "../assets/Images/nfts-marketplace.png";
import squidgames from "../assets/Images/squid-games.png";
import fashionstudio from "../assets/Images/Fashion-studio.png";
import cadillac from "../assets/Images/Cadillac.png";
import sneakerworld from "../assets/Images/sneaker.png";
import agency from "../assets/Images/agency.png";
import hulu from "../assets/Images/hulu.png";
import facebook from "../assets/Images/facebook.png";
import html from "../assets/Images/html.png";
import css from "../assets/Images/css.png";
import js from "../assets/Images/js.png";
import react from "../assets/Images/react.png";
import sass from "../assets/Images/sass.png";
import nodejs from "../assets/Images/nodejs.png";
import typescript from "../assets/Images/typescript.png";
import figma from "../assets/Images/figma.png";





function Projects() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
    <Wrap>
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
                images: []    
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
     <Top>
        <button>
          <li>
            <Link to='/'><FaPowerOff className='btn' /></Link>
          </li>
        </button>
      </Top>
<TopContainer>
  <Netflixbox>
    <motion.div            
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0.5,
         duration: 10,
         delay: 0
       }} className="container">
  <motion.h2
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 4,
         delay: 0
         }}>Netflix</motion.h2>
  <Boxy1>
  <motion.a href="https://maleekboisss.github.io/Maleekcode-netflix/"><img src={netflix} /></motion.a> 
  </Boxy1>
    <motion.h1
     initial={{ y:0, scale: 0}}
     animate={{ y:0, scale: 1}}

transition={{
   type: 'spring',
   bounce: 0,
   duration: 4,
   delay: 0
   }}> Tools:</motion.h1>
    <p><img src={react} className='pic' /><img src={nodejs} className='pic' /><img src={typescript} className='pic' /><img src={css} className='pic' /><img src={figma} className='pic' /></p>
    </motion.div>
  </Netflixbox>

  <Squidgamebox>
  <motion.div 
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
          type: 'spring',
          bounce: 0.5,
          duration: 10,
          delay: 0
            }} className="container">
  <motion.h2
   initial={{ y:0, scale: 0}}
   animate={{ y:0, scale: 1}}

transition={{
 type: 'spring',
 bounce: 0,
 duration: 4,
 delay: 0
 }}>Squid-game</motion.h2>
  <Boxy2>
  <a href="https://maleekboisss.github.io/squid-games/"><img src={squidgames} /></a>
  </Boxy2>
    <motion.h1
     initial={{ y:0, scale: 0}}
     animate={{ y:0, scale: 1}}

transition={{
   type: 'spring',
   bounce: 0,
   duration: 4,
   delay: 0
   }}> Tools:</motion.h1>
    <p><img src={react} className='pic' /><img src={nodejs} className='pic' /><img src={sass} className='pic' /><img src={figma} className='pic' /></p>
    </motion.div>
  </Squidgamebox>

  <Nftmarketbox>
  <motion.div            
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
        }} className="container">
  <motion.h2
   initial={{ y:0, scale: 0}}
   animate={{ y:0, scale: 1}}

transition={{
 type: 'spring',
 bounce: 0,
 duration: 4,
 delay: 0
 }}>NFT Marketplace</motion.h2>
  <Boxy3>
  <a href="https://maleekboisss.github.io/nfts-marketplace/"><img src={nftsmarketplace} /></a>
  </Boxy3>
    <motion.h1
     initial={{ y:0, scale: 0}}
     animate={{ y:0, scale: 1}}

transition={{
   type: 'spring',
   bounce: 0,
   duration: 4,
   delay: 0
   }}> Tools:</motion.h1>
    <p><img src={react} className='pic' /><img src={nodejs} className='pic' /><img src={css} className='pic' /><img src={figma} className='pic' /></p>
    </motion.div>
  </Nftmarketbox>

  <Fashionstudiobox>
  <motion.div            
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
        }} className="container">
  <motion.h2
   initial={{ y:0, scale: 0}}
   animate={{ y:0, scale: 1}}

transition={{
 type: 'spring',
 bounce: 0,
 duration: 4,
 delay: 0
 }}>Fashion Studio</motion.h2>
  <Boxy4>
  <a href="https://maleekboisss.github.io/fashion-studio/"><img src={fashionstudio} /></a>
  </Boxy4>
    <motion.h1
     initial={{ y:0, scale: 0}}
     animate={{ y:0, scale: 1}}

transition={{
   type: 'spring',
   bounce: 0,
   duration: 4,
   delay: 0
   }}> Tools:</motion.h1>
    <p><img src={react} className='pic' /><img src={nodejs} className='pic' /><img src={typescript} className='pic' /><img src={figma} className='pic' /></p>
    </motion.div>
  </Fashionstudiobox>
</TopContainer>
<hr></hr>
    <BottomContainer>

        <CadillacBox>
          <motion.div            
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
        }} className="container">
        <motion.h2
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}>Cadillac</motion.h2>
          <Pro1>
          <a href="https://maleekboisss.github.io/Maleekcode-cadillac/"><img src={cadillac} /></a> 
          </Pro1>
          <motion.h1
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 4,
         delay: 0
         }}> Tools:</motion.h1>
          <p><img src={html} className='pic' /><img src={css} className='pic' /><img src={js} className='pic' /></p>
          </motion.div>
        </CadillacBox>

        <SneakerworldBox>
        <motion.div            
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
        }} className="container">
        <motion.h2
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}>SneakerWorld</motion.h2>
           <Pro2>
          <a href="https://maleekboisss.github.io/Maleekcode-sneakerworld/"><img src={sneakerworld} /></a> 
          </Pro2>
          <motion.h1
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 4,
         delay: 0
         }}> Tools:</motion.h1>
          <p><img src={html} className='pic' /><img src={css} className='pic' /><img src={js} className='pic' /></p>
        </motion.div>
        </SneakerworldBox>

        <AgencyBox>
          <motion.div           
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
        }} className="container">
        <motion.h2
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}>Agency</motion.h2>
        <Pro3>
        <a href="https://maleekboisss.github.io/Maleekcode-companycoders/"><img src={agency} /></a> 
        </Pro3>
        <motion.h1
        
        initial={{ y:0, scale: 0}}
        animate={{ y:0, scale: 1}}
   
   transition={{
      type: 'spring',
      bounce: 0,
      duration: 4,
      delay: 0
      }}> Tools:</motion.h1>
          <p><img src={html} className='pic' /><img src={css} className='pic' /><img src={js} className='pic' /></p>
        </motion.div>
        </AgencyBox>

        <HuluBox>
          <motion.div className="container"         
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
        }}>
        <motion.h2
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}>Hulu</motion.h2>
        <Pro4>
        <a href="https://maleekboisss.github.io/Maleekcode-hulu/"><img src={hulu} /></a> 
        </Pro4>
        <motion.h1
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}> Tools:</motion.h1>
          <p><img src={html} className='pic' /><img src={css} className='pic' /><img src={js} className='pic' /></p>
        </motion.div>
        </HuluBox>

        <FacebookBox>
          <motion.div            
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
        type: 'spring',
        bounce: 0.5,
        duration: 10,
        delay: 0
         }}>
        <motion.h2
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}>Facebook</motion.h2>
        <Pro5>
        <a href="https://maleekboisss.github.io/Maleelcode-facebook/"><img src={facebook} /></a> 
        </Pro5>
        <motion.h1
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 4,
       delay: 0
       }}> Tools:</motion.h1>
          <p><img src={html} className='pic' /><img src={css} className='pic' /><img src={js} className='pic' /></p>
        </motion.div>
        </FacebookBox>

    </BottomContainer>
      </Container>
    </Wrap>
    </>
  )
}

export default Projects

const Wrap = Styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(0px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`


const Container = Styled.div`

`

const Top = Styled.div`

  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(px);


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
  box-shadow: 0px 0px 40px yellow;
}

.btn {
  height: 4vh;
  width: 3vw;
  color: white;
}
`

const TopContainer = Styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  backdrop-filter: blur(4px);
`

const Boxy1 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 8.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`


const Netflixbox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 15vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.5vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 2vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
]`

const Boxy2 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 8.5vw;
  box-shadow: 0px 0px 20px white;
}


&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`


const Squidgamebox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 15vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.5vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 2vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`

const Boxy3 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 8.5vw;
  box-shadow: 0px 0px 20px white;
}


&:hover {
  box-shadow: 0px 0px 20px yellow;
}


`


const Nftmarketbox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 15vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.5vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 2vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
  `

const Boxy4 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 8.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}

`

const Fashionstudiobox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 15vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.5vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 2vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`


const BottomContainer = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
backdrop-filter: blur(4px);
`

const Text = Styled.div`
backdrop-filter: blur(10px);



h1 {
  text-align: center;
  font-size: 2.3vw;
  color: white;
  margin: 1vw;
}
`
const CadillacBox = Styled.div`
margin: 1.5vw;


p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 10vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.2vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 1.7vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`

const Pro1 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 5.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`

const SneakerworldBox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 10vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.2vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 1.7vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`
const Pro2 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 5.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`

const AgencyBox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 10vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.2vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 1.7vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`
const Pro3 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 5.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`

const HuluBox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 10vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.2vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 1.7vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`
const Pro4 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 5.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`

const FacebookBox = Styled.div`
margin: 1.5vw;

p {
margin-top: 0.5vw;
background-color: black;
border-radius: 3rem;
height: 2.9vw;
width: 10vw;
text-align: center;
box-shadow: 0px 0px 20px white;
}

.pic {
  height 2vw;
  padding: 0.5vw;
  
}

p:hover {
  box-shadow: 0px 0px 20px yellow;
}

  h1 {
    margin-top: 1vw;
    color: white;
    font-size: 1.2vw;
    text-align: center;
  }

  h2 {
    margin-bottom: 1vw;
    color: white;
    font-size: 1.7vw;
    text-align: center;
  }

  span {
    color: yellow;
  }
`
const Pro5 = Styled.div`
box-shadow: 0px 0px 20px white;

img {
  height: 5.5vw;
  box-shadow: 0px 0px 20px white;
}

&:hover {
  box-shadow: 0px 0px 20px yellow;
}
`










