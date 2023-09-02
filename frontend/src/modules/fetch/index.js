import instance from "../axios/index";

export const listBook = async () => {
  try {
    const response = await instance.get("/books");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async (params) => {
  try {
    const response = await instance.post("/books", params, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (params) => {
  try {
    const { email, password } = params;

    const response = await instance({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
    });

    const { token } = response.data;

    localStorage.setItem("accessToken", token);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
