function generateHTML(pageName) {
  return `<h1>403</h1>
  <div><p>> <span>ERROR CODE</span>: "<i>HTTP 403 Forbidden</i>"</p>
  <p>> <span>ERROR DESCRIPTION</span>: "<i>Access Denied. You Do Not Have The Permission To Access This Page.</i>"</p>
  <p>> <span>ERROR POSSIBLY CAUSED BY</span>: [<b>You trying to access <span id="site">${pageName}</span> when you should be WORKING!</b>]</p>`;
}

window.generateHTML = generateHTML;
