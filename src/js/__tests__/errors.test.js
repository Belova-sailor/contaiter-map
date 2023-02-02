import ErrorRepository from "../errors";

test("get value by code", () => {
  const testErrRepository = new ErrorRepository();
  testErrRepository.error.set(400, "Bad Request");
  expect(testErrRepository.translate(400)).toBe("Bad Request");
});

test("return error from unknown error", () => {
  const testErrRepository = new ErrorRepository();
  expect(testErrRepository.translate(1000)).toBe("Unknown error");
});
