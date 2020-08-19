<?php 

function evaluate_poker_hand($h, &$straight, &$flush)
{
    $k = array_flip([2,3,4,5,6,7,8,9,10,'j','q','k','a']);
    foreach($h as $c) {
        $r[] = $k[substr($c, 0, strlen($c)-1)];
        $s[] = $c[strlen($c)-1];
    }
    rsort($r);
    if($r[0] == 12 && $r[1] == 3)
        $r = [3, 2, 1, 0, -1];
    $straight = $r[0] - $r[4] === 4;
    $flush = count(array_unique($s)) === 1;
}
