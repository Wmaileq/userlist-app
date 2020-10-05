import { runSaga } from "@redux-saga/core";
import { authSaga } from "../auth";
import { LOGIN_SUCCESS, loginFailure, loginSuccess } from "../../actions/auth";

describe("users sagas tests", () => {
  it("should successfully login user", async () => {
    const dispatched = [];
    const mathSpy = jest.spyOn(Math, "random");
    mathSpy.mockReturnValue(1);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: "test" }),
      },
      authSaga,
      {
        payload: {
          login: "admin",
          password: "12345",
        },
      }
    ).toPromise();

    expect(dispatched).toStrictEqual([loginSuccess()]);
  });

  it("should put error action if credentials does not match", async () => {
    const dispatched = [];
    const mathSpy = jest.spyOn(Math, "random");
    mathSpy.mockReturnValue(1);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: "test" }),
      },
      authSaga,
      {
        payload: {
          login: "admin",
          password: "1234599",
        },
      }
    ).toPromise();

    expect(dispatched).toStrictEqual([
      loginFailure("Username or password is incorrect."),
    ]);
  });

  it("should put error action if connection error happened", async () => {
    const dispatched = [];
    const mathSpy = jest.spyOn(Math, "random");
    mathSpy.mockReturnValue(0.02);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: "test" }),
      },
      authSaga,
      {
        payload: {
          login: "admin",
          password: "12345",
        },
      }
    ).toPromise();

    expect(dispatched).toStrictEqual([
      loginFailure("Oops... Some connection error happened."),
    ]);
  });
});
