import React from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import { motion } from 'framer-motion';
import website from "../assets/Images/website.png";
import icons from "../assets/Images/icons.png";
import laptop from "../assets/Images/laptop.png";






function Skills() {
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
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              sides: 5
            },
            image: {
              src: "https://cdn.matteobruni.it/images/particles/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: false,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 10,
            random: { enable: true, minimumValue: 5 },
            animation: {
              enable: false,
              speed: 40,
              minimumValue: 5,
              sync: false
            }
          },
          lineLinked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            collisions: true,
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
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
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 10
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        detectRetina: true,
        background: {
          color: "",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }}} />


    <Container>
      <Top>
      <button>
          <li>
            <Link to='/'><FaPowerOff className='btn' /></Link>
          </li>
        </button>
      </Top>


<ContainerBox>
  <Box1>
    <motion.h1
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 0
           }} >
    <img src={website} />  Web Designer
    </motion.h1>
    <motion.p
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 0
           }} >
    I love to create design which speaks, Keep it clean, minimal and simple.
    </motion.p>
    <motion.h2
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 1
           }} >
    I LIKE TO DESIGN
    </motion.h2>
    <motion.li
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 1
           }} >Web Design</motion.li>
    <motion.li
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 1
           }} >Mobile Apps</motion.li>

  <motion.h3
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 5,
         delay: 2
         }} >TOOLS</motion.h3>
  <motion.li
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 5,
         delay: 2
         }} >Figma ( wireframing )</motion.li>
  <motion.li
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 5,
         delay: 2
         }} > Adobe Photoshop</motion.li>
  <motion.li
           initial={{ y:0, scale: 0}}
           animate={{ y:0, scale: 1}}
      
      transition={{
         type: 'spring',
         bounce: 0,
         duration: 5,
         delay: 2
         }} >Adobe illustrator</motion.li>


  </Box1>

<Boxmid>
<img src={icons} />
  <Bottombox>
<motion.h1
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 2
          }}>React components</motion.h1>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 2.5
          }}>tsparticles</motion.p>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 3
          }}>styled-components</motion.p>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 3.5
          }}>react-router-dom</motion.p>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 4.0
          }}>react-icons</motion.p>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 4.5
          }}>gh-pages</motion.p>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 5.5
          }}>framer-motion</motion.p>
<motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 6.0
          }}>react-bootsrap</motion.p>
  </Bottombox>
</Boxmid>

  <Box2>
    <motion.h1
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 0
           }} >
    <img src={laptop} /> Frontend Developer
    </motion.h1>
    <motion.p
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 0
           }} >
    I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
    </motion.p>
    <motion.h2
             initial={{ y:0, scale: 0}}
             animate={{ y:0, scale: 1}}
        
        transition={{
           type: 'spring',
           bounce: 0,
           duration: 5,
           delay: 1
           }} >
    SKILLS
   </motion.h2>
   <motion.p
            initial={{ y:0, scale: 0}}
            animate={{ y:0, scale: 1}}
       
       transition={{
          type: 'spring',
          bounce: 0,
          duration: 5,
          delay: 1
          }} >HTML5, CSS3, JS, React, Redux, Sass, Bootstrap, Tailwind, Firebase, APIs etc.</motion.p>
<motion.h3
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 5,
       delay: 2
       }} >TOOLS</motion.h3>
<motion.p
         initial={{ y:0, scale: 0}}
         animate={{ y:0, scale: 1}}
    
    transition={{
       type: 'spring',
       bounce: 0,
       duration: 5,
       delay: 2
       }} >VScode, Github, <br /> Codepen etc.</motion.p>
  </Box2>
</ContainerBox>
</Container>
    
    </>
  )
}

export default Skills


const Container = Styled.div`
backdrop-filter: blur(4px);

`

const Top = Styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
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
  box-shadow: 0px 0px 30px white;
}

button:hover {
  width: 8vw;
  box-shadow: 0px 0px 40px blue;
}

.btn {
  height: 4vh;
  width: 3vw;
  color: WHITE;
}
`

const ContainerBox = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  backdrop-filter: blur(4px);
  `

const Box1 = Styled.div`
  height: 32vw;
  width: 25vw;
  padding: 1rem;
  transition: 0.5s;
  border-radius: 2rem;
  margin-bottom: 5rem;
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 30px blue;

  &:hover {
    box-shadow: 0px 0px 30px white;
  }

  h1 {
    font-size: 2.3vw;
    text-align: center;
    margin-bottom: 1vw;
    letter-spacing: 0.2vw;
    color: white;
  }

  p {
    font-size: 1.5vw;
    text-align: center;
    margin-bottom: 4vw;
    color: pink;

  }

  h2 {
    text-align: center;
    font-size: 1.5vw;
    margin-bottom: 1vw;
    letter-spacing: 0.1vw;
    color: white;
  }

  li {
    text-align: center;
    font-size: 1.5vw;
    color: pink;
  }

  h3 {
    text-align: center;
    font-size: 1.5vw;
    margin-bottom: 1vw;
    margin-top: 4vw;
    letter-spacing: 0.3vw;
    color: white;
  }

  img {
    height: 2.7vw;
  }
`

const Box2 = Styled.div`
height: 32vw;
width: 25vw;
padding: 1rem;
transition: 0.5s;
border-radius: 2rem;
margin-bottom: 5rem;
backdrop-filter: blur(4px);
box-shadow: 0px 0px 30px blue;

&:hover {
  box-shadow: 0px 0px 30px white;
}


h1 {
  font-size: 2vw;
  text-align: center;
  margin-bottom: 1vw;
  letter-spacing: 0.2vw;
  color: white;
}

p {
  font-size: 1.4vw;
  text-align: center;
  margin-bottom: 3.5vw;
  letter-spacing: 0.1vw;
  color: pink;

}

h2 {
  text-align: center;
  font-size: 1.7vw;
  margin-bottom: 1.5vw;
  letter-spacing: 0.3vw;
  color: white;
}


h3 {
  text-align: center;
  font-size: 1.5vw;
  margin-bottom: 1.5vw;
  letter-spacing: 0.3vw;
  color: white;
}

img {
  height: 2.5vw;
}

`

const Boxmid = Styled.div`

img {
  height: 18vw;
  width: 20vw;
  margin-right: 6vw;
  margin-left: 6vw;
  margin-bottom: 3vw;
  animation: spin 30s linear infinite;

}

@keyframes spin {
  from { transform:rotate(0deg); }
  
  to { transform:rotate(360deg); }
}
`

const Bottombox = Styled.div`
height: 15vw;
width: 17vw;
color: white;
padding: 1rem;
transition: 0.5s;
border-radius: 2rem;
margin-right: 6vw;
margin-left: 6vw;
backdrop-filter: blur(4px);
box-shadow: 0px 0px 20px blue;
text-align: center;

&:hover {
  box-shadow: 0px 0px 30px white;
}

h1 {
  letter-spacing: 0.2vw;
  margin-bottom: 1rem;
  font-size: 1.5vw;
}

p {
  color: pink;
  font-size: 1.4vw;
  text-align: center;
  letter-spacing: 0.1rem;
}

`



