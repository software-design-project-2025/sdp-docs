---
title: Database Schema
description: The structure of our system data... or at least, how we have planned it to be.
---

Below are the SQL commands that have been used to generate the tables that make up our database in its production-ready form. An ERD is also available for better visualization. Feel free to view it below.

[StudyLink Database Schema](/Database.pdf)

##### SECTION 1: Independent Tables

- Table: faculty
CREATE TABLE faculty (
facultyid SERIAL PRIMARY KEY,
faculty_name VARCHAR(255) NOT NULL
);

- Table: degree
CREATE TABLE degree (
degreeid SERIAL PRIMARY KEY,
degree_name VARCHAR(255) NOT NULL,
degree_type VARCHAR(100),
facultyid INT REFERENCES faculty(facultyid) ON DELETE SET NULL
);


- Table: user
CREATE TABLE "user" (
userid TEXT PRIMARY KEY,
role VARCHAR(50),
degreeid INT REFERENCES degree(degreeid) ON DELETE SET NULL,
yearofstudy INT,
bio TEXT,
status VARCHAR(255),
profile_picture VARCHAR(255)
);


- Table: module
CREATE TABLE module (
course_code TEXT PRIMARY KEY,
course_name VARCHAR(255) NOT NULL,
facultyid INT REFERENCES faculty(facultyid) ON DELETE SET NULL
);


- Table: group
CREATE TABLE "group" (
groupid SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
goal TEXT,
active BOOLEAN DEFAULT TRUE,
creatorid TEXT REFERENCES "user"(userid) ON DELETE SET NULL
);


- Table: topic CREATE TABLE topic (
topicid SERIAL PRIMARY KEY,
userid TEXT REFERENCES "user"(userid) ON DELETE SET NULL,
title VARCHAR(255) NOT NULL,
description TEXT,
start_date TIMESTAMP,
end_date TIMESTAMP,
status VARCHAR(20) DEFAULT 'not_started',
course_code TEXT REFERENCES module(course_code) ON DELETE SET NULL
);


- Table: session
CREATE TABLE session (
sessionid SERIAL PRIMARY KEY,
title VARCHAR(255),
start_time TIMESTAMP NOT NULL,
end_time TIMESTAMP,
status VARCHAR(255),
location VARCHAR(255),
description TEXT,
creatorid TEXT REFERENCES "user"(userid) ON DELETE SET NULL,
groupid INT REFERENCES "group"(groupid) ON DELETE CASCADE
);


- Table: chat
CREATE TABLE chat (
chatid SERIAL PRIMARY KEY,
user1id TEXT REFERENCES "user"(userid) ON DELETE CASCADE,
user2id TEXT REFERENCES "user"(userid) ON DELETE CASCADE
);

##### SECTION 2: Dependent Tables

- Table: user_course
CREATE TABLE user_course (
userid TEXT REFERENCES "user"(userid) ON DELETE CASCADE,
course_code TEXT REFERENCES module(course_code) ON DELETE CASCADE,
PRIMARY KEY (userid, course_code)
);


- Table: group_members
CREATE TABLE group_members (
groupid INT REFERENCES "group"(groupid) ON DELETE CASCADE,
userid TEXT REFERENCES "user"(userid) ON DELETE CASCADE,
PRIMARY KEY (groupid, userid)
);


- Table: group_message
CREATE TABLE group_message (
messageid SERIAL PRIMARY KEY,
groupid INT REFERENCES "group"(groupid) ON DELETE CASCADE,
sent_datetime TIMESTAMP NOT NULL,
senderid TEXT REFERENCES "user"(userid) ON DELETE SET NULL,
message TEXT NOT NULL
);


- Table: group_doc
CREATE TABLE group_doc (
docid SERIAL PRIMARY KEY,
groupid INT REFERENCES "group"(groupid) ON DELETE CASCADE,
sent_datetime TIMESTAMP NOT NULL,
senderid TEXT REFERENCES "user"(userid) ON DELETE SET NULL,
doc VARCHAR(255) NOT NULL
);


- Table: session_members
CREATE TABLE session_members (
sessionid INT REFERENCES session(sessionid) ON DELETE CASCADE,
userid TEXT REFERENCES "user"(userid) ON DELETE CASCADE,
PRIMARY KEY (sessionid, userid)
);


- Table: chat_message
CREATE TABLE chat_message (
messageid SERIAL PRIMARY KEY,
chatid INT REFERENCES chat(chatid) ON DELETE CASCADE,
sent_datetime TIMESTAMP NOT NULL,
senderid TEXT REFERENCES "user"(userid) ON DELETE SET NULL,
message TEXT NOT NULL
);


- Table: chat_doc
CREATE TABLE chat_doc (
docid SERIAL PRIMARY KEY,
chatid INT REFERENCES chat(chatid) ON DELETE CASCADE,
sent_datetime TIMESTAMP NOT NULL,
senderid TEXT REFERENCES "user"(userid) ON DELETE SET NULL,
doc VARCHAR(255) NOT NULL
);


- Table: group_join_request
CREATE TABLE group_join_request (
requestid SERIAL PRIMARY KEY,
groupid INT REFERENCES "group"(groupid) ON DELETE CASCADE,
userid TEXT REFERENCES "user"(userid) ON DELETE CASCADE,
request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
status VARCHAR(20) DEFAULT 'pending' -- e.g., 'pending', 'approved', 'rejected'
);