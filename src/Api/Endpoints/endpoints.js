export const endpoints = {
  auth: {
    register: "/register",
    login: "/login",
  },
  cms: {
    banner: "/banner",
    service: "/service",
    testimonial: "/testimonial",
    team: "/team",
    allBlog: "/allBlog",
    showallcategory: "/showallcategory",
    search: "/search",
    categoryPost: "category/post",
    letestPost: "/letest-post",
    blogdetails: "/blogdetails",
    comment: "/comment",
    createComment: "/blog",
    course: "/course",
    courseApply: "/course/apply",
  },
};

export const sucessNotificationEndPoints = [
  endpoints.auth.signup,
  endpoints.auth.login,
  endpoints.auth.profileDetails,
  endpoints.cms.list,
];
