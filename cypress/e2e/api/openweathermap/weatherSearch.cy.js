describe('Checking the weather by city', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      url: '/weather?q=São+Paulo&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
    })
  })

})


describe('Checking the weather by id', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      url: '/weather?id=3448439&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
    })
  })

})

describe('Checking weather by longitude and latitude', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      url: '/weather?lat=-23.5475&lon=-46.6361&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
    })
  })

})

describe('Checking weather by zip code', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      url: '/weather?zip=94040%2Cus&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
    })
  })

})

describe('Checking weather by not found zip code', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?zip=040%2Cus&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(404)
      expect(response.body.message).to.equal("city not found")
    })
  })

})


describe('Checking cities within a rectangle zone', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?bbox=12%2C32%2C15%2C37%2C10&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(404)
      expect(response.body.message).to.equal("Nothing to geocode")
    })
  })

})

describe('Checking cities within a rectangle zone', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?bbox=12%2C32%2C15%2C37%2C10&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(404)
      expect(response.body.message).to.equal("Nothing to geocode")
    })
  })

})

describe('Checking cities in circle', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?lat=-23.5475&lon=-46.6361&cnt=10&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.coord).to.equal("{lon:-46.6361,lat:-23.5475}")
    })
  })

})

describe('Checking multilingual support', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?id=3448439&lang=sp&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.equal("{\"type\":2,\"id\":2033898,\"country\":\"BR\",\"sunrise\":1680340471,\"sunset\":1680383169}")
      expect(response.body.name).to.equal("São Paulo")
    })
  })

})

describe('Checking Call back function', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?q=São+Paulo&callback=test&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.contain("BR")
      expect(response.body.name).to.equal("São Paulo")
    })
  })

})

describe('Checking Units of measurement - For temperature in Fahrenheit use units=imperial', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?q=São+Paulo&units=imperial&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.contain("BR")
      expect(response.body.name).to.equal("São Paulo")
    })
  })

})

describe('Checking Units of measurement - For temperature in Celsius use units=metric', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?q=São+Paulo&units=metric&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.contain("BR")
      expect(response.body.name).to.equal("São Paulo")
    })
  })

})

describe('Checking Units of measurement - For temperature in Kelvin use units=standard', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?q=São+Paulo&units=standard&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.contain("BR")
      expect(response.body.name).to.equal("São Paulo")
    })
  })

})

describe('Search weather data by city name with invalid api key', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: '/weather?q=São+Paulo&units=standard&appid=e2',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.contain("BR")
      expect(response.body.name).to.equal("São Paulo")
    })
  })

})