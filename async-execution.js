const USE_FOR_EACH = false

const random = () => Math.floor(Math.random() * 100)
let asyncRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(random === undefined) reject('invalid')
            else resolve(random())
        }, 1000)
    })
}

let refreshRandomNumber = ['patrick', 'joost', 'vlad', 'arjen']

let manageRandomNumbersForEach = async () => {
    let resultObj = {
        successCount : 0,
        failed : []
    }
    refreshRandomNumber.forEach(async (name) => {
        let newRandomNumber = await asyncRandomNumber()
        console.log({newRandomNumber})
        if(newRandomNumber > 25) {
            resultObj.successCount++
        } else {
            resultObj.failed.push(name)
        }
    })

    return resultObj
}

let manageRandomNumbersForOf = async () => {
    let resultObj = {
        successCount : 0,
        failed : []
    }

    for(name of refreshRandomNumber) {
        let newRandomNumber = await asyncRandomNumber()
        console.log({newRandomNumber})
        if(newRandomNumber > 25) {
            resultObj.successCount++
        } else {
            resultObj.failed.push(name)
        }
    }

    return resultObj
}
let manageRandomNumbersResponse

if(USE_FOR_EACH) {
    manageRandomNumbersResponse = manageRandomNumbersForEach().then(resp => console.log(resp))
} else {
    manageRandomNumbersResponse = manageRandomNumbersForOf().then(resp => console.log(resp))
}

console.log({manageRandomNumbersResponse})