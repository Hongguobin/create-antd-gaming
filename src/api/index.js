import request from "./request";
// 登录接口
export function gainGirl() {
  return request({
    url: "/default/getGirl",
    method: "get"
  });
}