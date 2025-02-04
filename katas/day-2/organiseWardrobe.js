function organiseWardrobe(array) {
const wardrobe = []

for(const item of array) {
  if (item.purchase_year < 2010 && item.coolness_rating <5) {
    wardrobe.push({...item, action:"sell"})
  }
}
  console.log(wardrobe)
  return wardrobe
}



module.exports = organiseWardrobe;
