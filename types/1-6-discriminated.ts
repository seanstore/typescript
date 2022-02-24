{
  // login -> success, fail
  type SuccessState = {
    result: "success"; // 공통적인 프로퍼티를 가지고 있으므로써 구분이 쉬워지게 해준다.
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function logIn(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
