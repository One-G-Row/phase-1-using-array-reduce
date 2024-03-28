const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//declare totalBatteries globally
let totalBatteries = 0;
function reducer() {
  totalBatteries = batteryBatches.reduce((total, batch) => {
    return (total += batch);
  });
}
console.log(reducer());
