import { enviroment } from "@/configs/constants";
import { Post } from "@/contexts/blog/posts";

export const findQuizById = async (id: string) => {
  let response: { data: any; message: string; statusCode: number } = {
    data: null,
    message: "Erro ao buscar quiz",
    statusCode: 404,
  };

  await fetch(enviroment.API_URL + "/quizzes/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      response = error;
    });

  return response;
};

export const getQuestionById = async (id: string) => {
  let response: { data: any; message: string; statusCode: number } = {
    data: null,
    message: "Erro ao buscar questão",
    statusCode: 404,
  };

  await fetch(enviroment.API_URL + "/questions/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      response = error;
    });

  return response;
};

export const getPosts = async (posts?: Post[] | []) => {
  if (posts && posts.length > 0) {
    return posts;
  }

  try {
    let response: {
      data: Post[] | [];
      total: number;
      message: string;
      statusCode: number;
    } = {
      data: [],
      total: 0,
      message: "Erro ao buscar questão",
      statusCode: 404,
    };

    await fetch(enviroment.API_URL + "/blogs/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        throw error;
      });

    if (response.statusCode !== 200) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id: string) => {
  try {
    let response: {
      data: Post;
      total: number;
      message: string;
      statusCode: number;
    } = {
      data: [] as any,
      total: 0,
      message: "Erro ao buscar questão",
      statusCode: 404,
    };

    await fetch(enviroment.API_URL + "/blogs/post/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        throw error;
      });

    if (response.statusCode !== 200) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLocation = async (
  location: { country: string; state: string } | null
) => {
  try {
    let response: {
      data: { country: string; state: string };
      message: string;
      statusCode: number;
    } = {
      data: { country: "Brasil", state: "São Paulo" },
      message: "Erro ao buscar localização",
      statusCode: 404,
    };

    if (location && Object.keys(location).length > 0) {
      return location;
    }

    await fetch(`${enviroment.API_URL}/globals/location`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        throw error;
      });

    if (response.statusCode !== 200) {
      throw response;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
