// Function to randomly consume budget from each stream
const getConsumeBudget = (streamBudget) => {
    return (Math.floor(Math.random()*(10-5) + 5)*streamBudget)/100;
}

// just to find the percentage
const findPercentage = (value, total) => Math.floor((value*total)/100); 

/**
 * 
 * @param { Number } streamTypes 
 * @param { Number } totalBudget 
 */

// to revalance the budget amount each steam types. 
const reBalancingBudget = (streamTypes, totalBudget) => {
    let streamBudget = totalBudget/streamTypes; 
    let remainingBudget = totalBudget; 

    let streams = new Array(streamTypes);
    streams.fill(streamBudget); 
    let initialStreams = [...streams]; 
    console.log("No of types of Media:", streamTypes); 
    console.log("Initial Budget:", streams); 

    while(true) {
        let randomStreamId = Math.floor(Math.random()*(streamTypes-1) + 1); 

        let consumeBudget = getConsumeBudget(streamBudget);
        streams[randomStreamId] -= consumeBudget;
        remainingBudget -= consumeBudget;


        //i. If all have balance of 0% or less, exit program.
        let streamsZeroLessBalance = 0; 
        for(let stream of streams) {
            if(stream <= 0) streamsZeroLessBalance++;
        }

        if(streamsZeroLessBalance == streamTypes) {
            // breaking the code and return the initial streams budget for testing. 
            return initialStreams;
        }

        // ii. If all have balance of less than 5% OR have balance of 5% or more, do nothing.

        // Just skip this things
        
        // iii. If one of them have balance of less than 5%, rebalance all streams to have equal balance.

        if(streams[randomStreamId] <= findPercentage(5, streamBudget)) {
            let newStreamBudget = remainingBudget/streamTypes;
            streams.fill(newStreamBudget); 
            newStreamBudget > 0 ? console.log("Rebalancing budget at: ", newStreamBudget) : ""; 
        }
    }
}

module.exports = reBalancingBudget;

