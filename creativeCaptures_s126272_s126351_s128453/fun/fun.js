// Select Start Button
document.querySelector(".control-buttons span").onclick = function () { //when click button ==>implement this function
    document.querySelector(".control-buttons").remove(); // Remove cover Screen
};
  
// Select cards Container
let cardContainer = document.querySelector(".memory-game-blocks");
// Create Array From Game cards
let cards = Array.from(cardContainer.children); //form => convert attribute to array //.children ==> لأنه احنا تريد العناصر بداخل هذا الدف الكبير
let order_Range = Array.from(Array(cards.length).keys()); //Create array has (length)number of elements ==> this element is key ==>this key is index

//call  shuffle function to make random array
shuffle(order_Range);

// Function to add Order Css Property To Game cards
cards.forEach((card, index) => {
    card.style.order = order_Range[index]; //add order property to css style
    //add event ==> click then implement function
    card.addEventListener('click', function () {
        flipBlock(card); }); //call function of flip card
});

// Flip Block Function
function flipBlock(selectedCard) {
    selectedCard.classList.add('is-flipped');// Add Class ==> is-flipped
    // Collect All Flipped Cards
    //each card we will click it add to function and add class to it
    let allFlippedCards = cards.filter(flippedCard => flippedCard.classList.contains('is-flipped'));
    // If  Two Selected card
    if (allFlippedCards.length === 2) {
        // Stop click 
        stopClicking();//call function
        checkMatchedBlocks(allFlippedCards[0], allFlippedCards[1]); //function  Check if the tow cards is same or no
    }
}

// Stop Clicking Function
let duration = 1000; // Effect Duration ==>to need it  card until flip  
function stopClicking() {
    cardContainer.classList.add('no-clicking'); // Add Class No Clicking on Main Container
    // Wait Duration after end remove 'no-clicking' class
    setTimeout(() => {
        // Remove Class 'No Clicking' After The Duration
        cardContainer.classList.remove('no-clicking');
    },duration);
}
  
// Check Matched Block
function checkMatchedBlocks(firstCard, secondCard) {
    let attempts_s = document.querySelector('.attempts_s span'); //select element (span) from document
    //if the two card match(same)
    if (firstCard.dataset.technology === secondCard.dataset.technology) { //name.dataset.element ==> fristCard.dataset.technolog==> technolog is the name of class ==> اذا كان نفس الداتا نفس الكلاس 
        attempts_s.innerHTML = parseInt(attempts_s.innerHTML) + 1; //count number of true attempt ==> attempts_s is class name from dom
        //remove class 'is-flipped' ==> عشان لما نجي نشيك عليه مرة ثانية يشكيك بس لأخر بطاقتين احنا ضغطنا عليهم
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        // add class 'has-match' ==> to spesific this tow element have the same properties
        firstCard.classList.add('has-match');
        secondCard.classList.add('has-match');        

    } else {//remove is-flipped class after duration
        setTimeout(() => {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        }, duration);
    }

}

// Shuffle Function ==> make the order of card be random
function shuffle(array) { //put array  as prammeter
    // Settings Vars
    let element_current = array.length, //number of element in array
        temp, //temporary value that we store valut to return it at last function
        random; //random index

    while (element_current > 0) { //if number of element > 0 ==> implement loop
        random = Math.floor(Math.random() * element_current); //get random number ==>number will be from 1 - 12 because the length of array 12
        element_current--; //decrement length
        //make swap for element
        /*
        array = [1,2,3,4,5,6,7,8,9,10,11,12]
        array[element_current]= 12
        temp = array[element_current] ==> temp =12
        array[element_current] = array[random] ==> current number equal any random element for example 3
        array[random] = temp  ==> array = [1,2,12,4,5,6,7,8,9,10,11,3]
        ----
        array[element_current]= 11 
        ....
        ....
        ....
        continue the same operations in loop until be current < 0
        */
        temp = array[element_current]; // Save Current Element in var temp
        array[element_current] = array[random]; //current Element = Random Element
        array[random] = temp; //Random Element = temp
    }
    return array;

}