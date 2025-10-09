ALTER TABLE `content_item` MODIFY COLUMN `id` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `content_item` MODIFY COLUMN `content_model_id` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `content_item` MODIFY COLUMN `release_id` varchar(36);--> statement-breakpoint
ALTER TABLE `content_model` MODIFY COLUMN `id` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `release` MODIFY COLUMN `id` varchar(36) NOT NULL;