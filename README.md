# Stranger Things Quote Fetcher

A simple JavaScript application that fetches quotes from the Stranger Things quote API and displays them on a webpage.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [fetchQuote Function](#fetchquote-function)
  - [displayQuote Function](#displayquote-function)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## Overview

This application uses the fetch API to retrieve quotes from the Stranger Things quote API and displays them on a webpage. The application consists of two main functions: `fetchQuote` and `displayQuote`.

## Features

- Fetches quotes from the Stranger Things quote API
- Displays quotes on a webpage
- Handles errors and logs them to the console

## Usage

1. Create an HTML file with a `<div id="content">` element.
2. Include the JavaScript code in your HTML file.
3. Open the HTML file in a web browser.

## Code Explanation

### fetchQuote Function

The `fetchQuote` function is responsible for fetching quotes from the API.

```javascript
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
```
### This function:

- Defines the API URL and logs it to the console.
- Uses the fetch API to send a GET request to the API.
- Checks the response status and throws an error if it's not OK (200-299).
- Parses the response as JSON and returns it.
- Logs the parsed data to the console for debugging purposes.
- Calls the displayQuote function with the parsed data.

## displayQuote Function

The displayQuote function takes the parsed quote data and displays it on the webpage.

```javascript
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
```
### This function:

- Retrieves the content element from the DOM.
- Creates a new div element and gives it a class name.
- Sets the innerHTML property to a template literal that:
    - Creates an `<h3> heading with the text "Random Quotes"`.
    - Maps over the quote data array, creating a <p> element for each quote with the quote text and author.
    - Joins the array of <p> elements into a single string.
- Appends the div element to the content element.

## API Documentation

The Stranger Things quote API is a simple API that returns a JSON array of quotes. Each quote object has two properties: `quote` and `author`.

Example response:
```json
[
  {
    "quote": "Friends don't lie.",
    "author": "Eleven"
  },
  {
    "quote": "Mornings are for coffee and contemplation.",
    "author": "Chief Hopper"
  }
]
```
## Troubleshooting

- Check the console for error messages if quotes are not displaying.
- Verify that the API URL is correct and the API is returning data.
- Ensure that the content element is present in the HTML file.