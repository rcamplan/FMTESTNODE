/**
 * The function to filter animals by name
 * @param {object[]} countriesCollection the collection in input
 * @returns {object[]|string} the return of the function
 */
 const countCountries = (countriesCollection = []) => {
  /**
   * Copying the array on local variable
   */
  const countries = countriesCollection.slice();
  /**
   * Mapping the countries list
   */
  const mappedCountries = countries.map(country => {
    /**
     * Default value for people to avoid breaking of the function
     */
    const people = country.people || [];
    /**
     * Mapping the people list
     */
    const mappedPeople = people.map(person => {
      let nameWithChainedNumber = person.name || "";
      
      const { animals = [] } = person;
      
      return {
        name: `${nameWithChainedNumber} [${animals.length}]`,
        animals,
      };
    });

    let nameWithChainedNumber = country.name || "";
      
    /**
     * Otherwise return the array with filtered people
     */
    return {
      name: `${nameWithChainedNumber} [${people.length}]`,
      people: mappedPeople,
    };
    
  });
  
  return mappedCountries;
};

module.exports = countCountries;