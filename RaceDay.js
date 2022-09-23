let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;
if(runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
  console.log(`Your race time: 9:30 am.\nYour race number: ${raceNumber}`);
}else if(runnerAge > 18 && !registeredEarly){
  console.log(`Your race time: 11:00 am.\nYour race number: ${raceNumber}`);
}else if(runnerAge < 18){
  console.log(`Your race time: 12:30 pm.\nYour race number: ${raceNumber}`);
}else{
  console.log('Runners who are 18 years old should see the registration desk.');
}