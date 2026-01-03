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
# --- Day 4: Printing Department ---

PART 1:

TIME: 16:51

I wanted to get familiar with C++, too, as I ought to learn it for ICPC/competitive programming. Thus, today's code was written in C++.

CODE: (SPOILERS BELOW!!!)

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {

    vector<vector<char>> grid; 
    

	string row;
    while (cin >> row) { 
        // cout << row << endl;

        grid.push_back(vector<char>(row.begin(), row.end()));
    }

    int result = 0;

    for (int i = 0; i < grid.size(); i++){
        for (int j = 0; j < grid[0].size(); j++){
            int nearby = 0;
            if (grid[i][j] == '.') continue;
            if (i!=0){
                if (j!=0){
                    if(grid[i-1][j-1] == '@') nearby++;
                }
                if(grid[i-1][j] == '@') nearby++;
                if (j!=grid[0].size()-1){
                    if(grid[i-1][j+1] == '@') nearby++;
                }
            }
            if (i!=grid.size()-1){
                if (j!=0){
                    if(grid[i+1][j-1] == '@') nearby++;
                }
                if(grid[i+1][j] == '@') nearby++;
                if (j!=grid[0].size()-1){
                    if(grid[i+1][j+1] == '@') nearby++;
                }
            }
            if (j!=0){
                if(grid[i][j-1] == '@') nearby++;
            }
            if (j!=grid[0].size()-1){
                if(grid[i][j+1] == '@') nearby++;
            }

            if (nearby < 4){
                result++;
            }

        }
    }

    cout << result;
}

```

PART 2:

TIME: 1:37

This is so fun, it was almost a little sad that part 2 only took a few seconds to do.

CODE: (SPOILERS BELOW!!!)

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {

    vector<vector<char>> grid; 
    

	string row;
    while (cin >> row) { 
        // cout << row << endl;

        grid.push_back(vector<char>(row.begin(), row.end()));
    }

    int result = 0;
    vector<vector<char>> oldgrid; 

    while (oldgrid != grid){
        oldgrid = grid;
        for (int i = 0; i < grid.size(); i++){
            for (int j = 0; j < grid[0].size(); j++){
                int nearby = 0;
                if (grid[i][j] == '.') continue;
                if (i!=0){
                    if (j!=0){
                        if(grid[i-1][j-1] == '@') nearby++;
                    }
                    if(grid[i-1][j] == '@') nearby++;
                    if (j!=grid[0].size()-1){
                        if(grid[i-1][j+1] == '@') nearby++;
                    }
                }
                if (i!=grid.size()-1){
                    if (j!=0){
                        if(grid[i+1][j-1] == '@') nearby++;
                    }
                    if(grid[i+1][j] == '@') nearby++;
                    if (j!=grid[0].size()-1){
                        if(grid[i+1][j+1] == '@') nearby++;
                    }
                }
                if (j!=0){
                    if(grid[i][j-1] == '@') nearby++;
                }
                if (j!=grid[0].size()-1){
                    if(grid[i][j+1] == '@') nearby++;
                }

                if (nearby < 4){
                    result++;
                    grid[i][j]='.';
                }

            }
        }

    }

    

    cout << result;
}

```

# --- Day 5: Cafeteria ---

PART 1:

TIME: 17:23

CODE: (SPOILERS BELOW!!!)

```c++

#include <bits/stdc++.h>
using namespace std;

int main() {
	string a;
    vector<pair<long long, long long>> ids;
    while (true) {
        getline(cin, a); 

        if (a.empty()) { 
            break; 
        }


        ids.push_back({stoll(a.substr(0, a.find('-'))), stoll(a.substr(a.find('-') + 1))});
    }

    long long b;
    long long count = 0;

    while(cin >> b){
        for (pair<long long, long long> p : ids){
            if (b <= p.second && b >= p.first){
                count++;
                break;
            }
        }
    }

    cout << count;

}

```

PART 2:

TIME: 9:24

Started timer a litte late by accident, time might not be accurate.

CODE: (SPOILERS BELOW!!!)

