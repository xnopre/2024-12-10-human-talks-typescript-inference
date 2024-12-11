import {UserHttpRepository} from "./userHttpRepository";

export class DirectoryService {
    getUser(id: number) {
        return new UserHttpRepository().getUser(id);
    }
}