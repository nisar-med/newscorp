<?php 
define(HAND_SIZE, 5);

function generate_poker_hand() {
    // Array of all possible ranks
    $ranks = ['a',2,3,4,5,6,7,8,9,10,'j','q','k'];

    // Array of all possible suits
    $suits = ['c', 'd', 's', 'h'];
    
    $hand = [];

    // Loop to generate hand of cards
    for($i=0;$i<HAND_SIZE;$i++) {
        // generate a random number
        $rankIndex = rand(0, count($ranks)-1);

        // generate a random suit
        $suitIndex = rand(0, count($suits)-1);
        
        $rank = $ranks[$rankIndex];
        $suit = $suits[$suitIndex];
        $hand[] =  $rank . $suit;
    }
    return $hand;
}

print(implode(',', generate_poker_hand()) . "\n");