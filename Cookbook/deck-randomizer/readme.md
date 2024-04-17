# Deck Randomizer

A multi-langual API that returns a collection of cards.

## Parameters

- deckCount
  - amount of sets to return / randomize
- suites
  - limited to string enums: hearts, spades, clubs or diamonds

## Pseudo Code

- start API server
- allow input from command line at the same time
  - return formatted data
  - optionally return text stylized based on suite (red / white, emojis / symbols used for suite)

```pseudo
string[] deck = A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
for: i = 0 while i < deckCount
  copy array from deck to new deck
  for: j = 0 while j < 13
    randomly generate a int between 0 and 12
    pop and push to new array
  -OR- use builtin array randomization
Do this for each suite, and then join and randomize the suites
```
