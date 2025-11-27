// import logo from './logo.svg'; // not used so it gives warning, we can comment this
import './App.css';

let name="Om";
function App() {
  return (
    // the below is the JSX
    // <> this is known as JSX fragment, it used to return 2 tags that are written parallely, this is not advisable but can be used sometime
    // <>
    // <h1> This is Me here babyyy</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Om
    //     </a>
    //   </header>
    // </div>
    // </>
    <>
    <nav className="navBar">
      <li> Home</li>
      <li> Contact</li>
      <li> About</li>
    </nav>
    <h1>Hello {name} </h1>
    <img src="logo512.png" alt="logo 512"/>
    <div className="vadaroskiClass">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, rem repellat a pariatur dignissimos quod suscipit repudiandae debitis architecto officiis, necessitatibus illo ex ipsa modi soluta quis nobis unde molestiae?</div>
    </>
  );
}
// html for is used as htmlFor, class is used as className, tab is written as tabIndex
export default App;
// the entire code is Javascript
