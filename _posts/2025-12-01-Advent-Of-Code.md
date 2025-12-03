---
layout: post
author: stephanie
---

Today is the first day of December, so you know what that means... [Advent of Code](https://adventofcode.com/)!

Advent of Code (AoC) is a fun twist on the traditional Advent Calendar, where every day of December until Christmas there's a new coding challenge. The coding challenges take the form of CodeForces-esque problems (testing your problem solving skills) and there's two parts to each problem. Solving the first part gets you one star, solving both gets you two. Each problem is themed around saving Christmas with the Elves!

Previously, AoC had 25 challenges but this year is the first time they'll have 12. Also, there used to be a global leaderboard, but now there's only private leaderboards.

Either way, this is a really fun way to practice coding problem-solving skills! My private leaderboard code is 3472409-74ea4919 if you'd like to join, and I'll document my journey through each day of AoC!

***

# --- Day 1: Secret Entrance ---

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

# --- Day 2: Gift Shop ---

PART 1:

TIME: 19:56

I originally attempted to code it in Java to switch the language up a bit, but the large numbers made it much easier to do in python; as such, I switched to python.

CODE: (SPOILERS BELOW!!!)

```py

ranges = [x for x in input().split(",")]
answer = 0

for range in ranges:
    start, end = range.split("-")
    startint = int(start)
    endint = int(end)

    firsthalfstart = start[:len(start)//2]
    if firsthalfstart == '':
        firsthalfstart = '1'
    firsthalfstartint = int(firsthalfstart)

    while True:
        pattern = int(firsthalfstart+firsthalfstart)
        if (pattern <= endint) and (pattern >= startint):
            answer += pattern
            firsthalfstartint += 1
            firsthalfstart = str(firsthalfstartint)
        elif pattern < startint:
            firsthalfstartint += 1
            firsthalfstart = str(firsthalfstartint)
        else:
            break


print(answer)

```

PART 2:

TIME: 6:45

This code is a little slow, it takes around 10 seconds to run.

CODE: (SPOILERS BELOW!!!)

```py
ranges = [x for x in input().split(",")]
answer = 0

for r in ranges:
    start, end = r.split("-")
    startint = int(start)
    endint = int(end)

    for n in range(startint, endint):
        for i in range(1, len(str(n))//2+1):
            repeat = str(n)[:i]
            repeated = True
            for section in range(i, len(str(n)), i):
                if repeat != str(n)[section : section+i]:
                    repeated = False
                    break
            if repeated:
                answer += n
                break



print(answer)
```

# --- Day 3: Lobby ---

PART 1:

TIME: 25:41

I accidentally drank some tea at around 11. It had caffeine, so I couldn't sleep at 3 am and decided to do Advent of Code instead. I wanted to revisit Java since I missed it (Java was my first coding language, back when I was a student at KTByte), so Java it was for today.

CODE: (SPOILERS BELOW!!!)

```java
import java.io.*;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter pw = new PrintWriter(System.out);
        String line;

        int total = 0;
        while ((line = r.readLine()) != null) {
            int first = 0;
            int second = 0;
            boolean swap = false;
            for (int i = 9; i >= 0; i--){
                if (line.contains(String.valueOf(i))){
                    // System.out.println("first is " + i);
                    // System.out.println("index is " + line.indexOf(String.valueOf(i)));
                    first = i;
                    if (line.indexOf(String.valueOf(i)) == line.length()-1){
                        swap = true;
                    }
                    break;
                }
            }
            if (swap){
                for (int i = first-1; i >= 0; i--){
                    if (line.contains(String.valueOf(i))){
                        second = first;
                        first = i;
                        break;
                    }
                }
            }
            else{
                boolean found = false;
                for (int i = first; i >= 0; i--){
                    if (found) break;
                    for (int j = line.indexOf(String.valueOf(first))+1; j < line.length(); j++){
                        // System.out.println("j is " + j);
                        // System.out.println((line.charAt(j)-'0'));
                        // System.out.println(i);
                        if (i == (line.charAt(j)-'0')){
                            second = i;
                            found = true;
                            break;
                        }
                    }
                }
            }

            // System.out.println(10*first + second);

            total += (10*first + second);




        }

        System.out.println(total);


	}
}


```

PART 2:

TIME: 27:06

CODE: (SPOILERS BELOW!!!)

```java

import java.io.*;
import java.util.*;

public class Main {

    static int[] largestintandindex(String str, ArrayList<Integer> indices){
        int largest = -1;
        int largestindex = 0;
        int i;
        if (indices.size() > 0){
            i = indices.get(indices.size()-1)+1;
        }
        else{
            i = 0;
        }
        while (i < str.length()){
            if (str.charAt(i)-'0' > largest){
                if (!indices.contains(i)){
                    largest = str.charAt(i)-'0';
                    // System.out.println(largest);
                    largestindex = i;
                }
            }
            i++;
        }
        // System.out.println(largestindex);

        return new int[]{largest, largestindex};
    }

	public static void main(String[] args) throws IOException {
		BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter pw = new PrintWriter(System.out);
        String line;

        long total = 0;
        
        while ((line = r.readLine()) != null) {
            ArrayList<Integer> indices = new ArrayList<Integer>();
            long temp = 0;
            for (int i = 11; i >= 0; i--){
                // System.out.println(line.substring(0, line.length()-i));
                int[] arr = largestintandindex(line.substring(0, line.length()-i), indices);
                // System.out.println(temp);
                temp+=arr[0]*Math.pow(10, i);
                indices.add(arr[1]);
            }

            // System.out.println(temp);
            total+=temp;




        }
        System.out.println(total);


	}
}


```



<!-- # --- Day X: Y ---

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