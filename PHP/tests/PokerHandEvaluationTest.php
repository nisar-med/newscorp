<?php
require_once("Task B.php");

use PHPUnit\Framework\TestCase;

class PokerHandEvaluationTest extends TestCase
{
    public function testPokerHandIsStraightFlush()
    {
        $ace_high  = ['ac', 'kc', 'qc', 'jc', '10c'];
        $is_straight = false;
        $is_flush = false;
        evaluate_poker_hand($ace_high, $is_straight, $is_flush);
        $this->assertTrue($is_straight);
        $this->assertTrue($is_flush);
    }
    public function testPokerHandIsStraightOnly()
    {
        $ace_high  = ['5c', '4c', '3s', '2d', 'ah'];
        $is_straight = false;
        $is_flush = false;
        evaluate_poker_hand($ace_high, $is_straight, $is_flush);
        $this->assertTrue($is_straight);
        $this->assertFalse($is_flush);
    }
}