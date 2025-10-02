const expect = require('chai').expect;
require('dotenv').config({path:'./.env'});
const json = require('./data.json');
const request = require('supertest');
const { captureRejectionSymbol } = require('supertest/lib/test');
const url = 'https://restful-booker.herokuapp.com';
const method = 'POST';
const endpointLogin = '/auth';
const endpointBooking = '/booking';
const bodyLogin = {
    "username" : process.env.username,
    "password" : process.env.password
}
const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}


describe('API Automation Affter office', function(){
    this.timeout(10000);
    context('POST token auth', function(){
        it('Success get token', async function (){
            const response = await request(url).post(endpointLogin).send(bodyLogin);
            console.log('#####Auth Token#####')
            console.log(response._body);
            console.log('#####Status Code#####')
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);        
            expect(response.body).to.have.property('token'); 
            tokenID = response.body.token
        })
    })
    context('POST booking ID', function(){
        it('Succes create bookingID', async function(){
            const stringdata = JSON.stringify(json);
            const response = await request(url).post(endpointBooking).send(stringdata).set(header);
            console.log('#####Status Code#####')
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);
            console.log('#####Body Response#####')
            console.log(response.body);
            expect(response.body.booking).to.deep.equal(json);
            bookingID = response.body.bookingid;
        })
    })
    context('GET BookingID', function(){
        it('Success get booking id', async function (){
            let newendpointbooking = `${endpointBooking}/${bookingID}`;
            const response = await request(url).get(newendpointbooking).set(header);
            console.log('#####Status Code#####')
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.deep.equal(json); 
        })
    })
    context('DELETE BookingID', function(){
        it('Success delete booking', async function (){
            let id = bookingID
            const endpointBookingDelete = `${endpointBooking}/${id}`;
            let headerAuth = {
                'Cookie': `token=${tokenID}`,
                'Accept': 'application/json'
            };
            const response = await request(url).delete(endpointBookingDelete).set(headerAuth);
            console.log('#####Status Code#####')
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(201);
        })
    })
    
})

  

