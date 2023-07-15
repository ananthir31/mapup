# mapup
In the README file, you should include information about your API and provide instructions on how to use and test it. Here's a suggested structure for your README file:

# Intersections API

The Intersections API is a mapping-based application developed in GoLang/Express-NodeJS. It allows you to find intersecting lines between a long linestring and a set of randomly spread lines on a plane.

## Requirements

- GoLang (if implemented in GoLang)
- Node.js and Express (if implemented in Express-NodeJS)
- turf.js library (for Node.js) or turf-go library (for GoLang) for spatial calculations
- cURL or Postman for testing the API

## Installation

1. Clone the repository or download the source code.
2. Install the required dependencies.

## Usage

1. Start the API server.
2. Send a POST request to the API with the following parameters:

   - **URL**: [API endpoint URL]
   - **Headers**: Include an authentication token in the request header.
   - **Body**: Provide a GeoJSON linestring in the request body.

3. The API will process the linestring and check for intersections with the set of 50 randomly spread lines.
4. The API will return one of the following responses:

   - If no intersections are found: an empty array `[]`.
   - If intersections are found: an array containing the IDs of the intersecting lines along with the point of intersection.
   - If the linestring is invalid: an error message with a 5XX status code.
   - If the request body or auth header are missing or malformed: an error message with a 4XX status code.


### Postman Example:

1. Set the request method to POST.
2. Set the request URL to [API_ENDPOINT_URL].
3. Add the "Authorization" header with the value "Bearer [AUTH_TOKEN]".
4. Set the "Content-Type" header to "application/json".
5. In the request body, select "Raw" and choose JSON format.
6. Provide the linestring in GeoJSON format.



