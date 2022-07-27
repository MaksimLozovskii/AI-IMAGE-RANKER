# QLab Human Program Project Onboarding
🔥  _This is the official QLab Human program repository_ 🔥

**Human program - app where people can do useful work by following human understandable instructions for rewards and ranks, while at the same time achieving desired results**
---
Work less - do more

**Our project discord**

```
https://discord.gg/ZzkYPaaa
```

## Project Owners :
| Name | Avatar | Contact Info |
| :-----:  | :-----: | :-----: | 
| **John Bustard** | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/johnbustard-avatar.png) | {Email} |
| **Maksim Lozovskii** | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/maksim-lozovskii-avatar.png) | {Email} |

## Top contributors :
| Name | Avatar | Contact Info |
| :-----:  | :-----: | :-----: | 
| |  | {Email} |
|  |  | {Email} |


Overview

Getting the right tools
- ✅ Download VS code
- ✅ Download Git Bash
- ✅ Download Python


Ticket lifecycle or how to start a ticket
- ✅ Read about ticket lifecycle
- ✅ Start a ticket
- ✅ Create project folder on local machine with the name of your ticket
- ✅ Download the test-template
- ✅ Rename the test tempalte to the name of your ticket
- ✅ Place the test template in the correct folder
- ✅ Submit the files to your github branch


Planning the UI
- ✅ Mark out user interaction with the UI in figma
- ✅ Save files as PNG or JPG/JPEG in the appropriate folder
- ✅ Upload the files unto your github branch
- ✅ Move your ticker from in development to awaiting UI review
- ✅ Wait for review


- ✅ Your UI was approved - you can start coding
- OR
- ❌ Yout UI was not approved, you need to fix it


Coding up the solution
- ✅ Read about the best coding practises and naming conventions
- ✅ Code up the solution on your local machine
- ✅ Run a develeopment server for the solution on your local machine 
- ✅ Test your solution with selenium
- ✅ Submit your solution to your branch
- ✅ Move your ticket from in development to awaiting code review
- ✅ Wait for review


- ✅ Your code was approved and is now being integrated
- OR
- ❌ Yout code was not approved, you need to fix it

---

# Getting the right tools

Tools are intergral, but should not take the entire attention span, the following tools offer all of the necessary functionality out of the box that will allow you to effectively develop human instructions.

| Plugin  | Download Link | How to install |
| :------  | :------ | :------ |  
| VsCode  | https://code.visualstudio.com/download | https://www.youtube.com/watch?v=MlIzFUI1QGA |
| GitBash | https://git-scm.com/downloads | https://www.youtube.com/watch?v=pIbxvTsjqLw |
| Python  | https://www.python.org/downloads/ | https://www.youtube.com/watch?v=i-MuSAwgwCU |



# Ticket lifecycle or how to start a ticket

In order to start a ticket, head over to the issues tab of the repository, and have a look over the tickets, when choosing a ticket, make sure to take into account the following:
- **Is the ticket complete?** The tickets with a green cicrle beside them are not yet complete
- **Can I start this ticket?** You will see a user's avatar beside the ticket if it is assigned to someone else, you cannot assign yourself to a ticket without permission if it has already been started
- **At what stage is this ticket?** There are 7 labels resembling progress at the moment: 
  - **Not started** - meaning the ticket has not yet been started and is not assigned to anyone, you can take this ticket if you want; 

  - **In development** - meaning the ticket is currently been developed by one or multiple members of the repository, you cannot work on this ticket unless the people assigned to it allow you to join;

  - **Awaiting UI review** - meaning the UI plan produced for the ticket is currently awaiting review from a senior member

  - **Awaiting code review** - meaning the code produced for the ticket is currently awaiting code review from a senior member; 

  - **Bugs present** - meaning the code that was reviewed has issues that need to be resolved in order for the code to be placed in a demo system; 

  - **Help wanted** - usually comes alongside other labels, means that the person/people assigned to this ticket is/are not able to complete the ticket on their own; 

  - **Beta testing** - meaning the ticket is currenly being tested in a controlled environemnt by other members of the repository, this is the last stage before release.

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/Labels.png?raw=true)