```c++

#include <bits/stdc++.h>
using namespace std;

int main() {
	string a;
    vector<pair<long long, long long>> ids;
    while (true) {
        getline(cin, a); 

        if (a.empty()) { 
            break; 
        }

        pair<long long, long long> np = {stoll(a.substr(0, a.find('-'))), stoll(a.substr(a.find('-') + 1))};
        bool newelement = true;
        for (pair<long long, long long> &p : ids){
            //any overlaps?
            //case 1: p1 < np1 < p2 < np2
            if (p.first <= np.first && np.first <= p.second && p.second <= np.second){
                p = {p.first, np.second};
                newelement = false;
            }
            //case 2: p1 < np1 < np2 < p2
            if (p.first <= np.first && np.second <= p.second){
                newelement = false;
                continue;
            }
            //case 3: np1 < p1 < np2 < p2
            if (np.first <= p.first && p.first <= np.second && np.second <= p.second){
                newelement = false;
                p = {np.first, p.second};
            }
            //case 4: np1 < p1 < p2 < np2
            if (np.first <= p.first && p.second <= np.second){
                newelement = false;
                p = {np.first, np.second};
            }
        }

        if(newelement) ids.push_back(np);
    }

    vector<pair<long long, long long>> oldids;
    while(oldids != ids){
        oldids = ids;
        ids = {};
        for (auto np : oldids){
            bool newelement = true;
            for (pair<long long, long long> &p : ids){
            //any overlaps?
            //case 1: p1 < np1 < p2 < np2
            if (p.first <= np.first && np.first <= p.second && p.second <= np.second){
                p = {p.first, np.second};
                newelement = false;
            }
            //case 2: p1 < np1 < np2 < p2
            if (p.first <= np.first && np.second <= p.second){
                newelement = false;
                continue;
            }
            //case 3: np1 < p1 < np2 < p2
            if (np.first <= p.first && p.first <= np.second && np.second <= p.second){
                newelement = false;
                p = {np.first, p.second};
            }
            //case 4: np1 < p1 < p2 < np2
            if (np.first <= p.first && p.second <= np.second){
                newelement = false;
                p = {np.first, np.second};
            }
        }
        if(newelement) ids.push_back(np);
        }
    }

    long long total = 0;

    for (pair<long long, long long> p : ids){
            total+=p.second-p.first+1;
    }

    cout << total;

}

```

# --- Day 6: Trash Compactor ---

PART 1:

TIME: 23:06

We're continuing with the C++ practice! I'm beginning to miss Python a little though, input parsing is a lot easier there.

CODE: (SPOILERS BELOW!!!)

```c++
#include <bits/stdc++.h>
using namespace std;
#define ll long long

int main() {
    vector<vector<ll>> nums;
    vector<char> ops;
    string row;
    while (getline(cin, row)) { 
        stringstream ss(row);
        stringstream ss1(row);
        vector<ll> r = {};
        ll num;
        while (ss >> num){
            r.push_back(num);
        }

        if (r.size() == 0){
            char ch;
            while (ss1.get(ch)) {
                if (!isspace(ch)) { 
                    ops.push_back(ch);
                }
            }
        }
        else nums.push_back(r);
    }


    ll sol = 0;

    for (int i = 0; i < nums[0].size(); i++){
        ll total = 0;
            if(ops[i] == '*'){
                    total = 1;
                    for (int j = 0; j < nums.size(); j++){
                        total*=nums[j][i];
                        //cout << nums[j][i] << endl << total << endl;
                    }
                    
                }
            else{
                for (int j = 0; j < nums.size(); j++){
                    total+=nums[j][i];
                    //cout << nums[j][i] << endl << total << endl;
                }
            }
        sol+=total;    
    }

    cout << sol;
}
```

PART 2:

TIME: 27:52

CODE: (SPOILERS BELOW!!!)

```c++

```

<!-- # --- Day X: Y ---

PART 1:

TIME: 

CODE: (SPOILERS BELOW!!!)

```c++

```

PART 2:

TIME: 

CODE: (SPOILERS BELOW!!!)

```c++

``` -->