function calculatePMS() {
    
    let lastPeriod= document.getElementById("lastPeriod")

    let cycleLength= document.getElementById("cycleLength").value

    let startDate= newDate(lastPeriod);
    let nextPeriod= newDate(startDate);

    nextPeriod.setDate(startDate.getDate()+ parseInt(cycleLength));
    let pmsStart=newDate(nextPeriod)

    pmsStart.setDate(nextPeriod.getDate()-5)

    //The results of the pms data recieved//

    document.getElementById("result").innerHTML

    "Next Period:"+ nextPeriod.toDateString()

    "<br>"

    "PMS Phase Starts" + pmsStart.toDateString();

    
}