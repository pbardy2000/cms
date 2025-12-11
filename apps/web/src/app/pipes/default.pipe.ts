import { Pipe } from "@angular/core";

@Pipe({
  name: "default"
})
export class DefaultPipe {
  transform(value: unknown): string {
    return value as string;
  }
}