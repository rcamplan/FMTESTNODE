/**
 * The function to filter animals by name
 * @param {object[]} countriesCollection the collection in input
 * @param {string} animalName the parameter to filter
 * @returns {object[]|string} the return of the function
 */
 const filterAnimals = (countriesCollection = [], animalName) => {
  /**
   * Copying the array on local variable
   */
  const countries = countriesCollection.slice();
  /**
   * Mapping the countries list
   */
  const filteredCountries = countries.map(country => {
    /**
     * Default value for people to avoid breaking of the function
     */
    const people = country.people || [];
    /**
     * Mapping the people list
     */
    const mappedPeople = people.map(person => {
      /**
       * Default value for animals to avoid breaking of the function
       */
      const animals = person.animals || [];
      
      /**
       * Filtering with a regex animal name
       */
      const filteredAnimalsByName = animals.filter(animal => {
        /**
         * Filtering the name with case-insensitive
         */
        const regexFilter = new RegExp(animalName, "ig");
        /**
         * If truthy return the element
         */
        if(!animalName || regexFilter.test(animal.name)){
          return true;
        }
        /**
         * Otherwise not
         */
        return false;
      });

      /**
       * If the animals array filtered is empty return undefined 
       */
      if(filteredAnimalsByName.length <= 0){
        return;
      }
      /**
       * Otherwise return the element with filtered animals
       */
      return {
        ...person,
        animals: filteredAnimalsByName,
      };
    });

    /**
     * Filtering the undefined values of person without animal corresponding
     */
    const filteredPeople = mappedPeople.filter(person => !!(person));
    
    /**
     * Check to see if there is a person in this array filtered
     */
    if(filteredPeople.length <= 0){
      return;
    }
    
    /**
     * Otherwise return the array with filtered people
     */
    return {
      ...country,
      people: filteredPeople,
    };
    
  });
  /**
   * The last filter in the case some country has no people
   */
  const countriesMapped = filteredCountries.filter(country => !!(country));
  /**
   * In the case the country has no people so is empty
   * return no animal found
   * otherwise return the elements
   */
  if(countriesMapped.length <= 0) {
    return "No animal Found";
  }
  return countriesMapped;
};

module.exports = filterAnimals;