# QLab Human Program Project Onboarding
🔥  _This is the official QLab Human program repository_ 🔥

**Human program - app where people can do useful work by following human understandable instructions for rewards and ranks, while at the same time achieving desired results**
---
Using rewards and neuro-linguistic programming techniques we help for you to achieve
---

## Project Members :
- **John Bustard**
- **Maksim Lozovskii**

## Getting the right tools
Tools are intergral, but should not take the entire attention span, the following tools offer all of the necessary functionality out of the box that will allow you to effectively develop human instructions.

| Plugin  | Download Link | How to install |
| :------  | :------ | :------ |  
| VsCode  | https://code.visualstudio.com/download | https://www.youtube.com/watch?v=MlIzFUI1QGA |
| GitBash | https://git-scm.com/downloads | https://www.youtube.com/watch?v=pIbxvTsjqLw |
| Python  | https://www.python.org/downloads/ | https://www.youtube.com/watch?v=i-MuSAwgwCU |

### Ticket lifecycle or how to start a ticket
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


**DOCUMENTATION**

**UI Interaction plan**

How to make UI Interaction files
Figma
Make sure that the generated files are of the follwing : PNG / JPEG(JPG)
How the user interacts with the UI
Event based UI creation
For example {IMAGE BEFORE EVENT} -> {IMAGE AFTER EVENT}

Make the base layout
Then add UI pages with different UI elements depending on the user input

{EXAMPLE PHOTO}

**Test Case document**

It is vital that you define appropriate test cases with 100% coverage.

**We suggest that you use the following document:**

Download the template here

https://downgit.github.io/#/home?url=https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/test-template.xlsx

**Single Event**

if {user} |action / event| -> system should ___"

**Multiple events**

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
   
  
{EXAMPLE PHOTO}

**CODING LOCALLY**

**Opening project in VsCode**

**BEST CODING PRACTISES**
Describing logic as comments
Naming conventions

https://medium.com/swlh/how-to-better-name-your-functions-and-variables-e962a4ef335b

https://devopedia.org/images/article/151/8127.1549366316.png

{GOOD EXAMPLE PHOTO}

{BAD EXAMPLE PHOTO}

Dev server
```bash
flask run -p 3000
```

**TESTING LOCALLY**

**Selenium tests**

It is impossible to talk about how to write tests for each situation as there are infinite amounts of them, instead you can be provided general information on how to test basic HTML components, which is all you really need to start:
- HOW TO TEST BUTTONS
- HOW TO TEST FORMS
- HOW TO TEST USER INPUT
- HOW TO TEST ELEMENTS APPEARING
- HOW TO TEST SCRIPTS

{EXAMPLE PHOTO}

### INTEGRATION
