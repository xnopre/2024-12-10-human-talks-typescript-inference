import {FakeHttpClient} from "./fakeHttpClient";

export class UserHttpRepository {
    getUser(id: number) {
        return new FakeHttpClient().get(`/user?id=${id}`)
    }
}