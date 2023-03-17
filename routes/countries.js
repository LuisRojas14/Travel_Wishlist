const express = require("express");
const router = express.Router();

const countries = [
  {
    id: 1,
    name: "Bhutan",
    alpha2Code: "BT",
    alpha3Code: "BTN",
  },
  {
    id: 2,
    name: "Argentina",
    alpha2Code: "AR",
    alpha3Code: "ARG",
  },
  {
    id: 3,
    name: "Brazil",
    alpha2Code: "BR",
    alpha3Code: "BRA",
  },
  {
    id: 4,
    name: "Colombia",
    alpha2Code: "CO",
    alpha3Code: "COL",
  },
  {
    id: 5,
    name: " Peru",
    alpha2Code: "PE",
    alpha3Code: "PER",
  },
];

//1. GET /api/countries
router.get("/api/countries", (req, res, next) => {
  res.send(countries);
});

// 2. POST /api/countries

router.post("/api/countries/", (req, res, next) => {
  const newCountry = {
    id: 6,
    name: "Ecuador",
    alpha2Code: "EC",
    alpha3Code: "ECU",
  };

  // create a new country object with the desired properties
  countries.push(newCountry); // add the new country to the array
  res.status(200).json(newCountry); // send a response with the new country object and status code 200 (created)
});

// 3.GET /api/countries/:code
router.get("/api/countries/:code", (req, res, next) => {
  const code = req.params.code; //this is  an object that contains the parameters (route variables) that were extracted from the URL of the current request.
  const country = countries.find(
    (c) => c.alpha2Code === code || c.alpha3Code === code
  );
  if (country) {
    res.send(country);
  } else {
    res.status(404).send("Country not found");
  }
});

router.put("/api/countries/:code", (req, res) => {
  const code = req.params.code;
  const country = countries.find(
    (c) => c.alpha2Code === code || c.alpha3Code === code
  );
  if (country) {
    // update the country object with the new data
    country.name = req.body.name;
    country.alpha2Code = req.body.alpha2Code;
    country.alpha3Code = req.body.alpha3Code;
    res.send(country);
  } else {
    console.log(`Country with code ${code} not found`);
    res.status(404).send("Country not found");
  }
});


// 5. DELETE /api/countries/:code

router.delete("/api/countries/:code", (req, res) => {
  const code = req.params.code;
  const index = countries.findIndex(
    (country) => country.alpha2Code === code || country.alpha3Code === code
  );
  if (index !== -1) {
    countries.splice(index, 1);
    res.status(200).send();
  } else {
    res.status(404).send("Country not found");
  }
});

module.exports = router;
// this way we export all routes
