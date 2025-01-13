function numberScope(num) {
  if (num < 100) {
    console.log('Less than 100');
  } else if (num <= 200) {
    console.log('Between 100 and 200')
  } else if (num > 200) {
    console.log('Greater than 200')
  }
}

numberScope(90);
numberScope(110);
numberScope(210)