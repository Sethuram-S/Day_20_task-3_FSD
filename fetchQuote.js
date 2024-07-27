document.addEventListener('DOMContentLoaded', fetchQuote);

function fetchQuote() {
    const apiUrl = 'https://strangerthings-quotes.vercel.app/api/quotes/5';

    console.log(`Fetching quote from: ${apiUrl}`); // Log the URL

    fetch(apiUrl)
        .then(response => {
            console.log(`Response status: ${response.status}`); // Log the response status

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the response for debugging
            displayQuote(data);
        })
        .catch(error => console.error('Error fetching quote:', error));
}

function displayQuote(quoteData) {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className = 'quote my-3';
    div.innerHTML = `
        <h3>Random Quotes</h3>
        ${quoteData.map(quote => `
            <p>"${quote.quote}" - ${quote.author}</p>
        `).join('')}
    `;
    content.appendChild(div);
}
