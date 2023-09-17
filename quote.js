function fetchQuotes(topic, count) {

  const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

  fetch(url)
    .then(response => response.json())
    .then(quotes => {

      if ("error" in quotes) {
        document.querySelector("#quotes").innerHTML = quotes.error;
        return;
      }

      let html = "<ol>";
      for (let i = 0; i < quotes.length; i++) {
        html += `<li>${quotes[i].quote} - ${quotes[i].source}</li>`;
      }
      html += "</ol>";
      document.querySelector("#quotes").innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });

}