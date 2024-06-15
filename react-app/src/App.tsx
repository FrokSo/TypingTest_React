import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './views/About';
import Home from './views/Home';

function App() {

  let wordDump = ["apple", "chair", "elephant", "moon", "guitar", "sunshine", "river", "laptop", "adventure", "chocolate",
    "mountain", "happiness", "basketball", "symphony", "beach", "unicorn", "cactus", "raindrop", "fireworks",
    "piano", "bicycle", "starfish", "whisper", "enigma", "iceberg", "dragonfly", "galaxy", "quasar", "mango",
    "lighthouse", "velvet", "ocean", "espresso", "festival", "penguin", "compass", "harmony", "glacier", "saffron",
    "mirage", "gondola", "tornado", "adventure", "labyrinth", "cascade", "symphony", "butterfly", "canyon", "mystery",
    "carousel", "zephyr", "narwhal", "wilderness", "enchanted", "echo", "meteor", "rainbow", "tundra", "ambulance",
    "keyboard", "flamingo", "journey", "marathon", "dolphin", "whale", "sunset", "volcano", "jungle", "savannah",
    "lemon", "swordfish", "telescope", "blizzard", "thunder", "hummingbird", "library", "harbor", "desert", "oasis",
    "paradise", "starlight", "blossom", "dandelion", "wanderlust", "pirate", "treasure", "adventure", "dream", "whisper",
    "galaxy", "constellation", "neptune", "mars", "rocket", "mermaid", "universe", "infinity", "horizon", "comet",
    "fountain", "serenade", "sunflower", "rainforest", "maple", "tiger", "eagle", "lion", "cheetah", "panther",
    "giraffe", "elephant", "kangaroo", "panda", "koala", "monkey", "leopard", "zebra", "ostrich", "peacock",
    "sparrow", "hummingbird", "pelican", "flamingo", "toucan", "crocodile", "alligator", "hippo", "rhino", "gorilla",
    "orangutan", "chimpanzee", "bonobo", "sloth", "squirrel", "raccoon", "fox", "hedgehog", "deer", "rabbit",
    "bear", "wolf", "bobcat", "lynx", "coyote", "jaguar", "cougar", "puma", "ocelot", "penguin",
    "seal", "sea lion", "walrus", "otter", "beaver", "dolphin", "whale", "shark", "octopus",
    "jellyfish", "starfish", "squid", "crab", "lobster", "shrimp", "coral", "anemone", "sea turtle", "manatee",
    "seahorse", "ray", "eel", "anglerfish", "swordfish", "tuna", "salmon", "trout", "bass", "cod",
    "mackerel", "marlin", "catfish", "goldfish", "koi", "carp", "piranha", "barracuda", "stingray",
    "dragonfly", "butterfly", "firefly", "ladybug", "ant", "bee", "wasp", "mosquito", "fly", "beetle",
    "grasshopper", "cricket", "cicada", "spider", "scorpion", "centipede", "millipede", "tarantula", "tick",
    "flea", "louse", "caterpillar", "worm", "slug", "snail", "frog", "toad", "newt", "salamander",
    "turtle", "snake", "lizard", "gecko", "chameleon", "iguana", "monitor lizard", "komodo dragon", "crocodile", "alligator",
    "tortoise", "terrapin", "chinchilla", "ferret", "hamster", "gerbil", "mouse", "rat", "guinea pig", "rabbit",
    "hedgehog", "porcupine", "mole", "shrew"];
  const year = new Date().getFullYear();
  let footerInput = ` ${year} Website by Ryan`

  return (
    <>
      <Router>
        <div>
          <Header header='Typing Speed Website' />
          <Routes>
            <Route path="/" element={<Home wordDump={wordDump}
              initialSeconds={60}
            />} />
            <Route path="/about" Component={About} />
          </Routes>
          <Footer footerInput={footerInput} />
        </div>
      </Router>
    </>
  );
}

export default App;
