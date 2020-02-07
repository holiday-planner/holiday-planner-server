# holiday-planner-server
Holiday Planner API

Base URL: `http://localhost:3000`


**Home**
----
  Returns json message Welcome to Holiday Planner API.

* **URL**

  /

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  *  **Content:**   `Welcome to Holiday Planner API`
 
* **Error Response:**

  * **Code:** 500 <br />
  *  **Content :** 
    ```
    { msg : "Internal Server Error" }
    ```
--------------

**Google Sign**
----
  Register or Login using Google Account.

* **URL**

  /auth/googleSign

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  id_token: string 

* **Success Response:**

  * **Code:** 200 <br />
  **  **Content:** 
      ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1O…wMzh9.AF5S4qKk81tiMWpscTAWX4wG0NaemtEAvEFRYUO7_i4", 
        "msg": "user found"
      }
      ```
 
* **Error Response:**

  * **Code:** 500 <br />
  *  **Content:** 
      ```
      { msg : "Internal Server Error" }
      ```
--------------

**Show Holidays**
----
  Show public holidays list from 3rd party API.

* **URL**

  /holidays

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `None`

* **Data Params**

  month: string   
  year: string  

* **Success Response:**

  * **Code:** 200 <br />
  *  **Content:** 
      ```json
        {
        "holidays": [
            {
              "name": "Holi",
              "description": "Holi is a spring festival of colors celebrated by Hindus, Sikhs and others. It celebrates the triumph of good over evil and the upcoming season of spring. The festival can last up to sixteen days.",
              "date": {
                  "iso": "2020-03-10",
                  "datetime": {
                      "year": 2020,
                      "month": 3,
                      "day": 10
                  }
              },
              "type": [
                  "Hinduism"
              ],
              "locations": "All",
              "states": "All"
            },
            {
              "name": "Ascension of the Prophet Muhammad",
              "description": "Isra and Mi'raj (Isra Me'raj, Israa and Mi'raaj, Laylat Al-Isra wa Al-Miraj, Lailat al Miraj, Night Journey and Ascension to Heaven) marks the night that the Prophet Mohammad traveled from Mecca to Jerusalem, ascended to heaven and returned.",
              "date": {
                  "iso": "2020-03-22",
                  "datetime": {
                      "year": 2020,
                      "month": 3,
                      "day": 22
                  }
              },
              "type": [
                  "National holiday"
              ],
              "locations": "All",
              "states": "All"
            },
            {
              "name": "Bali's Day of Silence and Hindu New Year",
              "description": "Bali's Day of Silence and Hindu New Year is a public holiday in Indonesia",
              "date": {
                  "iso": "2020-03-25",
                  "datetime": {
                      "year": 2020,
                      "month": 3,
                      "day": 25
                  }
              },
              "type": [
                  "National holiday"
              ],
              "locations": "All",
              "states": "All"
            }
          ]
      }
      ```

* **Error Response:**

  * **Code:** 500 <br />
  *  **Content:** 
      ```
      { msg : "Internal Server Error" }
      ```
--------------

**Get Weather**
----
  Get Weather from 3rd party API.

* **URL**

  /weather

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `None`

* **Data Params**

  date: string   
  address: string   

* **Success Response:**
    ```
    Rainy
    ```
  * **Code:** 200 <br />
  *  **Content:** 

 
* **Error Response:**

  * **Code:** 500 <br />
  *  **Content:** `{ msg : "Internal Server Error" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
  *  **Content:** `{ msg : "Not Found" }`


--------------

**Get Event**
----
  Get event data at selected date.

* **URL**

  /events

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `None`

* **Data Params**

  date: string   

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```
    {
      "events": [
        {
          "name": "New York Yankees vs. Boston Red Sox",
          "type": "event",
          "id": "vvG1VZ4VnSiiFt",
          "test": false,
          "url": "https://www.ticketmaster.com/new-york-yankees-vs-boston-red-tampa-florida-03-03-2020/event/0D00574AB3B2C229",
          "locale": "en-us",
        }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
  *  **Content:** `{ msg : "Internal Server Error" }`

--------------