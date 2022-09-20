
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>    _   __                          __              _____ __        
   / | / /___ _   _____  ____ ___  / /_  ___  _____/ ___// /____  __
  /  |/ / __ \\ | / / _ \\/ __ '__ \\/ __ \\/ _ \\/ ___/\\__ \\/ //_/ / / /
 / /|  / /_/ / |/ /  __/ / / / / / /_/ /  __/ /   ___/ / ,&lt; / /_/ / 
/_/ |_/\\____/|___/\\___/_/ /_/ /_/_.___/\\___/_/   /____/_/|_|\\__, /  
                                                           /____/   </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
