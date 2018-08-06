### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # not an error but method name schould be snake case
  def checkforAce(card)

    # use of assignment operator instead of boolean equality operator
    if card.value = 1
      return true
    else
      return false
    end
  end

  # typo: used dif instead of def
  # comma missing to seperate arguments
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    # Inconsistent return types
    card2
  end
end

# Close class too early
end

#not an errorbut inconsistent use of class and instance methods
def self.cards_total(cards)
  # total not initialized
  total
  for card in cards
    total += card.value
    #early return on first iteration and implicit string conversion
    return "You have a total of" + total
  end
end


```
