use mydb;

#All of the stuff
select name, datetime, est_time, lat, lon, orgname
from event
join organization o on event.organization_idorganization = o.idorganization
where event_id = 5;


#Events
select name as 'Event Name', datetime, est_time, lat, lon, orgname as 'Organization Name', type as 'Organization Type'
from event
left join organization o on event.organization_idorganization = o.idorganization;


#Global Leaderboard
select name, username, points
from volunteer
order by points desc
limit 100;

DELIMITER //

DROP PROCEDURE IF EXISTS GET_FRIEND_LEADERBOARD //
CREATE PROCEDURE GET_FRIEND_LEADERBOARD(USER_ID INT)

BEGIN


SELECT  v.name, v.username, v.points
FROM    volunteer_has_volunteer
left join volunteer v on volunteer_has_volunteer.volunteer_id_one = v.volunteer_id
WHERE   volunteer_id_two = USER_ID
UNION ALL
SELECT  v.name, v.username, v.points
FROM    volunteer_has_volunteer
left join volunteer v on volunteer_has_volunteer.volunteer_id_two = v.volunteer_id
WHERE   volunteer_id_one = USER_ID
order by points desc
limit 100;

END
//

DELIMITER //

DROP PROCEDURE IF EXISTS GET_MOST_RECENTS_POSTS //
CREATE PROCEDURE GET_MOST_RECENTS_POSTS()

BEGIN

#GET MOST RECENT POSTS
SELECT POST.TEXT AS TEXT, v.name AS VOLUNTEER_NAME, e.name AS EVENT_NAME
FROM POST
LEFT JOIN volunteer v on POST.FK_VOLUNTEER_ID = v.volunteer_id
left join event e on POST.FK_EVENT_ID = e.event_id
order by TIME desc
limit 10;

END
//

DELIMITER //

DROP PROCEDURE IF EXISTS GET_MOST_RECENTS_COMMENTS_FOR_POSTS //
CREATE PROCEDURE GET_MOST_RECENTS_COMMENTS_FOR_POSTS(POST_ID INT)

BEGIN

#Given A Post will return the responses
SELECT C.TEXT, v.name, C.TIME
FROM COMMENTS AS C
LEFT JOIN volunteer v ON C.FK_VOLUNTEER_ID = v.volunteer_id
WHERE C.FK_POST_ID = POST_ID
ORDER BY C.TIME DESC
LIMIT 10;

END
//

#58 12 38
CALL GET_FRIEND_LEADERBOARD(24);

call GET_MOST_RECENTS_POSTS();

CALL GET_MOST_RECENTS_COMMENTS_FOR_POSTS(20);



