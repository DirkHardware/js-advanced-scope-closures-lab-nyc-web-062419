  
function produceDrivingRange( blockRange ) {
    return function ( startingBlock, endingBlock ) {
  
      let start = parseInt( startingBlock );
      let end = parseInt( endingBlock );
      let distanceToTravel = Math.abs( end - start );
      let difference = blockRange - distanceToTravel;
  
      if ( difference > 0 ) {
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
  }

function produceTipCalculator(tip) {
    return function (fare){ 
        return fare * tip
    }
}

function createDriver() {
    let DriverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
        
    }
}