CREATE TABLE `content_item` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(255) NOT NULL,
	`content_type` varchar(255) NOT NULL,
	`content_model_id` int NOT NULL,
	`release_id` int,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp,
	`deleted_at` timestamp,
	`publish_at` timestamp,
	`data` json NOT NULL,
	CONSTRAINT `content_item_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `content_model` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` varchar(255) NOT NULL,
	`description` varchar(255),
	`version` int NOT NULL DEFAULT 1,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp,
	`deleted_at` timestamp,
	`data` json NOT NULL,
	CONSTRAINT `content_model_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `release` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp,
	`deleted_at` timestamp,
	`publish_at` timestamp NOT NULL,
	CONSTRAINT `release_id` PRIMARY KEY(`id`)
);
