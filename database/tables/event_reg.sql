CREATE TABLE event_reg (
	guild_id character varying(50) NOT NULL,
	event_name character varying(50) NOT NULL,
	active_ind boolean NOT NULL,
	PRIMARY KEY(guild_id, event_name)
);

INSERT INTO event_reg (guild_id, event_name, active_ind) 
	VALUES('574485587470319616','message',TRUE);