import { User } from "./user";

export function displayUser(user: User) {
  console.log(`User:`);
  console.log(`  . ID=${user.id}`);
  console.log(`  . Firstname=${user.firstName}`);
  console.log(`  . Lastname=${user.lastName}`);
}
