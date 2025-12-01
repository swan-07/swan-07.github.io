---
layout: post
author: stephanie
---

Today is the first day of December, so you know what that means... [Advent of Code](https://adventofcode.com/)!

Advent of Code (AoC) is a fun twist on the traditional Advent Calendar, where every day of December until Christmas there's a new coding challenge. The coding challenges take the form of CodeForces-esque problems (testing your problem solving skills) and there's two parts to each problem. Solving the first part gets you one star, solving both gets you two. Each problem is themed around saving Christmas with the Elves!

Previously, AoC had 25 challenges but this year is the first time they'll have 12. Also, there used to be a global leaderboard, but now there's only private leaderboards.

Either way, this is a really fun way to practice coding problem-solving skills! My private leaderboard code is 3472409-74ea4919 if you'd like to join, and I'll document my journey through each day of AoC!

***

--- Day 1: Secret Entrance ---

PART 1:

TIME: 7:02

CODE: (SPOILERS BELOW!!!)

```py
dial = 50
password = 0

while True:
    try:
        rotation = input()
        if rotation[0] == 'L':
            #decrease
            dial = (dial-int(rotation[1:])) % 100
        else:
            dial = (dial+int(rotation[1:])) % 100
        
        if dial == 0:
            password+=1

    except EOFError:
        break 
    except Exception as e:
        break 

print(password)
```

PART 2:
TIME: 6:26
CODE: (SPOILERS BELOW!!!)

```py
dial = 50
password = 0

while True:
    try:
        rotation = input()
        dist = int(rotation[1:])
        password += dist//100
        olddial = dial

        if rotation[0] == 'L':
            #decrease
            dial = (dial-dist) % 100

            #if the new result is greater, then must've passed 0
            if dial > olddial and olddial != 0:
                password+=1
        else:
            dial = (dial+dist) % 100

            #if the new result is less, then must've passed 0
            if dial < olddial and dial != 0:
                password+=1

        
        if dial == 0:
            password += 1
        
    except EOFError:
        break 
    except Exception as e:
        break 

print(password)
```




<!-- --- Day X: Y ---

PART 1:
TIME: 
CODE: (SPOILERS BELOW!!!)

```py

```

PART 2:
TIME: 
CODE: (SPOILERS BELOW!!!)

```py

``` -->