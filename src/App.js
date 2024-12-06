import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Framework Project</h1>
        <section>
          <h2>How I Installed React</h2>
          <p>
            I used <code>npx create-react-app</code> to set up the project structure. It includes all necessary tools
            for building a React app.
          </p>
        </section>
        <section>
          <h2>How I Built This Page</h2>
          <p>
            I edited the default `App.js` file to include sections explaining the installation, development, and
            challenges I faced. Styling was done using the default `App.css` file.
          </p>
        </section>
        <section>
          <h2>Difficulties Encountered</h2>
          <ul>
            <li>
              Understanding the folder structure of React. Solved by referring to React documentation and tutorials.
            </li>
            <li>
              Deployment challenges due to unfamiliarity with Vercel. Solved by reading Vercel’s deployment guide.
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
