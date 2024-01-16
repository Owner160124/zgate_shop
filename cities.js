//import citiesList from './cities.json' assert { type: "json" };

const dataList = document.getElementById('citiesData')

fetch('./cities.json')
.then( res => res.json())
.then(data => data.forEach(city => {
  const el = document.createElement('option')
  el.setAttribute('value',`${city.name}, ${city.state}`)
  dataList.appendChild(el)
}))


