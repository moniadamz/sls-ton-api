jest.mock("../../../src/services/user");

JSON.stringify = jest.fn().mockImplementationOnce((whatever) => whatever);

import { service } from "../../../src/services/user";
import { getUser } from "../../../src/handlers/user/get";

describe("GET User Handler", () => {
  test("should return code 200 when finding the user", async () => {
    service.getUserById.mockResolvedValue({ Item: "everything works" });
    const event = { pathParameters: { id: "123" } };
    const context = {};

    const response = await getUser(event, context);
    expect(response).toEqual({
      statusCode: 200,
      body: "everything works",
    });
  });
});
