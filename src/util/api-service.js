import axios from "axios";
import Cookies from "js-cookie";
import { checkRes } from "./helper";
import { alertPop } from "./helper";

const base_url = process.env.REACT_APP_BASE;
const token = Cookies.get("OTLToken") || "";

axios.defaults.headers.post["Content-Type"] = "application/json";

const alert = (messages) => {
  alertPop("error", messages ? messages : "Something went wrong");
};

/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
  try {
    let data = await axios.get(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
            Authorization: `${token}`,
          },
    });
    return data;
  } catch (error) {
    let errors = error.response?.data?.errors;

    if (error.response?.data?.message) {
      alert(error.response?.data?.message);
    } else if (errors.length) {
      if (errors && Object.keys(errors).length) {
        for (var key of Object.keys(errors)) {
          // console.log(key + " -> " + errors[key]);
          alert(errors[key]);
        }
      }
    } else {
      alert();
    }
  }
};

/* query ---> api url to query with
     data ---> data to be posted
     no_token ---> acts as a flag for no need to use token */
export const postData = async (query, data, no_token) => {
  try {
    let res = await axios({
      method: "post",
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
            Authorization: `${token}`,
          },
      data: data,
    });

    if (checkRes(res?.data?.code)) {
      return res.data;
    } else {
      if (res?.data?.message?.length) {
        res?.data?.message.forEach((mess) => {
          alertPop("error", mess);
        });
      } else {
        alert();
      }
    }
  } catch (error) {
    let errors = error.response?.data?.errors;

    if (error.response?.data?.message) {
      alert(error.response?.data?.message);
    } else if (errors?.length) {
      if (errors && Object.keys(errors)?.length) {
        for (var key of Object.keys(errors)) {
          // console.log(key + " -> " + errors[key]);
          alert(errors[key]);
        }
      }
    } else {
      alert();
    }

    return false;
  }
};

export const putData = async (query, data, no_token) => {
  try {
    console.log(`${base_url}${query}`);
    let res = await axios({
      method: "put",
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
            Authorization: `${token}`,
          },
      data: data,
    });

    return res;
  } catch (error) {
    console.log("error", error);
    // checkRes(error.response.status);
    // error.response && error.response.data && error.response.data.messages
    //   ? error.response.data.messages.map((err) => {
    //       // alertPop(error_status, err);
    //       console.log("err", err);
    //     })
    //   : console.log("error", error); //errorHandle(error);
    return false;
  }
};

// const setUserProfile = async () => {
//   try {
//     let res = await axios({
//       method: "post",
//       url: `${base_url}${ME}`,
//       headers: {
//         Authorization: `bearer ${token}`,
//       },
//       data: {},
//     });

//     if (res?.data?.status_code && checkRes(res.data.status_code)) {
//       window.localStorage.setItem("profile", JSON.stringify(res.data));
//     }
//   } catch (error) {
//     console.log("error", error);
//   }
// };

export const deleteData = async (query, no_token) => {
  try {
    let data = await axios.delete(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
            "x-auth-token": `${token}`,
          },
    });
    return data;
  } catch (error) {
    // checkRes(error?.response?.status);
    // error.response?.data?.messages &&
    // typeof error.response?.data?.messages === "object"
    // ? error.response.data.messages.map((err) => {
    //     alertPop(error_status, err);
    //     })
    // : errorHandle(error);
    // return false;
  }
};
