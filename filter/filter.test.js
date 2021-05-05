/**
 * Testing function filterAnimals
 */
 const collection = require("../collection/index.json");
const filterAnimals = require('.');
const { fixtureCollectionForRy, fixtureNotFound } = require('./fixture');

 describe('Unit testing function filterAnimals', () => {
  
   it('Testing with collection empty', () => {      
    /**
     * Collection in input
     */
    const inputCollection = [];

    /**
     * Collection in input
     */
     const filter = 'ry';

     /**
      * Calling the function for the result with that setup
      */
     const result = filterAnimals(inputCollection, filter);
 
     /**
      * Testing the result of the function
      */
     expect(result).toBe(fixtureNotFound);
   });

   it('Testing with no filter and no collection', () => {      
    /**
     * Collection in input
     */
    const inputCollection = [];

     /**
      * Calling the function for the result with that setup
      */
     const result = filterAnimals(inputCollection);
 
     /**
      * Testing the result of the function
      */
     expect(result).toBe(fixtureNotFound);
   });

   it('Testing with no filter', () => {      
    /**
     * Collection in input
     */
    const inputCollection = collection;

     /**
      * Calling the function for the result with that setup
      */
     const result = filterAnimals(inputCollection);
 
     /**
      * Testing the result of the function
      */
     expect(result).toStrictEqual(collection);
   });

   it('Testing with filter and collection', () => {      
    /**
     * Collection in input
     */
    const inputCollection = collection;

    /**
     * Collection in input
     */
    const filter = 'ry';

     /**
      * Calling the function for the result with that setup
      */
     const result = filterAnimals(inputCollection, filter);
 
     /**
      * Testing the result of the function
      */
     expect(result).toStrictEqual(fixtureCollectionForRy);
   });

   it('Testing with filter uppercase and collection', () => {      
    /**
     * Collection in input
     */
    const inputCollection = collection;

    /**
     * Collection in input
     */
    const filter = 'Ry';

     /**
      * Calling the function for the result with that setup
      */
     const result = filterAnimals(inputCollection, filter);
 
     /**
      * Testing the result of the function
      */
     expect(result).toStrictEqual(fixtureCollectionForRy);
   });

   it('Testing with filter empty and collection', () => {      
    /**
     * Collection in input
     */
    const inputCollection = collection;

    /**
     * Collection in input
     */
    const filter = '';

     /**
      * Calling the function for the result with that setup
      */
     const result = filterAnimals(inputCollection, filter);
 
     /**
      * Testing the result of the function
      */
     expect(result).toStrictEqual(collection);
   });
 

 });