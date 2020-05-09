const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //foreach - better you to loop through array
  // it take 3 parameter company,index,companies

  companies.forEach(function(company){
    console.log(company.name);
  })


  //filter - filter thngs form array where age is greater than 21

  const maxAge = ages.filter(function(age){
        if(age>21){
            return true;
        }
  })
  //Es6 way

  const MaxAgeE = ages.filter(age => age>=21);

  console.log(maxAge);
  console.log(MaxAgeE);

  const eightiesComp = companies.filter(company => (company.start >=1980 && company.start <1990));

  console.log(eightiesComp);


  //map

  //create array of comp name

  const nameComp = companies.map(function(company){
      return company.name
  })
  
  const newComp = companies.map(company => company.name);

  console.log(newComp);
  

//sort
//Sort companies by start year

const sortedCompanies  = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompanies_ = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);
  


const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
  

