import request from 'supertest'
import app from '../../app'

describe('first app test', () => { 
  it('Should be return "Hello, World!", on the main route', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!')
  })
})