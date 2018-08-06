require 'minitest/autorun'
require 'minitest/rg'
require_relative '../testing_task_2'
require_relative '../card'

class TestingTask2Test < MiniTest::Test

  def setup
    @game = CardGame.new
    @ace_h = Card.new "Hearts", 14
    @ace_s = Card.new "Spades", 14
    @king_c = Card.new "Clubs", 13
  end

  def test_check_for_ace__true
    assert_equal true, @game.checkforAce(@ace_h)
  end

  def test_check_for_ace__false
    assert_equal false, @game.checkforAce(@king_c)
  end

  def test_highest_card__card1
    assert_equal @ace_h, @game.highest_card(@ace_h, @king_c)
  end

  def test_highest_card__card2
    assert_equal @ace_h, @game.highest_card(@king_c, @ace_h)
  end

  def test_highest_card__draw
    assert_equal @ace_h, @game.highest_card(@ace_h, @ace_s)
  end

  def test_cards_total__empty
    assert_equal "You have a total of 0", CardGame.cards_total([])
  end

  def test_cards_total__non_empty
    assert_equal "You have a total of 41", CardGame.cards_total([@ace_h, @ace_s, @king_c])
  end
end
