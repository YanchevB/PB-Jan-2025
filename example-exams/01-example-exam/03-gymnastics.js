function calculateGymnasticPoints(country, apparatus) {
  let points = 0; 

  switch (country) {
    case 'Russia':
      if (apparatus === 'ribbon') {
        points += 9.100 + 9.400;
      } else if (apparatus === 'hoop') {
        points += 9.300 + 9.800;
      } else if (apparatus === 'rope') {
        points += 9.600 + 9.000;
      }
      break;
    case 'Bulgaria':
      if (apparatus === 'ribbon') {
        points += 9.600 + 9.400;
      } else if (apparatus === 'hoop') {
        points += 9.550 + 9.750;
      } else if (apparatus === 'rope') {
        points += 9.500 + 9.400;
      }
      break;
    case 'Italy':
      if (apparatus === 'ribbon') {
        points += 9.200 + 9.500;
      } else if (apparatus === 'hoop') {
        points += 9.450 + 9.350;
      } else if (apparatus === 'rope') {
        points += 9.700 + 9.150;
      }
      break;
  } 

  let percentageLess = 100 - (points / 20) * 100;

  console.log(`The team of ${country} get ${points.toFixed(3)} on ${apparatus}.`);
  console.log(`${percentageLess.toFixed(2)}%`);
}

calculateGymnasticPoints('Bulgaria', 'ribbon');
calculateGymnasticPoints('Russia', 'rope');