The development process revolves around the project kanban board in which the people responsible for the ticket move it around different stages, this way other people can see the progress.
The kanban board for the project can be accessed via the project tab -> projects (classic) -> "name of the board"

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/project.png?raw=true)

There you will see multiple tabs, which correspond to the labels that were discussed earlier, when a new ticket is released, it automatically goes into the not started column and has a label "not started", this is an available ticket.

As the ticket development progresses, the ticket moves from:
**not started -> in development -> -> Awaiting UI review -> in development -> Awaiting code review -> beta testing -> Released and monitored**
The "bugs present" column is primarily used as a way for senior members to show that there are bugs present in the code that they reviewed.

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/kanban-board.png?raw=true)

### First steps

Go to the "Issues" tab and find a ticket to do, for example here is one which was just created and can be taken:
{EXAMPLE IMAGE}

Click on the ticket and under the assignees tab click on your github profile, this way you will assign yourself to the ticket;
{EXAMPLE IMAGE}

Then, under the "Labels" select the "In development" label and delete the "Not started" label. This way you will tell everyone that you have taken the ticken;

Then, go the the project tab -> projects (classic) -> Human Instructions and drag your ticket to the "In development" column;
{EXAMPLE IMAGE}

Now you can start preparing the files and the development environment;


**File structure**
CREATE a folder in a convinient place on your computer and give it the name of the ticket (ticket name is before the ": Implement Human Instruction" in the issues tab), I made one on my desktop

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/create-folder.png?raw=true)

OPEN the folder, right click inside it and click on "Git Bash Here"
![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/open-gitbash.png?raw=true)

**COMMANDS (copy and paste into git bash and press enter)**
```
git init; 
git remote add origin https://github.com/MaksimLozovskii/QLabHumanProgram; 
touch README.md;

mkdir design-files; 
cd design-files;
mkdir user-interaction-files-go-here;
mkdir visual-design-files-go-here;
cd ..;
mkdir instruction-files; 
cd instruction-files;
touch app.py;
mkdir templates;
mkdir static;
cd static;
mkdir styles;
mkdir scripts;
mkdir img;
cd ..;
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
 ┃ ┣ 📂User-interaction-files-go-here
 ┃ ┗ 📂Visual-design-files-go-here
 ┣ 📂instruction-files
 ┃ ┣ 📂static
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┣ 📂scripts
 ┃ ┃ ┗ 📂styles
 ┃ ┣ 📂templates
 ┃ ┗ 📜app.py
 ┣ 📂test-scripts
 ┃ ┗ 📂test-plan-docs-go-here
 ┗ 📜README.md
```

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/folder-structure.png?raw=true)

Now, lets edit your README.md file

**Open README.md with VS code and paste this in:**
```
# Branch for "ticket name"

**Assignee - "Change to your name"**
```

Change "ticket name" to the name of the ticket you assigned yourself

Change "change to your name" to the your github nickname

**Download Test Case document**

First, locate the "md-img" branch and switch to it

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/find-branches.png)
![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/switch-md-img.png)

Then, find the test-template folder and open it

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/find-test-template.png)

Inside it, open the test-template.xlsx file and click the download button on the right-hand side of the page

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/download-test-template.png)


**TEST TEMPLATE STRUCTURE**

**For Single Events**

if {user} |action / event| -> system should ___"

**For Multiple events**

if {user} |action / event| && |action / event | && n -> system should ___"

**For example : LOG-IN system : **

- The data that will be processed within the system:
  - User input Username
  - User input Email
  - User input Password
  
  - System stored Username
  - System stored Email
  - System stored Password
  
 - What the system should do
   - if \user\ |Presses Submit button| && |Empty String in the username field| ->  the system should output an error message "Empty Username Field not allowed"
   - if \user\ |Presses Submit button| && |Empty String in the email field| -> the system should output an error message "Empty Email Field not allowed"
   - if \user\ |Presses Submit button| && |Empty String in the password field| -> the system should output an error message "Empty Password Field not allowed"
 
   - if \user\ |Presses Submit button| && |String in Username field has incorrect format| -> the system should output an error message "Incorrect Username Format {suggest format}"
   - if \user\ |Presses Submit button| && |String in Email field has incorrect format| -> the system should output an error message "Incorrect Email Format {suggest format}"
   - if \user\ |Presses Submit button| && |String in Password field has incorrect format| -> the system should output an error message "Incorrect Passsord Format {suggest format}"
   
   - if \user\ |Presses Submit button| && |String in Username field has code| -> the system should output an error message "Incorrect Username Format {suggest format}"
   - if \user\ |Presses Submit button| && |String in Email field has code| -> the system should output an error message "Incorrect Email Format {suggest format}"
   - if \user\ |Presses Submit button| && |String in Password field has code| -> the system should output an error message "Incorrect Password Format {suggest format}"


