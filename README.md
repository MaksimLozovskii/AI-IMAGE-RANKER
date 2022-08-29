# QLab Human Program Project Onboarding
🔥  _This is the official QLab Human program repository_ 🔥

**Human program - app where people can do useful work by following human understandable instructions for rewards and ranks, while at the same time achieving desired results**
# Work less - do more
---

**Our project discord**

```
https://discord.gg/ZzkYPaaa
```

## Project Owners :
| Name  | Github Avatar | Email | 
| :-----:  | :-----: | :-----: | 
| **John Bustard** | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/johnbustard-avatar.png) | {Email} |
| **Maksim Lozovskii** | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/maksim-lozovskii-avatar.png) | {Email} |

## Top contributors :
| Name  | Github Avatar | 
| :-----:  | :-----: |
| | |
| | | 

# Start here

---

## ✅ Download and install the following

| Tool Name | Download Link  | How to install | Icon  |
| :------ | :-----:  | :-----: | :-----: |  
| VsCode | https://code.visualstudio.com/download | https://www.youtube.com/watch?v=MlIzFUI1QGA | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/vscode-icon.jpg)  |
| GitBash | https://git-scm.com/downloads | https://www.youtube.com/watch?v=pIbxvTsjqLw  | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/gitbash-icon.jpg) |
| Python | https://www.python.org/downloads/ | https://www.youtube.com/watch?v=i-MuSAwgwCU | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/python-icon.png) |


## ✅ Read ticket lifecycle information
 
Head over to the issues tab of the repository, and have a look over the issues, when choosing a ticket, make sure to take into account the following:

1️⃣ **Is the ticket complete?** The tickets with a green cicrle beside them are not yet complete

2️⃣ **Can I start this ticket?** You will see a user's avatar beside the ticket if it is assigned to someone else, you cannot assign yourself to a ticket without 
permission if it has already been started

3️⃣ **At what stage is this ticket?** There are 7 labels resembling progress at the moment: 

  - **In development** - meaning the ticket is currently been developed by one or multiple members of the repository, you cannot work on this ticket unless the people assigned to it allow you to join;

  - **Awaiting UI Review** - meaning the UI plan produced for the ticket is currently awaiting review from a senior member

  - **Awaiting Code Review** - meaning the code produced for the ticket is currently awaiting code review from a senior member; 
  
  - **Awaiting General Review** - meaning that general milestones of the tickets need to be looked at;
  
  - **Issues present** - meaning the code that was reviewed has issues that need to be resolved in order for the code to be placed in a demo system; 

  - **Help wanted** - usually comes alongside other labels, means that the person/people assigned to this ticket is/are not able to complete the ticket on their own; 

  - **In Testing** - meaning the ticket is currenly being tested in a controlled environemnt by other members of the repository, this is the last stage before release.

As the ticket development progresses, the ticket moves from:

**not started -> in development -> Awaiting UI review -> in development -> Awaiting code review -> beta testing -> Released and monitored**

**Awaiting General Review** can be added for steps unrelated with development


## ✅ Start a ticket

1) Go to the "Issues" tab and find a ticket to do, for example here is one which was just created and can be taken:
2) Click on the ticket and under the assignees tab click on your github profile, this way you will assign yourself to the ticket;
3) Under the "Labels" select the "In development" label. This way you will tell everyone that you have taken the ticket

## ✅ Create project folder on local machine with the name of your ticket

CREATE a folder in a convinient place on your computer and give it the name of the ticket

OPEN the folder, right click inside it and click on "Git Bash Here"

**Copy and paste the following commands into gitbash**
```
git init; 
git remote add origin https://github.com/MaksimLozovskii/QLabHumanProgram; 

mkdir design-files; 
cd design-files;
mkdir visual-design-files-go-here;
cd ..;
mkdir tests-scripts; 
cd tests-scripts;
mkdir test-plan-docs-go-here;
cd ..;
```
You should have the following structure

```
📦ticket_name
 ┣ 📂design-files
 ┃ ┗ 📂Visual-design-files-go-here
 ┗ 📂test-scripts
   ┗ 📂test-plan-docs-go-here
```

## ✅ Submit the initial files to your github branch

**Create a new branch to keep your code separate from others**
```
git checkout -b "ticket_name" 
```

**For exmaple:**
```
git checkout -b ticket_name
```

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/new-branch.png?raw=true)

**Stage files before commit with:**
```
git add .
```

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/git-add.png?raw=true)

**Commit the files with:**
```
git commit -m "Type message here"
```

**For exmaple:**
```
git commit -m "New Commit"
```

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/git-commit.png?raw=true)

**Push your files to the new branch**
```
git push origin "ticket name"
```

**For exmaple:**
```
git push origin ticket_name
```
_The "ticket name" in this case will be the name of the branch_

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/git-push.png?raw=true)

**Now you can view your own branch on github under "switch branches"**

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/find-branch.png?raw=true)

**Alternatively you can find your branch under the "branches" tab**

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/your-branch.png?raw=true)

**Here is your branch**

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/your-repo.png?raw=true)


## ✅ CREATE A MOCKUP OF THE USER INTERFACE

### 1️⃣ Make the base layout using the following project resources

Colour scheme
| Hex | Sample | Use case |
| :-----: | :-----: | :-----: | 
| #3BBA9C | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%233bba9c.png) | Main Titles (h1) and buttons (button) |
| #2E3047 | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%232e3047.png) | Main Background (html, body)|
| #3C3F58 | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%233c3f58.png) | Container Background |
| #707793 | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%23707793.png) | For footer text |

Font - Roboto Slab

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
```

### 2️⃣ Copy the base layout onto a new page or a different place 2 times (so you have the before and after)
### 3️⃣ Lay out a user-system event (where the user interacts with the system, such as presses a button and the system does something, such as prints out a message)

For example

{IMAGE BEFORE EVENT} -> {IMAGE AFTER EVENT}

## ✅ Upload the files unto your github branch
## ✅ Change your ticket from "in development" to "Awaiting UI review"
## ✅ Wait for review

- ✅ Your UI was approved - you can start coding
- OR
- ❌ Yout UI was not approved, fix it using comments recieved

 
## ✅ READ ABOUT THE BEST PRACTISES

**For Frontend**
BEM - **Block Element Modifier** is a practise for naming, designing and orgranising the elements on HTML / CSS pages for better readability and scalability.

How to use BEM:
https://sparkbox.com/foundry/bem_by_example


**For Backend**
- Name functions like you are telling them to do something:
```
✅
def getLoginDetails():
def downloadUsernameFile():
def calculateChange():

❌
def x():                  -> Don't use letters to name functions
def ./,⍻⍻123():          -> Don't use numbers / emojis / symbols to name functions (will not work)
def download():           -> Function names should be descriptive
def DownloadUsername()    -> Functions can't start with a capital letter
```
- Create variable names to describe their content
```
✅
inputUsername = "Bob"
XaxisVal = 12
YaxisVal = XaxisVal * 2

❌
x = 123
someNumber = 456
⍻ ⍻⍻ ⍻ = "lol"
vALUEX = 123
```

## ✅ Code up the solution on your local machine
## ✅ Test your solution with selenium

Selenium basics, watch all:

https://www.youtube.com/playlist?list=PLzMcBGfZo4-n40rB1XaJ0ak1bemvlqumQ


## ✅ Submit your solution to your branch
## ✅ Change your ticket from "in development" to "awaiting code review"
## ✅ Wait for review

- ✅ Your code was approved and is now being integrated
- OR
- ❌ Yout code was not approved, you need to fix it
