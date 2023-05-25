## Application Description

The Application is a data processing tool that optimizes data collected from an API and transforms it into a usable format for further representation. 
The application allows users to make API calls, collect data in JSON file format, apply filtering rules, enable pagination, and perform sorting operations. It provides a convenient way to consume and process API data efficiently.

## How to Run the Application Locally

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the command `npm install`.
4. Start the application by running the command `npm start`.
5. The application will launch, and you should see no errors in the console.
6. You can now access the application by opening your web browser and navigating to `http://localhost:3000`.

## Example URLs

Here are some example URLs that demonstrate how to use the endpoints of the developed application:

1. Retrieve all data: `http://localhost:3000/api/countries`
2. Retrieve data with filtering by name: `http://localhost:3000/api/countries?name=BE`
3. Retrieve data with filtering by population: `http://localhost:3000/api/countries?population=0.0004`
4. Retrieve sorted data: `http://localhost:3000/api/countries?order=descend`
5. Retrieve paginated data: `http://localhost:3000/api/countries?limit=20`
6. Retrieve filtered and sorted data: `http://localhost:3000/api/countries?population=10&order=descend&name=Ge`
7. Retrieve paginated and sorted data: `http://localhost:3000/api/countries?order=descend&limit=6`
8. Retrieve paginated data with filtering by population: `http://localhost:3000/api/countries?population=0.4&limit=34`
9. Retrieve paginated, sorted and filtered data: `http://localhost:3000/api/countries?name=Island&population=0.06&limit=10&order=ascend`
10. Retrieve paginated, sorted and filtered data: `http://localhost:3000/api/countries?name=u&population=100&limit=15&order=descend`