**Submitting to github**

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


# Planning the UI

For mocking up the UI aspect, we suggest using an application such as Figma or Adobe XD
For the purpose of this guide, we will be using figma as its free to use.

The purpose of creating the UI portion of the application first, is to show how the user will interact with the system and how the system will behave
This way, we know exactly what should happen on the front end, if any other unexpected events happen, this will be flagged as a software issue.

{IMG}

**Event based UI creation**

To start off:


- ✅ Make the base layout using the ticket overview

{IMG}

- ✅ Copy the base layout onto a new page or a different place 2 times (so you have the before and after)
- ✅ Lay out a user-system event (where the user interacts with the system, such as presses a button and the system does something, such as prints out a message)

For example

{IMAGE BEFORE EVENT} -> {IMAGE AFTER EVENT}

- ✅ Follow the ticket objectives until all the user-system events are defined and layed out
- ✅ When you have defined and layed out all of the user-system events, export, save or just screenshot each event and save them as separate files with the name of the event, such as: "UserPressesSubmitButtonWhenFieldEmpty-SystemPrintsError", they can get long, but they give a clear indication of what is happening.
- ✅ Submit for a review

__Note that we only accept PNG or JPEG(JPG)__



Page colour scheme
| Hex | Sample |
| :-----: | :-----: | 
| #3BBA9C | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%233bba9c.png) |
| #2E3047 | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%232e3047.png) |
| #3C3F58 | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%233c3f58.png) |
| #43455C | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%2343455c.png) |
| #707793 | ![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/%23707793.png) |


Page font - Roboto Slab

```css
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
```

Pre made ui components
- buttons
- forms
- Titles
- Paragraph text
- Nullifying styles
- Header and footer code

- Some examples of what has been done with screenshots
- Language that is used with screenshots
- Tools that they use in list format with screenshots
- A guide on how to use their project management system (preferebly a video)
- A guide on how to do my own ticket (video preferebly)
- Boilerplate files and/or code


# Coding up the solution

**Opening project in VsCode**

A quick way to open vs code is to right click inside your project folder, click "git bash here" and then type in

```
code .
```

This will launch vs code and open this folder as the project

**Running a development server**

To run your flask application, open gitbash inside the folder where the app.py file is, and type in the following command

```bash
$ FLASK_APP=app.py FLASK_ENV=development flask run --port 8080
```

The website can viewed in the browser by typing in

```
localhost:8080
```


**Best coding practises**

This is what a coder's nightmare looks like 😄😄😄

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/emoji-nightmare.jpg)


Best coding practises are essential to maintain code clarity

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
valueX = 12
valueY = valueX  * valueX     -> Try to avoid hardcoding a number into a variable as the answer of a calculation or event result

❌
x = 123
someNumber = 456
⍻ ⍻⍻ ⍻ = "Dont-do-that-ever"
ValueX = 123
VALUEX = 123
vALUEX = 123
```

**Add comments, but be mindful about them**

Overkill 🤨

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/comment-overkill.png)

Just right 🤩

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/comment-just-right.png)

The comments should describe the logic of the file, even if you delete the code, this way other developers who may not be very skilled programmers will understand the logic of the application

**TESTING WITH SELENIUM**

> It is impossible to talk about how to write tests for each situation as there are infinite amounts of them, instead you can be provided general information on how to > test basic HTML components, which is all you really need to start:

**Watch the following tutorials carefully, they are very informative and will help you out**

(Right click and open in the new tab)

https://www.youtube.com/playlist?list=PLzMcBGfZo4-n40rB1XaJ0ak1bemvlqumQ
