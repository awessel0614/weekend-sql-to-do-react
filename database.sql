CREATE TABLE "tasklist" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(200) NOT NULL,
	"complete" BOOLEAN default false
);

INSERT INTO "tasklist" ("task", "complete")
VALUES  ('Make Bed', false),
		('Brush Teeth', false),
		('Take Shower', false);