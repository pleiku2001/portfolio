import Particles from "react-tsparticles";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <main>
      <Header />
      <Main />
      <Projects/>
      <Contact/>
      <Footer/>
      <div className="backround">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                // value: "#212121",
              },
            },
            fullScreen: {
              enable: true,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                connect: {
                  distance: 80,
                  lineLinked: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              // color: {
              //   value: "#3eb0f1",
              // },
              // links: {
              //   color: "#dd4f4f",
              //   distance: 150,
              //   enable: true,
              //   opacity: 0.5,
              //   width: 1,
              // },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 300,
                },
                value: 10,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },

                image: [
                  {
                    src: "https://img.icons8.com/color/48/000000/mongodb.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/color/48/000000/typescript.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/color/48/000000/css.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/color/48/000000/nodejs.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/color/48/000000/javascript--v2.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/source-code.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/python.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/api-settings.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/github.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/tumblr.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/facebook-new--v2.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/instagram-new--v2.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/stickers/100/000000/reddit.png",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "https://img.icons8.com/color/48/000000/html.png",
                    width: 100,
                    height: 100,
                  },
                ],
                type: "image",
              },

              size: {
                random: true,
                value: 20,
              },
            },
            detectRetina: false,
          }}
        />
      </div>
    </main>
  );
}

export default App;
