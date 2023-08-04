import { motion } from 'framer-motion'
import logo from './logo.svg';
import './App.css';

function App() {
  const Pvariants = {
    hidden: {
      x: -1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <motion.img src={logo} className="App-logo"
          alt="logo"
          animate={{ rotate: 360 }}
          // initial={{}}
          transition={{
            // delay: 3,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: 'reverse',
            type: 'tween',
            ease: "easeInOut"
          }}


        />
        <motion.p
          initial={'hidden'}
          animate={'visible'}
          transition={{
            delay: 0.5
          }}
          variants={Pvariants}

        >
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
