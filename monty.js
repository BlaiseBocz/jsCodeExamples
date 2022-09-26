function randomDoorSelector(num){
    return Math.floor(Math.random() * num);
}

function montyHallAlwaysSwitch(){
    let doors = [0,1,2];
    let carPosition = randomDoorSelector(3);
    let myInitialDoor = randomDoorSelector(3);
    const switchedDoorfound = doors.find((element) =>
         element !== carPosition && element !== myInitialDoor
        );

    // console.log(switchedDoorfound);
    return carPosition === doors.find((element)=> element !== myInitialDoor && element !== switchedDoorfound);
}

function gameSim(num){
    let wins=0;
    for (let i=0;i<num;i++){
        wins += montyHallAlwaysSwitch();
    }

    return wins;
}

console.log(gameSim(50));
