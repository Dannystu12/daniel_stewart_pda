### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  def checkforAce(card)
    card.value == 14
  end

  def highest_card(card1, card2)
    card1.value >= card2.value ? card1 : card2
  end


  def self.cards_total(cards)
    total = 0
    for card in cards
      total += card.value
    end
    "You have a total of #{total}"
  end

end
