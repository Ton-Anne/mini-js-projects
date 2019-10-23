let foo = {
   isValid: true,
   sensorValue: 42,
   createdAt: 1571062291585
}

const sensorReadings = []
const addNewData = (newData) => void sensorReadings.push(newData)

addNewData(foo)

sensorReadings[0].sensorValue *= 2 
console.log({foo})