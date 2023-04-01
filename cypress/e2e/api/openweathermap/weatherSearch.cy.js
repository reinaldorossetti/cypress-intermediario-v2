describe('Pesquisa clima por cidade', () => {

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


describe('Pesquisa clima por ID', () => {

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

describe('Pesquisa clima por longitude e latitude', () => {

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

describe('Pesquisa clima por ZipCode', () => {

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

describe('Pesquisa clima por ZipCode Não Encontrado', () => {

  it('successfully', () => {
    cy.request({
      method: 'GET',
      url: '/weather?zip=040%2Cus&appid=e2f1d841cc16cff49a0aa18b531d71e0',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      expect(response.status).to.equal(404)
      expect(response.body.message).to.equal("city not found")
    })
  })

})