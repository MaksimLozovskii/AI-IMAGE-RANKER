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
- **At what stage is this ticket?** There are 6 labels resembling progress at the moment: 
--  **Not started** - meaning the ticket has not yet been started and is not assigned to anyone, you can take this ticket if you want; 
--  **In development** - meaning the ticket is currently been developed by one or multiple members of the repository, you cannot work on this ticket unless the people assigned to it allow you to join;
--  **Awaiting code review** - meaning the code produced for the ticket is currently awaiting code review from a senior member; 
--  **Bugs present** - meaning the code that was reviewed has issues that need to be resolved in order for the code to be placed in a demo system; 
--  **Help wanted** - usually comes alongside other labels, means that the person/people assigned to this ticket is/are not able to complete the ticket on their own; 
--  **Beta testing** - meaning the ticket is currenly being tested in a controlled environemnt by other members of the repository, this is the last stage before release.

![alt text](https://github.com/MaksimLozovskii/QLabHumanProgram/blob/md-img/Labels.png?raw=true)

The development process revolves around the project kanban board in which the people responsible for the ticket move it around different stages, this way other people can see the progress.
The kanban board for the project can be accessed via the project tab -> projects (classic) -> "name of the board"

There you will see multiple tabs, which correspond to the labels that were discussed earlier, when a new ticket is released, it automatically goes into the not started column and has a label "not started", this is an available ticket.

As the ticket development progresses, the ticket moves from:
**not started -> in development -> Awaiting code review -> beta testing -> Released and monitored**
The "bugs present" column is primarily used as a way for senior members to show that there are bugs present in the code that they reviewed.
{EXAMPLE PHOTO}

### Coding and Testing
**File structure**
CREATE a folder in a convinient place on your computer and give it the name of the ticket
{ EXAMPLE PHOTO }
OPEN the folder, right click inside it and click on "Git Bash Here"
{ EXAMPLE PHOTO }

COMMANDS (copy and paste into git bash and press enter)
```
git init; 
git remote add origin https://github.com/MaksimLozovskii/QLabHumanProgram; 
mkdir logic; 
mkdir design; 
mkdir instruction; 
mkdir tests; 
cd instruction;
mkdir templates;
mkdir static;
cd static;
mkdir styles;
mkdir scripts;
mkdir img;
```
{EXAMPLE PHOTO}

create app.py file
Logic files
{EXAMPLE PHOTO}

Design files
{EXAMPLE PHOTO}

create new branch
git checkout -b "ticket_name" 
{EXAMPLE PHOTO}

stage files
git add .
{EXAMPLE PHOTO}

commit files
git commit -m "Type message here"
{EXAMPLE PHOTO}

push files to the branch
git push origin "ticket name"
{EXAMPLE PHOTO}

Dev server
```bash
flask run -p 3000
```
{EXAMPLE PHOTO}

Test Case document
{EXAMPLE PHOTO}

Writing selenium tests
{EXAMPLE PHOTO}

How to unit test the code with selenium
{EXAMPLE PHOTO}

### Integration Testing and Finishing a ticket
- How to integration test a ticket
- How to integrate
