/**
 * Testing function countCountries
 */
const collection = require("../collection/index.json");
const countCountries = require('.');
const { fixtureCollection } = require('./fixture');

 describe('Unit testing function countCountries', () => {
  
   it('Testing with collection empty', () => {      
    /**
     * Collection in input
     */
    const inputCollection = [];

     /**
      * Calling the function for the result with that setup
      */
     const result = countCountries(inputCollection);
 
     /**
      * Testing the result of the function
      */
     expect(result).toStrictEqual([]);
   });

   it('Testing with collection', () => {      
    /**
     * Collection in input
     */
    const inputCollection = collection;

     /**
      * Calling the function for the result with that setup
      */
     const result = countCountries(inputCollection);
 
     /**
      * Testing the result of the function
      */
     expect(result).toStrictEqual(fixtureCollection);
   });

 });