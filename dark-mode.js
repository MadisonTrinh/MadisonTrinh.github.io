function switchMode() {
  var title = document.title;
  const body = document.querySelector('body')
  const div = document.querySelector('.mode-button');
  const button = document.querySelector('.mode-button button');
  var mode = button.innerText;
  
  if (mode === "DARK MODE") {
    button.innerHTML = "LIGHT MODE"; //changes button name
    div.classList.remove('dark'); //changes css classes to switch modes
    div.classList.add('light');
    body.classList.add('dark-body');

    if (title === "a webpage just 4 me") { // COME BACK TO REPLACE WIP
      document.getElementById('index-main').innerHTML = `
      WIP
      `;
    }

  } else {
    button.innerHTML = "DARK MODE";
    div.classList.remove('light');
    div.classList.add('dark');
    body.classList.remove('dark-body');

    if (title === "a webpage just 4 me") { //puts the old code back, remember this uses the special quotes ``
      document.getElementById('index-main').innerHTML = `

      <div class="sidebar">
        <img class="sidebar-img" src="https://pbs.twimg.com/media/HJUlCv5aEAAgsuz.jpg" alt="My image" />
        <p>Artist Credit: MOMOMO_906</p>
      </div>

      <div class="content">
        <h2>Madison Trinh</h2>
        <p>Full-time Student, Part-time Oddity</p>

        <div id="interests">
          <h3>Interests</h3>
          <ul>
            <li>Breakcore</li>
            <li>Dollmaking</li>
            <li>Cutegore/Cottagecore Aesthetic</li>
          </ul>
        </div>

      `;
    }

  }
  
  console.log(title); //code for checking other code
}