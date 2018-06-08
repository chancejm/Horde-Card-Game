$( document ).ready(function() {
console.log( "ready!" );
console.log("test");
let waveCount = 0;
let turnCounter = 2;
let picktimebutton = false;
let attacktimebutton = false;
let waveWaiting = false;
let startMenu = true;
let mainTimer;
let sec = 35;
let pickPhase = false;
let attackPhase = false;
// let timeRunning = false;
// let pickPhase = true;
// timer variables above

let mainTimerTwo;
let secA = 25;

let nextKnightPicked = false;
let nextWizardPicked = false;
let nextRangerPicked = false;
let nextPaladinPicked = false;
let nextAssassinPicked = false;
let leftPick = false;
let centerPick = false;
let rightPick = false;
// Hero Selectors variables above

let knightLeft = false;
let knightCenter = false;
let knightRight = false;
let wizardLeft = false;
let wizardCenter = false;
let wizardRight = false;
let rangerLeft = false;
let rangerCenter = false;
let rangerRight = false;
let paladinLeft = false;
let paladinCenter = false;
let paladinRight = false;
let assassinLeft = false;
let assassinCenter =false;
let assassinRight = false;
// Pick hero Positions variables above

let knightActive = false;
let wizardActive = false;
let rangerActive = false;
let paladinActive = false;
let assassinActive = false;
//

let newNameOne = "Zombie";
let newNameTwo = "Zombie";
let newNameThree = "Zombie";
let newNameFour = "Zombie";
let newNameFive = "Zombie";
let newNameSix = "Zombie";
let newNameSeven = "Zombie";


//
let oneW = '';
let twoW = '';
let threeW = '';
let fourW = '';
let fiveW = '';
let sixW = '';
let sevenW = '';
// Upcoming Enemy Variables Above

let oneE = true;
let twoE = true;
let threeE = true;
let fourE = true;
let fiveE = true;
let sixE = true;
let sevenE = true;
// Active Enemy variables above

let oneEH = 1;
let twoEH = 1;
let threeEH = 1;
let fourEH = 1;
let fiveEH = 1;
let sixEH = 1;
let sevenEH = 1;
let knightH = 3;
let wizardH = 1;
let rangerH = 2;
let paladinH = 4;
let assassinH = 1;
//Health value variables above

let oneEA = 1;
let twoEA = 1;
let threeEA = 1;
let fourEA = 1;
let fiveEA = 1;
let sixEA = 1;
let sevenEA = 1;
let knightA = 2;
let wizardA = 1;
let rangerA = 3;
let paladinA = 1;
let assassinA = 4;
//Attack value variables above

let oneWA = 1;
let twoWA = 1;
let threeWA = 1;
let fourWA = 1;
let fiveWA = 1;
let sixWA = 1;
let sevenWA = 1;
let oneWH = 1;
let twoWH = 1;
let threeWH = 1;
let fourWH = 1;
let fiveWH = 1;
let sixWH = 1;
let sevenWH = 1;

///
let oneEAttack = false;
let twoEAttack = false;
let threeEAttack = false;
let fourEAttack = false;
let fiveEAttack = false;
let sixEAttack = false;
let sevenEAttack = false;
//

let rangerAttackCount = 1;
let knightAttackCount = 1;
let wizardAttackCount = wizardA;
let paladinAttackCount = 1;
let assassinAttackCount = 1;
//dafsdfasdfsdf

let knightAttacking = false;
let wizardAttacking = false;
let rangerAttacking = false;
let paladinAttacking = false;
let assassinAttacking = false;
//dasgsdgsdgsdg

let randomNumber = 0;
//fdgasdg

let knightDead = false;
let wizardDead = false;
let rangerDead = false;
let paladinDead = false;
let assassinDead = false;

let x = true;

function borderBlack(){
    $("#pickedLeft").css("border", '3px solid black');
    $("#pickedCenter").css("border", '3px solid black');
    $("#pickedRight").css("border", '3px solid black');
    $("#nextKnight").css("border", '3px solid black', 'opacity', '1');
    $("#nextWizard").css("border", '3px solid black', 'opacity', '1');
    $("#nextRanger").css("border", '3px solid black', 'opacity', '1');
    $("#nextPaladin").css("border", '3px solid black', 'opacity', '1');
    $("#nextAssassin").css("border", '3px solid black', 'opacity', '1');
    $("#nextKnight").css('opacity', '1');
    $("#nextWizard").css('opacity', '1');
    $("#nextRanger").css('opacity', '1');
    $("#nextPaladin").css('opacity', '1');
    $("#nextAssassin").css('opacity', '1');
    
};

function loseTime(){
    knightDead = false;
    wizardDead = false;
    rangerDead = false;
    paladinDead = false;
    assassinDead = false;
    console.log("YOU LOST");
    $("#start").css("display", "block");
    $(".space").css("display", "block");
    $("#firstRow").css("display", "none");
    $("#nextKnight").css('visibility', 'visible', 'opacity', '1')
    $("#nextWizard").css('visibility', 'visible', 'opacity', '1')
    $("#nextRanger").css('visibility', 'visible', 'opacity', '1')
    $("#nextPaladin").css('visibility', 'visible', 'opacity', '1')
    $("#nextAssassin").css('visibility', 'visible', 'opacity', '1')
    $("#secondRow").css("visibility", "hidden");
    $("#thirdRow").css("visibility", "hidden");
    $(".pickLeftInfo").css("visibility", "hidden");
    $(".pickCenterInfo").css("visibility", "hidden");
    $(".pickRightInfo").css("visibility", "hidden");
    $("#pickedLeft").css("visibility", "hidden");
    $("#pickedCenter").css("visibility", "hidden");
    $("#pickedRight").css("visibility", "hidden");
    $('#nextOne').css("visibility", "hidden");
    $('#nextTwo').css("visibility", "hidden");
    $('#nextThree').css("visibility", "hidden");
    $('#nextFour').css("visibility", "hidden");
    $('#nextFive').css("visibility", "hidden");
    $('#nextSix').css("visibility", "hidden");
    $('#nextSeven').css("visibility", "hidden");
    $('#badOne').css("visibility", "hidden");
    $('#badTwo').css("visibility", "hidden");
    $('#badThree').css("visibility", "hidden");
    $('#badFour').css("visibility", "hidden");
    $('#badFive').css("visibility", "hidden");
    $('#badSix').css("visibility", "hidden");
    $('#badSeven').css("visibility", "hidden");
    $("#pickTimeBtn").css("display", "none");
    $(".timer").css("visibility", "hidden");
    $("#badOne").css("background-image", "url(assets/images/zombiewar.jpg)");
    $("#badTwo").css("background-image", "url(assets/images/zombiewar.jpg)");
    $("#badThree").css("background-image", "url(assets/images/zombiewar.jpg)");
    $("#badFour").css("background-image", "url(assets/images/zombiewar.jpg)");
    $("#badFive").css("background-image", "url(assets/images/zombiewar.jpg)");
    $("#badSix").css("background-image", "url(assets/images/zombiewar.jpg)");
    $("#badSeven").css("background-image", "url(assets/images/zombiewar.jpg)");

    $("#spaceText").html('YOU SURVIVED '+waveCount+' WAVES<br><br>Click Start To Play Again')
    startMenu = true;

    turnCounter = 2;
    picktimebutton = false;
    attacktimebutton = false;
    waveWaiting = false;
    startMenu = true;
    mainTimer;
    sec = 35;
    pickPhase = false;
    attackPhase = false;
    mainTimerTwo;
    secA = 25;
    nextKnightPicked = false;
    nextWizardPicked = false;
    nextRangerPicked = false;
    nextPaladinPicked = false;
    nextAssassinPicked = false;
    leftPick = false;
    centerPick = false;
    rightPick = false;
    knightLeft = false;
    knightCenter = false;
    knightRight = false;
    wizardLeft = false;
    wizardCenter = false;
    wizardRight = false;
    rangerLeft = false;
    rangerCenter = false;
    rangerRight = false;
    paladinLeft = false;
    paladinCenter = false;
    paladinRight = false;
    assassinLeft = false;
    assassinCenter =false;
    assassinRight = false;
    knightActive = false;
    wizardActive = false;
    rangerActive = false;
    paladinActive = false;
    assassinActive = false;
    newNameOne = "Zombie";
    newNameTwo = "Zombie";
    newNameThree = "Zombie";
    newNameFour = "Zombie";
    newNameFive = "Zombie";
    newNameSix = "Zombie";
    newNameSeven = "Zombie";
    oneW = '';
    twoW = '';
    threeW = '';
    fourW = '';
    fiveW = '';
    sixW = '';
    sevenW = '';
    oneE = true;
    twoE = true;
    threeE = true;
    fourE = true;
    fiveE = true;
    sixE = true;
    sevenE = true;
    oneEH = 1;
    twoEH = 1;
    threeEH = 1;
    fourEH = 1;
    fiveEH = 1;
    sixEH = 1;
    sevenEH = 1;
    knightH = 3;
    wizardH = 1;
    rangerH = 2;
    paladinH = 4;
    assassinH = 1;
    oneEA = 1;
    twoEA = 1;
    threeEA = 1;
    fourEA = 1;
    fiveEA = 1;
    sixEA = 1;
    sevenEA = 1;
    knightA = 2;
    wizardA = 1;
    rangerA = 3;
    paladinA = 1;
    assassinA = 4;
    oneWA = 1;
    twoWA = 1;
    threeWA = 1;
    fourWA = 1;
    fiveWA = 1;
    sixWA = 1;
    sevenWA = 1;
    oneWH = 1;
    twoWH = 1;
    threeWH = 1;
    fourWH = 1;
    fiveWH = 1;
    sixWH = 1;
    sevenWH = 1;
    oneEAttack = false;
    twoEAttack = false;
    threeEAttack = false;
    fourEAttack = false;
    fiveEAttack = false;
    sixEAttack = false;
    sevenEAttack = false;
    rangerAttackCount = 1;
    knightAttackCount = 1;
    wizardAttackCount = wizardA;
    paladinAttackCount = 1;
    assassinAttackCount = 1;
    knightAttacking = false;
    wizardAttacking = false;
    rangerAttacking = false;
    paladinAttacking = false;
    assassinAttacking = false;
    randomNumber = 0;
    knightDead = false;
    wizardDead = false;
    rangerDead = false;
    paladinDead = false;
    assassinDead = false;
    statsUpdate();
    clearInterval(mainTimer);
    clearInterval(mainTimerTwo);
    
};


function timer(){  // Timer Display

    

    if(sec === 1 && pickPhase === true){
        pickPhase = false;
        attackPhase = true;
        borderBlack();
        console.log("Pick Phase is "+pickPhase);
        console.log("attack Phase is "+attackPhase);
        console.log(leftPick);
        console.log(centerPick);
        console.log(rightPick);
        
    };
   
    if(sec === 0){
        //
        } else {
        sec--;
        // console.log(sec);
        if (sec >= 10) {
            $('.timeText').html(sec);
        } else if(sec < 10) {
            $('.timeText').html('0'+sec);
        }; 
    };
        if (sec <= 30){
            upcomingWave();
            console.log(oneW, twoW, threeW, fourW, fiveW, sixW, sevenW);
            // $("#firstRow").css("visibility", "visible");
        };
        
        if(pickPhase === false && attackPhase === true){
            clearInterval(mainTimer);
            secA = 25;
            $('.timer').css("visibility", "hidden");
            $("#pickTimeBtn").css("display", "none");
            setTimeout(() => {
                timeStartTwo();
            }, 1000);
        };      
};

function timeStartTwo(){
        $('.timerTwo').css("visibility", "visible");
        $("#attackTimeBtn").css("display", "initial");
        mainTimerTwo = setInterval(timerTwo, 1000);
        // timeRunning = true;
};

//
function timerTwo(){  // Timer Display


    if(secA === 1 && attackPhase === true){
        if(leftPick === false && rightPick === false && centerPick ===false){
            setTimeout(() => {
                loseTime();
            }, 2000);
            
        };
        pickPhase = true;
        attackPhase = false;
        console.log("Pick Phase is "+pickPhase);
        console.log("attack Phase is "+attackPhase);
    };
   
    if(secA === 0){
        //
        } else {
        secA--;
        // console.log(sec);
        if (secA >= 10) {
            $('.timeTextTwo').html(secA);
        } else if(secA < 10) {
            $('.timeTextTwo').html('0'+secA);
        }; 
    };
    
    if(pickPhase === true && attackPhase === false){
        clearInterval(mainTimerTwo);
        sec = 35;
        $('.timerTwo').css("visibility", "hidden");
        $("#attackTimeBtn").css("display", "none");
        damageOne();
        damageTwo();
        damageThree();
        damageFour();
        damageFive();
        damageSix();
        damageSeven(); 
        borderBlack();
        pickPhaseReset();
        setTimeout(() => {
            // newNames();
            // statsUpdate();
           // console.log(newNameOne, newNameTwo, newNameThree, newNameFour, newNameFive, newNameSix, newNameSeven);
            timeStart();
            newWave();
        }, 1000);
    };  
        
};
//
function oneEcenter(){
    if(oneE === true && knightCenter === true && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        knightH = knightH - oneEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(oneE === true && wizardCenter === true && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - oneEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(oneE === true && rangerCenter === true && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - oneEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(oneE === true && paladinCenter === true && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - oneEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(oneE === true && assassinCenter === true && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - oneEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
}; 
function twoEcenter(){
    if(twoE === true && knightCenter === true && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        knightH = knightH - twoEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(twoE === true && wizardCenter === true && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - twoEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(twoE === true && rangerCenter === true && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - twoEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(twoE === true && paladinCenter === true && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - twoEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(twoE === true && assassinCenter === true && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - twoEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
};
function threeEcenter(){
    if(threeE === true && knightCenter === true && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        knightH = knightH - threeEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(threeE === true && wizardCenter === true && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - threeEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(threeE === true && rangerCenter === true && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - threeEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(threeE === true && paladinCenter === true && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - threeEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(threeE === true && assassinCenter === true && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - threeEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
};
function fourEcenter(){
    if(fourE === true && knightCenter === true && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        knightH = knightH - fourEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(fourE === true && wizardCenter === true && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - fourEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(fourE === true && rangerCenter === true && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - fourEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(fourE === true && paladinCenter === true && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - fourEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(fourE === true && assassinCenter === true && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - fourEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
};
function fiveEcenter(){
    if(fiveE === true && knightCenter === true && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        knightH = knightH - fiveEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(fiveE === true && wizardCenter === true && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - fiveEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(fiveE === true && rangerCenter === true && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - fiveEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(fiveE === true && paladinCenter === true && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - fiveEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(fiveE === true && assassinCenter === true && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - fiveEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
};
function sixEcenter(){
    if(sixE === true && knightCenter === true && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        knightH = knightH - sixEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(sixE === true && wizardCenter === true && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - sixEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(sixE === true && rangerCenter === true && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - sixEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(sixE === true && paladinCenter === true && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - sixEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(sixE === true && assassinCenter === true && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - sixEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
};
function sevenEcenter(){
    if(sevenE === true && knightCenter === true && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        knightH = knightH - sevenEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            knightCenter = false;
            centerPick = false;
            knightDead = true;
        };
    };
    
    if(sevenE === true && wizardCenter === true && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - sevenEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            wizardCenter = false;
            centerPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(sevenE === true && rangerCenter === true && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - sevenEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            rangerCenter = false;
            centerPick = false;
            rangerDead = true;
        };
    };
    
    if(sevenE === true && paladinCenter === true && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - sevenEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            paladinCenter = false;
            centerPick = false;
            paladinDead = true;
        };
    };
    
    if(sevenE === true && assassinCenter === true && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - sevenEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedCenter").css('visibility', 'hidden');
            assassinCenter = false;
            centerPick = false;
            assassinDead = true;
        };
    };
};

function oneEleft(){
    if(oneE === true && knightLeft === true && centerPick === false && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        knightH = knightH - oneEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(oneE === true && wizardLeft === true && centerPick === false && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - oneEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(oneE === true && rangerLeft === true && centerPick === false && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - oneEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(oneE === true && paladinLeft === true && centerPick === false && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - oneEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(oneE === true && assassinLeft === true && centerPick === false && oneEAttack === false){
        oneEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - oneEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};
function twoEleft(){
    if(twoE === true && knightLeft === true && centerPick === false && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        knightH = knightH - twoEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(twoE === true && wizardLeft === true && centerPick === false && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - twoEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(twoE === true && rangerLeft === true && centerPick === false && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - twoEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(twoE === true && paladinLeft === true && centerPick === false && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - twoEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(twoE === true && assassinLeft === true && centerPick === false && twoEAttack === false){
        twoEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - twoEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};
function threeEleft(){
    if(threeE === true && knightLeft === true && centerPick === false && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        knightH = knightH - threeEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(threeE === true && wizardLeft === true && centerPick === false && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - threeEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(threeE === true && rangerLeft === true && centerPick === false && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - threeEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(threeE === true && paladinLeft === true && centerPick === false && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - threeEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(threeE === true && assassinLeft === true && centerPick === false && threeEAttack === false){
        threeEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - threeEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};
function fourEleft(){
    if(fourE === true && knightLeft === true && centerPick === false && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        knightH = knightH - fourEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(fourE === true && wizardLeft === true && centerPick === false && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - fourEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(fourE === true && rangerLeft === true && centerPick === false && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - fourEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(fourE === true && paladinLeft === true && centerPick === false && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - fourEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(fourE === true && assassinLeft === true && centerPick === false && fourEAttack === false){
        fourEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - fourEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};
function fiveEleft(){
    if(fiveE === true && knightLeft === true && centerPick === false && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        knightH = knightH - fiveEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(fiveE === true && wizardLeft === true && centerPick === false && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - fiveEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(fiveE === true && rangerLeft === true && centerPick === false && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - fiveEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(fiveE === true && paladinLeft === true && centerPick === false && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - fiveEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(fiveE === true && assassinLeft === true && centerPick === false && fiveEAttack === false){
        fiveEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - fiveEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};
function sixEleft(){
    if(sixE === true && knightLeft === true && centerPick === false && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        knightH = knightH - sixEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(sixE === true && wizardLeft === true && centerPick === false && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - sixEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(sixE === true && rangerLeft === true && centerPick === false && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - sixEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(sixE === true && paladinLeft === true && centerPick === false && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - sixEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(sixE === true && assassinLeft === true && centerPick === false && sixEAttack === false){
        sixEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - sixEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};
function sevenEleft(){
    if(sevenE === true && knightLeft === true && centerPick === false && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        knightH = knightH - sevenEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            knightLeft = false;
            leftPick = false;
            knightDead = true;
        };
    };
    
    if(sevenE === true && wizardLeft === true && centerPick === false && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - sevenEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            wizardLeft = false;
            leftPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(sevenE === true && rangerLeft === true && centerPick === false && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - sevenEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            rangerLeft = false;
            leftPick = false;
            rangerDead = true;
        };
    };
    
    if(sevenE === true && paladinLeft === true && centerPick === false && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - sevenEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            paladinLeft = false;
            leftPick = false;
            paladinDead = true;
        };
    };
    
    if(sevenE === true && assassinLeft === true && centerPick === false && sevenEAttack === false){
        sevenEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - sevenEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedLeft").css('visibility', 'hidden');
            assassinLeft = false;
            leftPick = false;
            assassinDead = true;
        };
    };
};

function oneEright(){
    if(oneE === true && knightRight === true && centerPick === false && oneEAttack === false && leftPick === false){
        oneEAttack = true;
        console.log('thisRAN');
        knightH = knightH - oneEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(oneE === true && wizardRight === true && centerPick === false && oneEAttack === false && leftPick === false){
        oneEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - oneEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(oneE === true && rangerRight === true && centerPick === false && oneEAttack === false && leftPick === false){
        oneEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - oneEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(oneE === true && paladinRight === true && centerPick === false && oneEAttack === false && leftPick === false){
        oneEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - oneEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(oneE === true && assassinRight === true && centerPick === false && oneEAttack === false && leftPick === false){
        oneEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - oneEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};
function twoEright(){
    if(twoE === true && knightRight === true && centerPick === false && twoEAttack === false && leftPick === false){
        twoEAttack = true;
        console.log('thisRAN');
        knightH = knightH - twoEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(twoE === true && wizardRight === true && centerPick === false && twoEAttack === false && leftPick === false){
        twoEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - twoEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(twoE === true && rangerRight === true && centerPick === false && twoEAttack === false && leftPick === false){
        twoEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - twoEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(twoE === true && paladinRight === true && centerPick === false && twoEAttack === false && leftPick === false){
        twoEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - twoEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(twoE === true && assassinRight === true && centerPick === false && twoEAttack === false && leftPick === false){
        twoEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - twoEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};
function threeEright(){
    if(threeE === true && knightRight === true && centerPick === false && threeEAttack === false && leftPick === false){
        threeEAttack = true;
        console.log('thisRAN');
        knightH = knightH - threeEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(threeE === true && wizardRight === true && centerPick === false && threeEAttack === false && leftPick === false){
        threeEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - threeEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(threeE === true && rangerRight === true && centerPick === false && threeEAttack === false && leftPick === false){
        threeEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - threeEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(threeE === true && paladinRight === true && centerPick === false && threeEAttack === false && leftPick === false){
        threeEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - threeEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(threeE === true && assassinRight === true && centerPick === false && threeEAttack === false && leftPick === false){
        threeEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - threeEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};
function fourEright(){
    if(fourE === true && knightRight === true && centerPick === false && fourEAttack === false && leftPick === false){
        fourEAttack = true;
        console.log('thisRAN');
        knightH = knightH - fourEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(fourE === true && wizardRight === true && centerPick === false && fourEAttack === false && leftPick === false){
        fourEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - fourEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(fourE === true && rangerRight === true && centerPick === false && fourEAttack === false && leftPick === false){
        fourEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - fourEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(fourE === true && paladinRight === true && centerPick === false && fourEAttack === false && leftPick === false){
        fourEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - fourEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(fourE === true && assassinRight === true && centerPick === false && fourEAttack === false && leftPick === false){
        fourEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - fourEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};
function fiveEright(){
    if(fiveE === true && knightRight === true && centerPick === false && fiveEAttack === false && leftPick === false){
        fiveEAttack = true;
        console.log('thisRAN');
        knightH = knightH - fiveEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(fiveE === true && wizardRight === true && centerPick === false && fiveEAttack === false && leftPick === false){
        fiveEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - fiveEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(fiveE === true && rangerRight === true && centerPick === false && fiveEAttack === false && leftPick === false){
        fiveEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - fiveEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(fiveE === true && paladinRight === true && centerPick === false && fiveEAttack === false && leftPick === false){
        fiveEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - fiveEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(fiveE === true && assassinRight === true && centerPick === false && fiveEAttack === false && leftPick === false){
        fiveEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - fiveEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};
function sixEright(){
    if(sixE === true && knightRight === true && centerPick === false && sixEAttack === false && leftPick === false){
        sixEAttack = true;
        console.log('thisRAN');
        knightH = knightH - sixEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(sixE === true && wizardRight === true && centerPick === false && sixEAttack === false && leftPick === false){
        sixEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - sixEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(sixE === true && rangerRight === true && centerPick === false && sixEAttack === false && leftPick === false){
        sixEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - sixEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(sixE === true && paladinRight === true && centerPick === false && sixEAttack === false && leftPick === false){
        sixEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - sixEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(sixE === true && assassinRight === true && centerPick === false && sixEAttack === false && leftPick === false){
        sixEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - sixEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};
function sevenEright(){
    if(sevenE === true && knightRight === true && centerPick === false && sevenEAttack === false && leftPick === false){
        sevenEAttack = true;
        console.log('thisRAN');
        knightH = knightH - sevenEA;
        statsUpdate();
        if(knightH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            knightRight = false;
            rightPick = false;
            knightDead = true;
        };
    };
    
    if(sevenE === true && wizardRight === true && centerPick === false && sevenEAttack === false && leftPick === false){
        sevenEAttack = true;
        console.log('thisRAN');
        wizardH = wizardH - sevenEA;
        statsUpdate();
        if(wizardH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            wizardRight = false;
            rightPick = false;
            wizardDead = true;
            console.log('deadass');
        };
    };
    
    if(sevenE === true && rangerRight === true && centerPick === false && sevenEAttack === false && leftPick === false){
        sevenEAttack = true;
        console.log('thisRAN');
        rangerH = rangerH - sevenEA;
        statsUpdate();
        if(rangerH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            rangerRight = false;
            rightPick = false;
            rangerDead = true;
        };
    };
    
    if(sevenE === true && paladinRight === true && centerPick === false && sevenEAttack === false && leftPick === false){
        sevenEAttack = true;
        console.log('thisRAN');
        paladinH = paladinH - sevenEA;
        statsUpdate();
        if(paladinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            paladinRight = false;
            rightPick = false;
            paladinDead = true;
        };
    };
    
    if(sevenE === true && assassinRight === true && centerPick === false && sevenEAttack === false && leftPick === false){
        sevenEAttack = true;
        console.log('thisRAN');
        assassinH = assassinH - sevenEA;
        statsUpdate();
        if(assassinH <= 0){
            $("#pickedRight").css('visibility', 'hidden');
            assassinRight = false;
            rightPick = false;
            assassinDead = true;
        };
    };
};


//
function damageOne(){
    oneEcenter();
    oneEleft();
    oneEright();
};

function damageTwo(){
    twoEcenter();
    twoEleft();
    twoEright();
};

function damageThree(){
    threeEcenter();
    threeEleft();
    threeEright();
};

function damageFour(){
    fourEcenter();
    fourEleft();
    fourEright();
};

function damageFive(){
    fiveEcenter();
    fiveEleft();
    fiveEright();
};

function damageSix(){
    sixEcenter();
    sixEleft();
    sixEright();
};

function damageSeven(){
    sevenEcenter();
    sevenEleft();
    sevenEright();
};

function timeStart(){
        $('.timer').css("visibility", "visible");
        $("#pickTimeBtn").css("display", "block");
        mainTimer = setInterval(timer, 1000)
        // timeRunning = true;
};
//

function pickPhaseReset(){
    if(knightDead === false){$("#nextKnight").css('visibility', 'visible', 'opacity', '1')};
    if(wizardDead === false){$("#nextWizard").css('visibility', 'visible', 'opacity', '1')};
    if(rangerDead === false){$("#nextRanger").css('visibility', 'visible', 'opacity', '1')};
    if(paladinDead === false){$("#nextPaladin").css('visibility', 'visible', 'opacity', '1')};
    if(assassinDead === false){$("#nextAssassin").css('visibility', 'visible', 'opacity', '1')};
    $("#pickedLeft").css('visibility', 'visible');
    $("#pickedCenter").css('visibility', 'visible');
    $("#pickedRight").css('visibility', 'visible');
    $(".pickCenterInfo").html('0/0');
    $(".pickRightInfo").html('0/0');
    $(".pickLeftInfo").html('0/0');
    $("#pickedLeft").css("background-image", "url('')");
    $("#pickedCenter").css("background-image", "url('')");
    $("#pickedRight").css("background-image", "url('')");
    centerPick = false;
    leftPick = false;
    rightPick = false;
    knightLeft = false;
    knightCenter = false;
    knightRight = false;
    wizardLeft = false;
    wizardCenter = false;
    wizardRight = false;
    rangerLeft = false;
    rangerCenter = false;
    rangerRight = false;
    paladinLeft = false;
    paladinCenter = false;
    paladinRight = false;
    assassinLeft = false;
    assassinCenter =false;
    assassinRight = false;
    nextKnightPicked = false;
    nextWizardPicked = false;
    nextRangerPicked = false;
    nextPaladinPicked = false;
    nextAssassinPicked = false;
    knightAttacking = false;
    rangerAttacking = false;
    wizardAttacking = false;
    paladinAttacking = false;
    assassinAttacking = false;
    knightActive = false;
    wizardActive = false;
    rangerActive = false;
    paladinActive = false;
    assassinActive = false;
    rangerAttackCount = 1;
    knightAttackCount = 1;
    wizardAttackCount = wizardA;
    paladinAttackCount = 1;
    assassinAttackCount = 1;
    oneEAttack = false;
    twoEAttack = false;
    threeEAttack = false;
    fourEAttack = false;
    fiveEAttack = false;
    sixEAttack = false;
    sevenEAttack = false;
    

};


$("#start").click(function(){ //Start Button
    console.log("start button clicked");
    pickPhase = true;
    sec = 60;
    secA = 60;
    $("#start").css("display", "none");
    $(".space").css("display", "none");
    $("#firstRow").css("display", "block");
    $("#firstRow").css("visibility", "hidden");
    $("#secondRow").css("visibility", "visible");
    $("#thirdRow").css("visibility", "visible");
    $(".pickLeftInfo").css("visibility", "visible");
    $(".pickCenterInfo").css("visibility", "visible");
    $(".pickRightInfo").css("visibility", "visible");
    $("#pickedLeft").css("visibility", "visible");
    $("#pickedCenter").css("visibility", "visible");
    $("#pickedRight").css("visibility", "visible");
    $(".timer").css("visibility", "visible");
    $('#badOne').css("visibility", "visible");
    $('#badTwo').css("visibility", "visible");
    $('#badThree').css("visibility", "visible");
    $('#badFour').css("visibility", "visible");
    $('#badFive').css("visibility", "visible");
    $('#badSix').css("visibility", "visible");
    $('#badSeven').css("visibility", "visible");
    $('.timerTwo').css("visibility", "hidden");
    $('.timer').css("visibility", "hidden");
    timeStart();
    // timeStartTwo();
    startMenu = false;
});

$("#infoBtn").click(function(){
    if(x === false){
    $("#infoBox").css("visibility", "visible");
    x = true;
    console.log(infoBox);
    } else {
    $("#infoBox").css("visibility", "hidden"); 
    x = false;
    }; 
});


$("#pickedLeft").click(function(){ // player picks what hero is on the left
    console.log("pickedLeft button clicked");
    if (leftPick === false && pickPhase === true) {
    if (nextKnightPicked === true) {
    $("#pickedLeft").css("background-image", "url(assets/images/knightpic.jpg)")
    $("#nextKnight").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    $(".pickLeftInfo").html('Knight: '+knightA+'/'+knightH);
    if(wizardActive === true){wizardA = wizardA + 1};
    wizardAttackCount = wizardA;
    if(paladinActive === true){paladinA = paladinA + 1};
    if(assassinActive === true){assassinA = assassinA + 1};
    if(rangerActive === true){rangerA = rangerA + 2};
    if(wizardActive === true){wizardH = wizardH + 1};
    if(paladinActive === true){paladinH = paladinH + 1};
    if(assassinActive === true){assassinH = assassinH + 1};
    if(rangerActive === true){rangerH = rangerH + 1};
    statsUpdate();
    knightLeft = true;
    leftPick = true;
    knightActive = true;
    setFalse();
    } else if (nextWizardPicked === true) {
    $("#pickedLeft").css("background-image", "url(assets/images/wizardpic.jpeg)")
    $("#nextWizard").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    $(".pickLeftInfo").html('Wizard: '+wizardA+'/'+wizardH);
    if(knightActive === true){knightA = knightA + 1};
    if(knightActive === true){knightH = knightH + 1};
    if(paladinActive === true){paladinH = paladinH + 2};
    if(assassinActive === true){assassinAttackCount++};
    if(rangerActive === true){rangerA = rangerA + 2};
    statsUpdate();
    wizardLeft = true;
    leftPick = true;
    wizardActive = true;
    setFalse();
    } else if (nextRangerPicked === true) {
        console.log(nextKnightPicked);
    $("#pickedLeft").css("background-image", "url(assets/images/rangerpic.jpg)")
    $("#nextRanger").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    $(".pickLeftInfo").html('Ranger: '+rangerA+'/'+rangerH);
    if(knightActive === true){knightA = knightA + 2};
    if(wizardActive === true){wizardA = wizardA + 2};
    wizardAttackCount = wizardA;
    if(paladinActive === true){paladinA = paladinA + 2};
    if(assassinActive === true){assassinA = assassinA + 2};
    statsUpdate();
    rangerLeft = true;
    leftPick = true;
    rangerActive = true;
    setFalse();
    } else if (nextPaladinPicked === true) {
    $("#pickedLeft").css("background-image", "url(assets/images/paladinpic.jpg)")
    $("#nextPaladin").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    $(".pickLeftInfo").html('Paladin: '+paladinA+'/'+paladinH);
    if(knightActive === true){knightH = knightH + 2};
    if(wizardActive === true){wizardH = wizardH + 2};
    if(assassinActive === true){assassinH = assassinH + 2};
    if(rangerActive === true){rangerH = rangerH + 2};
    statsUpdate();
    paladinLeft = true;
    leftPick = true;
    paladinActive = true;
    setFalse();
    } else if (nextAssassinPicked === true) {
    $("#pickedLeft").css("background-image", "url(assets/images/assassinpic.jpg)")
    $("#nextAssassin").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    $(".pickLeftInfo").html('Assassin: '+assassinA+'/'+assassinH);
    if(knightActive === true){randomNumber = Math.ceil(Math.random()*100); if(randomNumber <= 35){knightAttackCount++};};
    console.log(randomNumber);
    if(wizardActive === true){randomNumber = Math.ceil(Math.random()*100); if(randomNumber <= 35){wizardA + 2; wizardAttackCount = wizardA;};};
    console.log(randomNumber);
    if(paladinActive === true){randomNumber = Math.ceil(Math.random()*100); if(randomNumber <= 35){paladinAttackCount++};};
    console.log(randomNumber);
    if(rangerActive === true){randomNumber = Math.ceil(Math.random()*100); if(randomNumber <= 35){rangerAttackCount++};};
    console.log(randomNumber);
    statsUpdate();
    assassinLeft = true;
    leftPick = true;
    assassinActive = true;
    setFalse();
    };
    };

 
    if(attackPhase === true && rangerLeft === true && rangerAttackCount > 0
        && knightAttacking === false && wizardAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        rangerAttacking = true;
        $("#pickedLeft").css("border", "3px solid red");
    };

    if(attackPhase === true && knightLeft === true && knightAttackCount > 0
        && rangerAttacking === false && wizardAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        knightAttacking = true;
        $("#pickedLeft").css("border", "3px solid red");
    };

    if(attackPhase === true && wizardLeft === true && wizardAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        wizardAttacking = true;
        $("#pickedLeft").css("border", "3px solid red");
    };

    if(attackPhase === true && paladinLeft === true && paladinAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && wizardAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        paladinAttacking = true;
        $("#pickedLeft").css("border", "3px solid red");
    };

    if(attackPhase === true && assassinLeft === true && assassinAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && paladinAttacking === false && wizardAttacking === false){
        console.log('Id like to attack plz');
        assassinAttacking = true;
        $("#pickedLeft").css("border", "3px solid red");
    };
    if(pickPhase === true && leftPick === true && rightPick === true && centerPick === true){
        $("#pickTimeBtn").css("display", "initial");
    }; 
});


$("#pickedCenter").click(function(){ // player picks what hero is in the center
    console.log("pickedCenter button clicked");
    if (centerPick === false && pickPhase === true) {
    if (nextKnightPicked === true) {
    $("#pickedCenter").css("background-image", "url(assets/images/knightpic.jpg)")
    $("#nextKnight").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    knightH = knightH + Math.ceil(Math.random()*3+1); 
    $(".pickCenterInfo").html('Knight: '+knightA+'/'+knightH);
    knightCenter = true;
    centerPick = true;
    knightActive = true;
    setFalse();
    } else if (nextWizardPicked === true) {
    $("#pickedCenter").css("background-image", "url(assets/images/wizardpic.jpeg)")
    $("#nextWizard").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    wizardH = wizardH + Math.ceil(Math.random()*3); 
    $(".pickCenterInfo").html('Wizard: '+wizardA+'/'+wizardH);
    wizardCenter = true;
    centerPick = true;
    wizardActive = true;
    setFalse();
    } else if (nextRangerPicked === true) {
    $("#pickedCenter").css("background-image", "url(assets/images/rangerpic.jpg)")
    $("#nextRanger").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    rangerH = rangerH + Math.ceil(Math.random()*3);
    $(".pickCenterInfo").html('Ranger: '+rangerA+'/'+rangerH);
    rangerCenter = true;
    centerPick = true;
    rangerActive = true;
    setFalse();
    } else if (nextPaladinPicked === true) {
    $("#pickedCenter").css("background-image", "url(assets/images/paladinpic.jpg)")
    $("#nextPaladin").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    paladinH = paladinH + Math.ceil(Math.random()*4+1);
    $(".pickCenterInfo").html('Paladin: '+paladinA+'/'+paladinH);
    paladinCenter = true;
    centerPick = true;
    paladinActive = true;
    setFalse();
    } else if (nextAssassinPicked === true) {
    $("#pickedCenter").css("background-image", "url(assets/images/assassinpic.jpg)")
    $("#nextAssassin").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    assassinH = assassinH + Math.ceil(Math.random()*3);
    $(".pickCenterInfo").html('Assassin: '+assassinA+'/'+assassinH);
    assassinCenter = true;
    centerPick = true;
    assassinActive = true;
    setFalse();
    };
    };

    if(attackPhase === true && rangerCenter === true && rangerAttackCount > 0
        && knightAttacking === false && wizardAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        rangerAttacking = true;
        $("#pickedCenter").css("border", "3px solid red");
    };
    
    if(attackPhase === true && knightCenter === true && knightAttackCount > 0
        && rangerAttacking === false && wizardAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        knightAttacking = true;
        $("#pickedCenter").css("border", "3px solid red");
    };
    
    if(attackPhase === true && wizardCenter === true && wizardAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        wizardAttacking = true;
        $("#pickedCenter").css("border", "3px solid red");
    };
    
    if(attackPhase === true && paladinCenter === true && paladinAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && wizardAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        paladinAttacking = true;
        $("#pickedCenter").css("border", "3px solid red");
    };
    
    if(attackPhase === true && assassinCenter === true && assassinAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && paladinAttacking === false && wizardAttacking === false){
        console.log('Id like to attack plz');
        assassinAttacking = true;
        $("#pickedCenter").css("border", "3px solid red");
    };
    if(pickPhase === true && leftPick === true && rightPick === true && centerPick === true){
        $("#pickTimeBtn").css("display", "initial");
    };
});

$("#pickedRight").click(function(){ // player picks what hero is on the right
    console.log("pickedRight button clicked");
    if (rightPick === false && pickPhase === true) {
    if (nextKnightPicked === true) {
    $("#pickedRight").css("background-image", "url(assets/images/knightpic.jpg)")
    $("#nextKnight").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    knightA = knightA + Math.ceil(Math.random()*3);
    $(".pickRightInfo").html('Knight: '+knightA+'/'+knightH);
    knightRight = true;
    rightPick = true;
    knightActive = true;
    setFalse();
    } else if (nextWizardPicked === true) {
    $("#pickedRight").css("background-image", "url(assets/images/wizardpic.jpeg)")
    $("#nextWizard").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    wizardA = wizardA + Math.ceil(Math.random()*3);
    wizardAttackCount = wizardA;
    $(".pickRightInfo").html('Wizard: '+wizardA+'/'+wizardH);
    wizardRight = true;
    rightPick = true;
    wizardActive = true;
    setFalse();
    } else if (nextRangerPicked === true) {
    $("#pickedRight").css("background-image", "url(assets/images/rangerpic.jpg)")
    $("#nextRanger").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    rangerA = rangerA + Math.ceil(Math.random()*3);
    $(".pickRightInfo").html('Ranger: '+rangerA+'/'+rangerH);
    rangerRight = true;
    rightPick = true;
    rangerActive = true;
    setFalse();
    } else if (nextPaladinPicked === true) {
    $("#pickedRight").css("background-image", "url(assets/images/paladinpic.jpg)")
    $("#nextPaladin").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    paladinA = paladinA + Math.ceil(Math.random()*3);
    $(".pickRightInfo").html('Paladin: '+paladinA+'/'+paladinH);
    paladinRight = true;
    rightPick = true;
    paladinActive = true;
    setFalse();
    } else if (nextAssassinPicked === true) {
    $("#pickedRight").css("background-image", "url(assets/images/assassinpic.jpg)")
    $("#nextAssassin").css("visibility","hidden");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    assassinA = assassinA + Math.ceil(Math.random()*4);
    $(".pickRightInfo").html('Assassin: '+assassinA+'/'+assassinH);
    assassinRight = true;
    rightPick = true;
    assassinActive = true;
    setFalse();
    
    };
    };
    
    if(attackPhase === true && rangerRight === true && rangerAttackCount > 0
        && knightAttacking === false && wizardAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        rangerAttacking = true;
        $("#pickedRight").css("border", "3px solid red");
    };
    
    if(attackPhase === true && knightRight === true && knightAttackCount > 0
        && rangerAttacking === false && wizardAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        knightAttacking = true;
        $("#pickedRight").css("border", "3px solid red");
    };
    
    if(attackPhase === true && wizardRight === true && wizardAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && paladinAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        wizardAttacking = true;
        $("#pickedRight").css("border", "3px solid red");
    };
    
    if(attackPhase === true && paladinRight === true && paladinAttackCount > 0
        && rangerAttacking === false && knightAttacking === false 
        && wizardAttacking === false && assassinAttacking === false){
        console.log('Id like to attack plz');
        paladinAttacking = true;
        $("#pickedRight").css("border", "3px solid red");
    };
    
    if(attackPhase === true && assassinRight === true && assassinAttackCount > 0 
        && rangerAttacking === false && knightAttacking === false 
        && paladinAttacking === false && wizardAttacking === false){
        console.log('Id like to attack plz');
        console.log()
        assassinAttacking = true;
        $("#pickedRight").css("border", "3px solid red");
    };
    if(pickPhase === true && leftPick === true && rightPick === true && centerPick === true){
        $("#pickTimeBtn").css("display", "initial");
    };
});




function statsUpdate(){ // updates Visable Unit Stats for user
    if (knightCenter === true){
        $(".pickCenterInfo").html('Knight: '+knightA+'/'+knightH);
    } else if (rangerCenter === true){
        $(".pickCenterInfo").html('Ranger: '+rangerA+'/'+rangerH);
    } else if (wizardCenter === true){
        $(".pickCenterInfo").html('Wizard: '+wizardA+'/'+wizardH);
    } else if (paladinCenter === true){
        $(".pickCenterInfo").html('Paladin: '+paladinA+'/'+paladinH);
    } else if (assassinCenter === true){
        $(".pickCenterInfo").html('Assasin: '+assassinA+'/'+assassinH);
    };

    if (knightRight === true){
        $(".pickRightInfo").html('Knight: '+knightA+'/'+knightH);
    } else if (rangerRight === true){
        $(".pickRightInfo").html('Ranger: '+rangerA+'/'+rangerH);
    } else if (wizardRight === true){
        $(".pickRightInfo").html('Wizard: '+wizardA+'/'+wizardH);
    } else if (paladinRight === true){
        $(".pickRightInfo").html('Paladin: '+paladinA+'/'+paladinH);
    } else if (assassinRight === true){
        $(".pickRightInfo").html('Assasin: '+assassinA+'/'+assassinH);
    };

    if (knightLeft === true){
        $(".pickLeftInfo").html('Knight: '+knightA+'/'+knightH);
    } else if (rangerLeft === true){
        $(".pickLeftInfo").html('Ranger: '+rangerA+'/'+rangerH);
    } else if (wizardLeft === true){
        $(".pickLeftInfo").html('Wizard: '+wizardA+'/'+wizardH);
    } else if (paladinLeft === true){
        $(".pickLeftInfo").html('Paladin: '+paladinA+'/'+paladinH);
    } else if (assassinLeft === true){
        $(".pickLeftInfo").html('Assasin: '+assassinA+'/'+assassinH);
    };

    $(".nextKnightInfo").html('Knight: '+knightA+'/'+knightH);
    $(".nextWizardInfo").html('Wizard: '+wizardA+'/'+wizardH);
    $(".nextRangerInfo").html('Ranger: '+rangerA+'/'+rangerH);
    $(".nextPaladinInfo").html('Paladin: '+paladinA+'/'+paladinH);
    $(".nextAssassinInfo").html('Assassin: '+assassinA+'/'+assassinH);

    $(".oneEInfo").html( newNameOne+': '+oneEA+'/'+oneEH);
    $(".twoEInfo").html(newNameTwo+': '+twoEA+'/'+twoEH);
    $(".threeEInfo").html(newNameThree+': '+threeEA+'/'+threeEH);
    $(".fourEInfo").html(newNameFour+': '+fourEA+'/'+fourEH);
    $(".fiveEInfo").html(newNameFive+': '+fiveEA+'/'+fiveEH);
    $(".sixEInfo").html(newNameSeven+': '+sixEA+'/'+sixEH);
    $(".sevenEInfo").html(newNameSeven+': '+sevenEA+'/'+sevenEH);
};


function setFalse(){ // sets all picks to false when active slot is chosen
    nextKnightPicked = false;
    nextWizardPicked = false;
    nextRangerPicked = false;
    nextPaladinPicked = false;
    nextAssassinPicked = false;
};


$("#nextKnight").click(function(){ // Knight Selector Function
    console.log("nextKnight has been clicked");
    if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false  && pickPhase === true){
    nextKnightPicked = true;
    $("#nextKnight").css("opacity", ".5");
    $("#pickedLeft").css("border", "3px solid green");
    $("#pickedCenter").css("border", "3px solid green");
    $("#pickedRight").css("border", "3px solid green");
    } else if(nextKnightPicked === true && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false  && pickPhase === true){
    $("#nextKnight").css("opacity", "1");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    nextKnightPicked = false;
    };
    
});

$("#nextWizard").click(function(){ // Wizard Selector Function
    console.log("nextWizard has been clicked");
    if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    nextWizardPicked = true;
    $("#nextWizard").css("opacity", ".5");
    $("#pickedLeft").css("border", "3px solid green");
    $("#pickedCenter").css("border", "3px solid green");
    $("#pickedRight").css("border", "3px solid green");
    } else if(nextKnightPicked === false && nextWizardPicked === true
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    $("#nextWizard").css("opacity", "1");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    nextWizardPicked = false;
    };
    
});

$("#nextRanger").click(function(){ // Rnager Selector Function
    console.log("nextRanger has been clicked");
    if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    nextRangerPicked = true;
    $("#nextRanger").css("opacity", ".5");
    $("#pickedLeft").css("border", "3px solid green");
    $("#pickedCenter").css("border", "3px solid green");
    $("#pickedRight").css("border", "3px solid green");
    } else if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === true && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    $("#nextRanger").css("opacity", "1");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    nextRangerPicked = false;
    };
    
});

$("#nextPaladin").click(function(){ // Paladin Selector Function
    console.log("nextPaladin has been clicked");
    if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    nextPaladinPicked = true;
    $("#nextPaladin").css("opacity", ".5");
    $("#pickedLeft").css("border", "3px solid green");
    $("#pickedCenter").css("border", "3px solid green");
    $("#pickedRight").css("border", "3px solid green");
    } else if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === true
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    $("#nextPaladin").css("opacity", "1");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    nextPaladinPicked = false;
    };
    
});

$("#nextAssassin").click(function(){ // Assassin Selector Function
    console.log("nextAssassin has been clicked");
    if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === false && startMenu === false && pickPhase === true){
    nextAssassinPicked = true;
    $("#nextAssassin").css("opacity", ".5");
    $("#pickedLeft").css("border", "3px solid green");
    $("#pickedCenter").css("border", "3px solid green");
    $("#pickedRight").css("border", "3px solid green");
    } else if(nextKnightPicked === false && nextWizardPicked === false
        && nextRangerPicked === false && nextPaladinPicked === false
         && nextAssassinPicked === true && startMenu === false && pickPhase === true) {
    $("#nextAssassin").css("opacity", "1");
    $("#pickedLeft").css("border", "3px solid black");
    $("#pickedCenter").css("border", "3px solid black");
    $("#pickedRight").css("border", "3px solid black");
    nextAssassinPicked = false;
    };
    
});

//------------------------------------------------------------------------------

$("#badOne").click(function(){
    console.log('1');
    if(rangerAttacking === true){
        oneEH = oneEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        oneEH = oneEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };

    if(wizardAttacking === true){
        oneEH = oneEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };

    if(paladinAttacking === true){
        oneEH = oneEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };

    if(assassinAttacking === true){
        oneEH = oneEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(oneEH <= 0){
        $("#badOne").css("visibility", "hidden");
        oneE = false;
    };
});
$("#badTwo").click(function(){
    console.log("2");
    if(rangerAttacking === true){
        twoEH = twoEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        twoEH = twoEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(wizardAttacking === true){
        twoEH = twoEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(paladinAttacking === true){
        twoEH = twoEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(assassinAttacking === true){
        twoEH = twoEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(twoEH <= 0){
        $("#badTwo").css("visibility", "hidden");
        twoE = false;
    };
});
$("#badThree").click(function(){
    console.log("3");
    if(rangerAttacking === true){
        threeEH = threeEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        threeEH = threeEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(wizardAttacking === true){
        threeEH = threeEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(paladinAttacking === true){
        threeEH = threeEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(assassinAttacking === true){
        threeEH = threeEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    if(threeEH <= 0){
        $("#badThree").css("visibility", "hidden");
        threeE = false;
    };
});
$("#badFour").click(function(){
    console.log("4");
    if(rangerAttacking === true){
        fourEH = fourEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        fourEH = fourEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(wizardAttacking === true){
        fourEH = fourEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(paladinAttacking === true){
        fourEH = fourEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(assassinAttacking === true){
        fourEH = fourEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(fourEH <= 0){
        $("#badFour").css("visibility", "hidden");
        fourE = false;
    };
});
$("#badFive").click(function(){
    console.log("5");
    if(rangerAttacking === true){
        fiveEH = fiveEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        fiveEH = fiveEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(wizardAttacking === true){
        fiveEH = fiveEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(paladinAttacking === true){
        fiveEH = fiveEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(assassinAttacking === true){
        fiveEH = fiveEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(fiveEH <= 0){
        $("#badFive").css("visibility", "hidden");
        fiveE = false;
    };
});
$("#badSix").click(function(){
    console.log("6");
    if(rangerAttacking === true){
        sixEH = sixEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        sixEH = sixEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(wizardAttacking === true){
        sixEH = sixEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(paladinAttacking === true){
        sixEH = sixEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(assassinAttacking === true){
        sixEH = sixEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(sixEH <= 0){
        $("#badSix").css("visibility", "hidden");
        sixE = false;
    };
});
$("#badSeven").click(function(){
    console.log("7");
    if(rangerAttacking === true){
        sevenEH = sevenEH - rangerA;
        statsUpdate();
        rangerAttackCount--;
        if(rangerAttackCount <= 0){
            rangerAttacking = false;            
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(knightAttacking === true){
        sevenEH = sevenEH - knightA;
        statsUpdate();
        knightAttackCount--;
        if(knightAttackCount <= 0){
            knightAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(wizardAttacking === true){
        sevenEH = sevenEH - 1;
        wizardA--;
        statsUpdate();
        wizardAttackCount--;
        wizardAttackCount = wizardA;
        if(wizardAttackCount <= 0){
            wizardAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(paladinAttacking === true){
        sevenEH = sevenEH - paladinA;
        statsUpdate();
        paladinAttackCount--;
        if(paladinAttackCount <= 0){
            paladinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    
    if(assassinAttacking === true){
        sevenEH = sevenEH - assassinA;
        statsUpdate();
        assassinAttackCount--;
        if(assassinAttackCount <= 0){
            assassinAttacking = false;
            $("#pickedLeft").css("border", "3px solid black");
            $("#pickedCenter").css("border", "3px solid black");
            $("#pickedRight").css("border", "3px solid black");
            
        };
    };
    //
    if(sevenEH <= 0){
        $("#badSeven").css("visibility", "hidden");
        sevenE = false;
    };
});

$("#pickTimeBtn").click(function(){
    picktimebutton = true;
    sec = 4;
    setTimeout(() => {
        picktimebutton = false;
    }, 500);
});

$("#attackTimeBtn").click(function(){
    attacktimebutton = true;
    secA = 4;
    setTimeout(() => {
        attacktimebutton = false;
        console.log(attacktimebutton)
    }, 500);
});

function softEnrage(){
    if(oneE === true){
        oneEA += 1;
        oneEH += 1;
    };
    if(twoE === true){
        twoEA += 1;
        twoEH += 1;
    };
    if(threeE === true){
        threeEA += 1;
        threeEH += 1;
    };
    if(fourE === true){
        fourEA += 1;
        fourEH += 1;
    };
    if(fiveE === true){
        fiveEA += 1;
        fiveEH += 1;
    };
    if(sixE === true){
        sixEA += 1;
        sixEH += 1;
    };
    if(sevenE === true){
        sevenEA += 1;
        sevenEH += 1;
    };
    statsUpdate();
};

function upcomingWave(){
        if (sec === 1 && waveWaiting === false){
        waveWaiting = true;
        oneW = Math.ceil(Math.random()*100);
        twoW = Math.ceil(Math.random()*100);
        threeW = Math.ceil(Math.random()*100);
        fourW = Math.ceil(Math.random()*100);
        fiveW = Math.ceil(Math.random()*100);
        sixW = Math.ceil(Math.random()*100);
        sevenW = Math.ceil(Math.random()*100);
            if(oneW <=80){
            console.log('Monster in new wave'); 
            $("#nextOne").css("visibility", "visible");
            oneW = true;
            if(oneW === true){
                oneW = Math.ceil(Math.random()*turnCounter)
                oneWA = oneW;
                oneW = Math.ceil(Math.random()*turnCounter)
                oneWH = oneW;
                console.log(oneWA+'/'+oneWH);
                if(oneWH > 12 || oneWA > 12){
                    $(".oneWInfo").html('Lord: '+oneWA+'/'+oneWH);
                    $("#nextOne").css("background-image", "url(assets/images/lordpic.jpg)");
                    oneW = "lord";
                    } else if(oneWH > 9 || oneWA > 9){
                    $(".oneWInfo").html('Reaper: '+oneWA+'/'+oneWH);
                    $("#nextOne").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    oneW = "reaper";
                } else if(oneWH > 6 || oneWA > 6){
                    $(".oneWInfo").html('Beserker: '+oneWA+'/'+oneWH);
                    $("#nextOne").css("background-image", "url(assets/images/demonpic.png)");
                    oneW = "beserker";
                } else if(oneWH > 3 || oneWA > 3){
                    $(".oneWInfo").html('Hellhound: '+oneWA+'/'+oneWH);
                    $("#nextOne").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    oneW = "hellhound";
                }else if (oneWH > 0 || oneWA > 0) {
                    $(".oneWInfo").html('Zombie: '+oneWA+'/'+oneWH);
                    $("#nextOne").css("background-image", "url(assets/images/zombiewar.jpg)");
                    oneW = "zombie";
                };
            };
        };
            if(twoW <=80){
            console.log('Monster in new wave'); 
            $("#nextTwo").css("visibility", "visible");
            twoW = true;
            if(twoW === true){
                twoW = Math.ceil(Math.random()*turnCounter)
                twoWA = twoW;
                twoW = Math.ceil(Math.random()*turnCounter)
                twoWH = twoW;
                console.log(twoWA+'/'+twoWH);
                if(twoWH > 12 || twoWA > 12){
                    $(".twoWInfo").html('Lord: '+twoWA+'/'+twoWH);
                    $("#nextTwo").css("background-image", "url(assets/images/lordpic.jpg)");
                     twoW = "lord";
                } else if(twoWH > 9 || twoWA > 9){
                    $(".twoWInfo").html('Reaper: '+twoWA+'/'+twoWH);
                    $("#nextTwo").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    twoW = "reaper";
                } else if(twoWH > 6 || twoWA > 6){
                    $(".twoWInfo").html('Beserker: '+twoWA+'/'+twoWH);
                    $("#nextTwo").css("background-image", "url(assets/images/demonpic.png)");
                    twoW = "beserker";
                } else if(twoWH > 3 || twoWA > 3){
                    $(".twoWInfo").html('Hellhound: '+twoWA+'/'+twoWH);
                    $("#nextTwo").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    twoW = "hellhound";
                }else if (twoWH > 0 || twoWA > 0) {
                    $(".twoWInfo").html('Zombie: '+twoWA+'/'+twoWH);
                    $("#nextTwo").css("background-image", "url(assets/images/zombiewar.jpg)");
                    twoW = "zombie";
                };
            };
        };
            if(threeW <=80){
            console.log('Monster in new wave'); 
            $("#nextThree").css("visibility", "visible");
            threeW = true;
            if(threeW === true){
                threeW = Math.ceil(Math.random()*turnCounter)
                threeWA = threeW;
                threeW = Math.ceil(Math.random()*turnCounter)
                threeWH = threeW;
                console.log(threeWA+'/'+threeWH);
                if(threeWH > 12 || threeWA > 12){
                    $(".threeWInfo").html('Lord: '+threeWA+'/'+threeWH);
                    $("#nextThree").css("background-image", "url(assets/images/lordpic.jpg)");
                    threeW = "lord";
                } else if(threeWH > 9 || threeWA > 9){
                    $(".threeWInfo").html('Reaper: '+threeWA+'/'+threeWH);
                    $("#nextThree").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    threeW = "reaper";
                } else if(threeWH > 6 || threeWA > 6){
                    $(".threeWInfo").html('Beserker: '+threeWA+'/'+threeWH);
                    $("#nextThree").css("background-image", "url(assets/images/demonpic.png)");
                    threeW = "beserker";
                } else if(threeWH > 3 || threeWA > 3){
                    $(".threeWInfo").html('Hellhound: '+threeWA+'/'+threeWH);
                    $("#nextThree").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    threeW = "hellhound";
                }else if (threeWH > 0 || threeWA > 0) {
                    $(".threeWInfo").html('Zombie: '+threeWA+'/'+threeWH);
                    $("#nextThree").css("background-image", "url(assets/images/zombiewar.jpg)");
                    threeW = "zombie";
                };
            };
        };
            if(fourW <=70){
            console.log('Monster in new wave'); 
            $("#nextFour").css("visibility", "visible");
            fourW = true;
            if(fourW === true){
                fourW = Math.ceil(Math.random()*turnCounter)
                fourWA = fourW;
                fourW = Math.ceil(Math.random()*turnCounter)
                fourWH = fourW;
                console.log(fourWA+'/'+fourWH);
                if(fourWH > 12 || fourWA > 12){
                    $(".fourWInfo").html('Lord: '+fourWA+'/'+fourWH);
                    $("#nextFour").css("background-image", "url(assets/images/lordpic.jpg)");
                    fourW = "lord";
                } else if(fourWH > 9 || fourWA > 9){
                    $(".fourWInfo").html('Reaper: '+fourWA+'/'+fourWH);
                    $("#nextFour").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    fourW = "reaper";
                } else if(fourWH > 6 || fourWA > 6){
                    $(".fourWInfo").html('Beserker: '+fourWA+'/'+fourWH);
                    $("#nextFour").css("background-image", "url(assets/images/demonpic.png)");
                    fourW = "beserker";
                } else if(fourWH > 3 || fourWA > 3){
                    $(".fourWInfo").html('Hellhound: '+fourWA+'/'+fourWH);
                    $("#nextFour").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    fourW = "hellhound";
                }else if (fourWH > 0 || fourWA > 0) {
                    $(".fourWInfo").html('Zombie: '+fourWA+'/'+fourWH);
                    $("#nextFour").css("background-image", "url(assets/images/zombiewar.jpg)");
                    fourW = "zombie";
                };
            };
        };
            if(fiveW <=70){
            console.log('Monster in new wave'); 
            $("#nextFive").css("visibility", "visible");
            fiveW = true;
                if(fiveW === true){
                fiveW = Math.ceil(Math.random()*turnCounter)
                fiveWA = fiveW;
                fiveW = Math.ceil(Math.random()*turnCounter)
                fiveWH = fiveW;
                console.log(fiveWA+'/'+fiveWH);
                if(fiveWH > 12 || fiveWA > 12){
                    $(".fiveWInfo").html('Lord: '+fiveWA+'/'+fiveWH);
                    $("#nextFive").css("background-image", "url(assets/images/lordpic.jpg)");
                    fiveW = "lord";
                } else if(fiveWH > 9 || fiveWA > 9){
                    $(".fiveWInfo").html('Reaper: '+fiveWA+'/'+fiveWH);
                    $("#nextFive").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    fiveW = "reaper";
                } else if(fiveWH > 6 || fiveWA > 6){
                    $(".fiveWInfo").html('Beserker: '+fiveWA+'/'+fiveWH);
                    $("#nextFive").css("background-image", "url(assets/images/demonpic.png)");
                    fiveW = "beserker";
                } else if(fiveWH > 3 || fiveWA > 3){
                    $(".fiveWInfo").html('Hellhound: '+fiveWA+'/'+fiveWH);
                    $("#nextFive").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    fiveW = "hellhound";
                }else if (fiveWH > 0 || fiveWA > 0) {
                    $(".fiveWInfo").html('Zombie: '+fiveWA+'/'+fiveWH);
                    $("#nextFive").css("background-image", "url(assets/images/zombiewar.jpg)");
                    fiveW = "zombie";
                };
            };
        };

            if(sixW <=70){
            console.log('Monster in new wave'); 
            $("#nextSix").css("visibility", "visible");
            sixW = true;
                if(sixW === true){
                sixW = Math.ceil(Math.random()*turnCounter)
                sixWA = sixW;
                sixW = Math.ceil(Math.random()*turnCounter)
                sixWH = sixW;
                console.log(sixWA+'/'+sixWH);
                if(sixWH > 12 || sixWA > 12){
                    $(".sixWInfo").html('Lord: '+sixWA+'/'+sixWH);
                    $("#nextSix").css("background-image", "url(assets/images/lordpic.jpg)");
                    sixW = "lord";
                } else if(sixWH > 9 || sixWA > 9){
                    $(".sixWInfo").html('Reaper: '+sixWA+'/'+sixWH);
                    $("#nextSix").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    sixW = "reaper";
                } else if(sixWH > 6 || sixWA > 6){
                    $(".sixWInfo").html('Beserker: '+sixWA+'/'+sixWH);
                    $("#nextSix").css("background-image", "url(assets/images/demonpic.png)");
                    sixW = "beserker";
                } else if(sixWH > 3 || sixWA > 3){
                    $(".sixWInfo").html('Hellhound: '+sixWA+'/'+sixWH);
                    $("#nextSix").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    sixW = "hellhound";
                }else if (sixWH > 0 || sixWA > 0) {
                    $(".sixWInfo").html('Zombie: '+sixWA+'/'+sixWH);
                    $("#nextSix").css("background-image", "url(assets/images/zombiewar.jpg)");
                    sixW = "zombie";
                };
            };
        };

            if(sevenW <=70){
            console.log('Monster in new wave'); 
            $("#nextSeven").css("visibility", "visible");
            sevenW = true;
                if(sevenW === true){
                sevenW = Math.ceil(Math.random()*turnCounter)
                sevenWA = sevenW;
                sevenW = Math.ceil(Math.random()*turnCounter)
                sevenWH = sevenW;
                console.log(sevenWA+'/'+sevenWH);
                if(sevenWH > 12 || sevenWA > 12){
                    $(".sevenWInfo").html('Lord: '+sevenWA+'/'+sevenWH);
                    $("#nextSeven").css("background-image", "url(assets/images/lordpic.jpg)");
                    sevenW = "lord";
                } else if(sevenWH > 9 || sevenWA > 9){
                    $(".sevenWInfo").html('Reaper: '+sevenWA+'/'+sevenWH);
                    $("#nextSeven").css("background-image", "url(assets/images/skelkingpic.jpg)");
                    sevenW = "reaper";
                } else if(sevenWH > 6 || sevenWA > 6){
                    $(".sevenWInfo").html('Beserker: '+sevenWA+'/'+sevenWH);
                    $("#nextSeven").css("background-image", "url(assets/images/demonpic.png)");
                    sevenW = "beserker";
                } else if(sevenWH > 3 || sevenWA > 3){
                    $(".sevenWInfo").html('Hellhound: '+sevenWA+'/'+sevenWH);
                    $("#nextSeven").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                    sevenW = "hellhound";
                }else if (sevenWH > 0 || sevenWA > 0) {
                    $(".sevenWInfo").html('Zombie: '+sevenWA+'/'+sevenWH);
                    $("#nextSeven").css("background-image", "url(assets/images/zombiewar.jpg)");
                    sevenW = "zombie";
                };
            };
        };
    };
};

function newNames(){
    if (oneE === false && oneW === "lord"){newNameOne = oneW};
    if (oneE === false && oneW === "reaper"){newNameOne = oneW};
    if (oneE === false && oneW === "beserker"){newNameOne = oneW};
    if (oneE === false && oneW === "hellhound"){newNameOne = oneW};
    if (oneE === false && oneW === "zombie"){newNameOne = oneW};
    if (twoE === false && twoW === "lord"){newNameTwo = twoW};
    if (twoE === false && twoW === "reaper"){newNameTwo = twoW};
    if (twoE === false && twoW === "beserker"){newNameTwo = twoW};
    if (twoE === false && twoW === "hellhound"){newNameTwo = twoW};
    if (twoE === false && twoW === "zombie"){newNameTwo = twoW};
    if (threeE === false && threeW === "lord"){newNameThree = threeW};
    if (threeE === false && threeW === "reaper"){newNameThree = threeW};
    if (threeE === false && threeW === "beserker"){newNameThree = threeW};
    if (threeE === false && threeW === "hellhound"){newNameThree = threeW};
    if (threeE === false && threeW === "zombie"){newNameThree = threeW};
    if (fourE === false && fourW === "lord"){newNameFour = fourW};
    if (fourE === false && fourW === "reaper"){newNameFour = fourW};
    if (fourE === false && fourW === "beserker"){newNameFour = fourW};
    if (fourE === false && fourW === "hellhound"){newNameFour = fourW};
    if (fourE === false && fourW === "zombie"){newNameFour = fourW};
    if (fiveE === false && fiveW === "lord"){newNameFive = fiveW};
    if (fiveE === false && fiveW === "reaper"){newNameFive = fiveW};
    if (fiveE === false && fiveW === "beserker"){newNameFive = fiveW};
    if (fiveE === false && fiveW === "hellhound"){newNameFive = fiveW};
    if (fiveE === false && fiveW === "zombie"){newNameFive = fiveW};
    if (sixE === false && sixW === "lord"){newNameSix = sixW};
    if (sixE === false && sixW === "reaper"){newNameSix = sixW};
    if (sixE === false && sixW === "beserker"){newNameSix = sixW};
    if (sixE === false && sixW === "hellhound"){newNameSix = sixW};
    if (sixE === false && sixW === "zombie"){newNameSix = sixW};
    if (sevenE === false && sevenW === "lord"){newNameSeven = sevenW};
    if (sevenE === false && sevenW === "reaper"){newNameSeven = sevenW};
    if (sevenE === false && sevenW === "beserker"){newNameSeven = sevenW};
    if (sevenE === false && sevenW === "hellhound"){newNameSeven = sevenW};
    if (sevenE === false && sevenW === "zombie"){newNameSeven = sevenW};   
};

function newWave(){
            softEnrage();
            newNames();
            console.log(newNameOne, newNameTwo, newNameThree, newNameFour, newNameFive, newNameSix, newNameSeven);
    if(oneE === false && twoE === false && threeE === false && fourE === false 
        && fiveE === false && sixE === false && sevenE === false){
            console.log('looks like you killed everything');
            $("#nextOne").css("visibility", "hidden");
            $("#nextTwo").css("visibility", "hidden");
            $("#nextThree").css("visibility", "hidden");
            $("#nextFour").css("visibility", "hidden");
            $("#nextFive").css("visibility", "hidden");
            $("#nextSix").css("visibility", "hidden");
            $("#nextSeven").css("visibility", "hidden");
            turnCounter = turnCounter + 2;
            waveCount++;
            waveWaiting = false;
            if(oneW === 'zombie'){
                $("#badOne").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badOne").css("visibility", "visible");
                oneEH = oneWH;
                oneEA = oneWA;
                oneE = true;
            } else if(oneW === 'hellhound'){
                $("#badOne").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badOne").css("visibility", "visible");
                oneEH = oneWH;
                oneEA = oneWA;
                oneE = true;
            } else if(oneW === 'beserker'){
                $("#badOne").css("background-image", "url(assets/images/demonpic.png)");
                $("#badOne").css("visibility", "visible");
                oneEH = oneWH;
                oneEA = oneWA;
                oneE = true;
            } else if(oneW === 'reaper'){
                $("#badOne").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badOne").css("visibility", "visible");
                oneEH = oneWH;
                oneEA = oneWA;
                oneE = true;
            } else if(oneW === 'lord'){
                $("#badOne").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badOne").css("visibility", "visible");
                oneEH = oneWH;
                oneEA = oneWA;
                oneE = true;
            };

            if(twoW === 'zombie'){
                $("#badTwo").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badTwo").css("visibility", "visible");
                twoEH = twoWH;
                twoEA = twoWA;
                twoE = true;
            } else if(twoW === 'hellhound'){
                $("#badTwo").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badTwo").css("visibility", "visible");
                twoEH = twoWH;
                twoEA = twoWA;
                twoE = true;
            } else if(twoW === 'beserker'){
                $("#badTwo").css("background-image", "url(assets/images/demonpic.png)");
                $("#badTwo").css("visibility", "visible");
                twoEH = twoWH;
                twoEA = twoWA;
                twoE = true;
            } else if(twoW === 'reaper'){
                $("#badTwo").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badTwo").css("visibility", "visible");
                twoEH = twoWH;
                twoEA = twoWA;
                twoE = true;
            } else if(twoW === 'lord'){
                $("#badTwo").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badTwo").css("visibility", "visible");
                twoEH = twoWH;
                twoEA = twoWA;
                twoE = true;
            };
            if(threeW === 'zombie'){
                $("#badThree").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badThree").css("visibility", "visible");
                threeEH = threeWH;
                threeEA = threeWA;
                threeE = true;
            } else if(threeW === 'hellhound'){
                $("#badThree").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badThree").css("visibility", "visible");
                threeEH = threeWH;
                threeEA = threeWA;
                threeE = true;
            } else if(threeW === 'beserker'){
                $("#badThree").css("background-image", "url(assets/images/demonpic.png)");
                $("#badThree").css("visibility", "visible");
                threeEH = threeWH;
                threeEA = threeWA;
                threeE = true;
            } else if(threeW === 'reaper'){
                $("#badThree").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badThree").css("visibility", "visible");
                threeEH = threeWH;
                threeEA = threeWA;
                threeE = true;
            } else if(threeW === 'lord'){
                $("#badThree").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badThree").css("visibility", "visible");
                threeEH = threeWH;
                threeEA = threeWA;
                threeE = true;
            };
            if(fourW === 'zombie'){
                $("#badFour").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badFour").css("visibility", "visible");
                fourEH = fourWH;
                fourEA = fourWA;
                fourE = true;
            } else if(fourW === 'hellhound'){
                $("#badFour").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badFour").css("visibility", "visible");
                fourEH = fourWH;
                fourEA = fourWA;
                fourE = true;
            } else if(fourW === 'beserker'){
                $("#badFour").css("background-image", "url(assets/images/demonpic.png)");
                $("#badFour").css("visibility", "visible");
                fourEH = fourWH;
                fourEA = fourWA;
                fourE = true;
            } else if(fourW === 'reaper'){
                $("#badFour").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badFour").css("visibility", "visible");
                fourEH = fourWH;
                fourEA = fourWA;
                fourE = true;
            } else if(fourW === 'lord'){
                $("#badFour").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badFour").css("visibility", "visible");
                fourEH = fourWH;
                fourEA = fourWA;
                fourE = true;
            };
            if(fiveW === 'zombie'){
                $("#badFive").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badFive").css("visibility", "visible");
                fiveEH = fiveWH;
                fiveEA = fiveWA;
                fiveE = true;
            } else if(fiveW === 'hellhound'){
                $("#badFive").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badFive").css("visibility", "visible");
                fiveEH = fiveWH;
                fiveEA = fiveWA;
                fiveE = true;
            } else if(fiveW === 'beserker'){
                $("#badFive").css("background-image", "url(assets/images/demonpic.png)");
                $("#badFive").css("visibility", "visible");
                fiveEH = fiveWH;
                fiveEA = fiveWA;
                fiveE = true;
            } else if(fiveW === 'reaper'){
                $("#badFive").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badFive").css("visibility", "visible");
                fiveEH = fiveWH;
                fiveEA = fiveWA;
                fiveE = true;
            } else if(fiveW === 'lord'){
                $("#badFive").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badFive").css("visibility", "visible");
                fiveEH = fiveWH;
                fiveEA = fiveWA;
                fiveE = true;
            };
            if(sixW === 'zombie'){
                $("#badSix").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badSix").css("visibility", "visible");
                sixEH = sixWH;
                sixEA = sixWA;
                sixE = true;
            } else if(sixW === 'hellhound'){
                $("#badSix").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badSix").css("visibility", "visible");
                sixEH = sixWH;
                sixEA = sixWA;
                sixE = true;
            } else if(sixW === 'beserker'){
                $("#badSix").css("background-image", "url(assets/images/demonpic.png)");
                $("#badSix").css("visibility", "visible");
                sixEH = sixWH;
                sixEA = sixWA;
                sixE = true;
            } else if(sixW === 'reaper'){
                $("#badSix").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badSix").css("visibility", "visible");
                sixEH = sixWH;
                sixEA = sixWA;
                sixE = true;
            } else if(sixW === 'lord'){
                $("#badSix").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badSix").css("visibility", "visible");
                sixEH = sixWH;
                sixEA = sixWA;
                sixE = true;
            };
            if(sevenW === 'zombie'){
                $("#badSeven").css("background-image", "url(assets/images/zombiewar.jpg)");
                $("#badSeven").css("visibility", "visible");
                sevenEH = sevenWH;
                sevenEA = sevenWA;
                sevenE = true;
            } else if(sevenW === 'hellhound'){
                $("#badSeven").css("background-image", "url(assets/images/hellhoundpic.jpg)");
                $("#badSeven").css("visibility", "visible");
                sevenEH = sevenWH;
                sevenEA = sevenWA;
                sevenE = true;
            } else if(sevenW === 'beserker'){
                $("#badSeven").css("background-image", "url(assets/images/demonpic.png)");
                $("#badSeven").css("visibility", "visible");
                sevenEH = sevenWH;
                sevenEA = sevenWA;
                sevenE = true;
            } else if(sevenW === 'reaper'){
                $("#badSeven").css("background-image", "url(assets/images/skelkingpic.jpg)");
                $("#badSeven").css("visibility", "visible");
                sevenEH = sevenWH;
                sevenEA = sevenWA;
                sevenE = true;
            } else if(sevenW === 'lord'){
                $("#badSeven").css("background-image", "url(assets/images/lordpic.jpg)");
                $("#badSeven").css("visibility", "visible");
                sevenEH = sevenWH;
                sevenEA = sevenWA;
                sevenE = true;
            };
            
            

            statsUpdate();
        };
    
    

};

});