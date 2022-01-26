const transport = ['train', 'hot air balloon', 'horse', 'bus', 'plane', 'chariot', 'spaceship', 'bicycle', 'shopping trolley', 'micro scooter', 'row boat']
const time = ['5 minutes', 'half an hour', '1 hour', '12 hours', '2 days', '1 week', '3 months', '5 years', 'forever']
const reason = ['leaves on the track', 'low gravity', 'high gravity', 'a missing wheel', 'staff shortages', 'alligators', 'heavy snow', 'light drizzle', 'hibernation']

const randIndex = arr => {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let stringIndex = arr[randomIndex]
    return stringIndex
};

const delayedJourney = () => {
    let trans = randIndex(transport)
    let tim = randIndex(time)
    let delay = randIndex(reason)

    console.log(`Your ${trans} has been delayed by ${tim} due to ${delay}. Better luck next time!`)
   
};

delayedJourney()